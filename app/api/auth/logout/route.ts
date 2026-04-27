import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import cookie from 'cookie';

const COOKIE_NAME = 'rl_session';

export async function POST(req: Request) {
  try {
    const raw = req.headers.get('cookie') || '';
    const parsed = cookie.parse(raw || '');
    const token = parsed[COOKIE_NAME];
    if (token) {
      db.prepare('DELETE FROM sessions WHERE token = ?').run(token);
    }
    const res = NextResponse.json({ ok: true });
    res.headers.set('Set-Cookie', `${COOKIE_NAME}=; Path=/; HttpOnly; Max-Age=0`);
    return res;
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

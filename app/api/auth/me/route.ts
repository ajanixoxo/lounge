import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import cookie from 'cookie';

const COOKIE_NAME = 'rl_session';

export async function GET(req: Request) {
  try {
    const raw = req.headers.get('cookie') || '';
    const parsed = cookie.parse(raw || '');
    const token = parsed[COOKIE_NAME];
    if (!token) return NextResponse.json({ authenticated: false }, { status: 200 });

    const session = db.prepare('SELECT * FROM sessions WHERE token = ?').get(token);
    if (!session) return NextResponse.json({ authenticated: false }, { status: 200 });

    // check expiry
    if (new Date(session.expires_at) < new Date()) {
      db.prepare('DELETE FROM sessions WHERE id = ?').run(session.id);
      return NextResponse.json({ authenticated: false }, { status: 200 });
    }

    const user = db.prepare('SELECT id, username, created_at FROM users WHERE id = ?').get(session.user_id);
    return NextResponse.json({ authenticated: true, user }, { status: 200 });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

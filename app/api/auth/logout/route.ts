import { NextResponse } from 'next/server';

const COOKIE_NAME = 'rl_session';

export async function POST(req: Request) {
  try {
    const res = NextResponse.json({ ok: true });
    res.headers.set('Set-Cookie', `${COOKIE_NAME}=; Path=/; HttpOnly; Max-Age=0`);
    return res;
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

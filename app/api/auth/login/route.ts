import { NextResponse } from 'next/server';
import { getDb } from '@/lib/db';
import bcrypt from 'bcryptjs';
import crypto from 'crypto';

const COOKIE_NAME = 'rl_session';

export async function POST(req: Request) {
  try {
    const { username, password } = await req.json();
    if (!username || !password) return NextResponse.json({ error: 'Missing fields' }, { status: 400 });

    const db = await getDb();
    const user = db.prepare('SELECT * FROM users WHERE username = ?').get(username);
    if (!user) return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });

    const ok = bcrypt.compareSync(password, user.password);
    if (!ok) return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });

    const token = crypto.randomBytes(32).toString('hex');
    const expiresAt = new Date(Date.now() + 1000 * 60 * 60 * 24 * 7).toISOString(); // 7 days

    console.log('[LOGIN] Creating session:', { token: token.substring(0, 10) + '...', userId: user.id, expiresAt });
    db.prepare('INSERT INTO sessions (token, user_id, expires_at) VALUES (?, ?, ?)').run(token, user.id, expiresAt);
    
    // Verify session was created
    const session = db.prepare('SELECT * FROM sessions WHERE token = ?').get(token);
    console.log('[LOGIN] Session verified:', !!session);

    const res = NextResponse.json({ ok: true });
    res.cookies.set(COOKIE_NAME, token, { 
      httpOnly: true, 
      secure: false, // Set to false for local dev (http)
      path: '/', 
      maxAge: 60 * 60 * 24 * 7,
      sameSite: 'lax'
    });
    console.log('[LOGIN] Response headers:', res.headers.getSetCookie());
    return res;
  } catch (err: any) {
    console.error('[LOGIN] Error:', err.message);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

import { NextResponse } from 'next/server';
import { getDb } from '@/lib/db';
import cookie from 'cookie';

const COOKIE_NAME = 'rl_session';

export async function GET(req: Request) {
  try {
    const raw = req.headers.get('cookie') || '';
    console.log('[ME] Raw cookie header:', raw);
    const parsed = cookie.parse(raw || '');
    console.log('[ME] Parsed cookies:', Object.keys(parsed));
    const token = parsed[COOKIE_NAME];
    console.log('[ME] Token from cookie:', token ? token.substring(0, 10) + '...' : 'NOT FOUND');
    if (!token) return NextResponse.json({ authenticated: false }, { status: 200 });

    const db = await getDb();
    const session = db.prepare('SELECT * FROM sessions WHERE token = ?').get(token);
    console.log('[ME] Session lookup result:', session);
    if (!session) return NextResponse.json({ authenticated: false }, { status: 200 });

    // check expiry
    if (new Date(session.expires_at) < new Date()) {
      db.prepare('DELETE FROM sessions WHERE id = ?').run(session.id);
      return NextResponse.json({ authenticated: false }, { status: 200 });
    }

    const user = db.prepare('SELECT id, username, created_at FROM users WHERE id = ?').get(session.user_id);
    console.log('[ME] User lookup result:', user);
    return NextResponse.json({ authenticated: true, user }, { status: 200 });
  } catch (err: any) {
    console.error('[ME] Error:', err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

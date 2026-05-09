import { NextResponse } from 'next/server';
import crypto from 'crypto';

const COOKIE_NAME = 'rl_session';

export async function POST(req: Request) {
  try {
    const { username, password } = await req.json();
    if (!username || !password) return NextResponse.json({ error: 'Missing fields' }, { status: 400 });

    const validUsername = process.env.ADMIN_USERNAME || 'rixosadmin';
    const validPassword = process.env.ADMIN_PASSWORD || 'rixos155123@rixos';

    if (username !== validUsername || password !== validPassword) {
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
    }

    const secret = process.env.ADMIN_SECRET || 'default_super_secret_key_123';
    const token = crypto.createHmac('sha256', secret).update('admin_session').digest('hex');

    const res = NextResponse.json({ ok: true });
    res.cookies.set(COOKIE_NAME, token, { 
      httpOnly: true, 
      secure: process.env.NODE_ENV === 'production',
      path: '/', 
      maxAge: 60 * 60 * 24 * 7, // 7 days
      sameSite: 'lax'
    });
    
    return res;
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

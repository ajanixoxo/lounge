import { NextResponse } from 'next/server';
import cookie from 'cookie';
import crypto from 'crypto';

const COOKIE_NAME = 'rl_session';

export async function GET(req: Request) {
  try {
    const raw = req.headers.get('cookie') || '';
    const parsed = cookie.parse(raw);
    const token = parsed[COOKIE_NAME];
    
    if (!token) return NextResponse.json({ authenticated: false }, { status: 200 });

    const secret = process.env.ADMIN_SECRET || 'default_super_secret_key_123';
    const expectedToken = crypto.createHmac('sha256', secret).update('admin_session').digest('hex');

    if (token !== expectedToken) {
      return NextResponse.json({ authenticated: false }, { status: 200 });
    }

    return NextResponse.json({ authenticated: true, user: { username: process.env.ADMIN_USERNAME || 'rixosadmin' } }, { status: 200 });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

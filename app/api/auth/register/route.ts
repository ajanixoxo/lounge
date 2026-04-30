import { NextResponse } from 'next/server';
import { getDb } from '@/lib/db';
import bcrypt from 'bcryptjs';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { username, password } = body;
    if (!username || !password) return NextResponse.json({ error: 'Missing fields' }, { status: 400 });

    const hashed = bcrypt.hashSync(password, 10);
    const db = await getDb();
    const stmt = db.prepare('INSERT INTO users (username, password) VALUES (?, ?)');
    const info = stmt.run(username, hashed);
    return NextResponse.json({ ok: true, userId: info.lastInsertRowid });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

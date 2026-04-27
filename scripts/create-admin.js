#!/usr/bin/env node
const bcrypt = require('bcryptjs');
const Database = require('better-sqlite3');
const path = require('path');
const dbPath = path.join(process.cwd(), 'data', 'auth.db');

const db = new Database(dbPath);
const argv = process.argv.slice(2);
if (argv.length < 2) {
  console.error('Usage: node scripts/create-admin.js <username> <password>');
  process.exit(1);
}
const [username, password] = argv;
const hashed = bcrypt.hashSync(password, 10);
try {
  const stmt = db.prepare('INSERT INTO users (username, password) VALUES (?, ?)');
  const info = stmt.run(username, hashed);
  console.log('Created user id', info.lastInsertRowid);
} catch (err) {
  console.error('Failed to create user:', err.message);
}

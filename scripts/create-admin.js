#!/usr/bin/env node
const bcrypt = require('bcryptjs');
const { execSync } = require('child_process');
const path = require('path');

const dbPath = path.join(process.cwd(), 'data', 'auth.db');
const argv = process.argv.slice(2);

if (argv.length < 2) {
  console.error('Usage: node scripts/create-admin.js <username> <password>');
  process.exit(1);
}

const [username, password] = argv;
const hashed = bcrypt.hashSync(password, 10);

try {
  // Escape single quotes for SQL
  const escapedUsername = username.replace(/'/g, "''");
  const escapedHash = hashed.replace(/'/g, "''");
  
  const sql = `INSERT INTO users (username, password) VALUES('${escapedUsername}', '${escapedHash}');`;
  
  console.log('Creating admin user:', username);
  execSync(`sqlite3 "${dbPath}" "${sql}"`, { stdio: 'inherit' });
  
  // Verify creation
  const result = execSync(`sqlite3 "${dbPath}" "SELECT id, username FROM users WHERE username='${escapedUsername}';"`, { encoding: 'utf8' });
  if (result.includes(username)) {
    console.log('✓ User created successfully');
    console.log(result);
  } else {
    console.error('✗ User creation verification failed');
    process.exit(1);
  }
} catch (err) {
  console.error('Failed to create user:', err.message);
  process.exit(1);
}


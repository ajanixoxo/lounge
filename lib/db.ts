import fs from "fs";
import path from "path";
import initSqlJs, { Database as SqlJsDatabase } from "sql.js";

const DB_PATH = path.join(process.cwd(), "data", "auth.db");
let sqlJsModule: any = null;

async function getSqlJs() {
  if (!sqlJsModule) {
    const wasmPath = path.join(process.cwd(), 'node_modules/sql.js/dist/sql-wasm.wasm');
    const wasmBuffer = fs.readFileSync(wasmPath);
    // Convert Buffer to Uint8Array for sql.js
    const wasmBinary = new Uint8Array(wasmBuffer) as any;
    sqlJsModule = await initSqlJs({
      wasmBinary: wasmBinary
    });
  }
  return sqlJsModule;
}

function loadDatabase() {
  const dir = path.dirname(DB_PATH);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  
  let data: Uint8Array | undefined;
  if (fs.existsSync(DB_PATH)) {
    data = fs.readFileSync(DB_PATH);
  }
  
  return data;
}

function initializeTables(db: SqlJsDatabase) {
  // Create tables if they don't exist
  db.run(
    `CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      username TEXT UNIQUE NOT NULL,
      password TEXT NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )`
  );

  db.run(
    `CREATE TABLE IF NOT EXISTS sessions (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      token TEXT UNIQUE NOT NULL,
      user_id INTEGER NOT NULL,
      expires_at DATETIME NOT NULL,
      FOREIGN KEY(user_id) REFERENCES users(id)
    )`
  );
}

function saveDatabase(db: SqlJsDatabase) {
  const data = db.export();
  const buffer = Buffer.from(data);
  fs.writeFileSync(DB_PATH, buffer);
  console.log('[DB] Saved to disk:', DB_PATH);
}

// Wrapper to mimic better-sqlite3 API
class DbWrapper {
  private db: SqlJsDatabase;

  constructor(db: SqlJsDatabase) {
    this.db = db;
  }

  prepare(sql: string) {
    const db = this.db;
    return {
      run: (...params: any[]) => {
        console.log('[DB] RUN query:', sql, 'params:', params);
        try {
          db.run(sql, params);
          saveDatabase(db);
          // Return lastInsertRowid-like object
          const result = db.exec("SELECT last_insert_rowid() as id");
          const lastId = result?.[0]?.values?.[0]?.[0] || null;
          console.log('[DB] RUN lastInsertRowid:', lastId);
          return {
            lastInsertRowid: lastId,
          };
        } catch (e) {
          console.error('[DB] RUN error:', e);
          throw e;
        }
      },
      get: (...params: any[]) => {
        console.log('[DB] GET query:', sql, 'params:', params);
        try {
          const result = db.exec(sql, params);
          console.log('[DB] GET result raw:', JSON.stringify(result));
          if (result && result.length > 0 && result[0].values && result[0].values.length > 0) {
            const row = result[0].values[0];
            const cols = result[0].columns;
            const obj: any = {};
            cols.forEach((col: string, i: number) => {
              obj[col] = row[i];
            });
            console.log('[DB] GET result object:', obj);
            return obj;
          }
          console.log('[DB] GET result: undefined (no rows)');
          return undefined;
        } catch (e) {
          console.error('[DB] GET error:', e);
          throw e;
        }
      },
      all: (...params: any[]) => {
        console.log('[DB] ALL query:', sql, 'params:', params);
        try {
          const result = db.exec(sql, params);
          if (result && result.length > 0 && result[0].values && result[0].values.length > 0) {
            const rows = result[0].values;
            const cols = result[0].columns;
            return rows.map((row: any) => {
              const obj: any = {};
              cols.forEach((col: string, i: number) => {
                obj[col] = row[i];
              });
              return obj;
            });
          }
          console.log('[DB] ALL result: [] (no rows)');
          return [];
        } catch (e) {
          console.error('[DB] ALL error:', e);
          throw e;
        }
      },
    };
  }
}

export async function getDb() {
  const SQL = await getSqlJs();
  const data = loadDatabase();
  // Open database in read-only mode for serverless (Netlify) compatibility
  const db = new SQL.Database(data, { readonly: true });
  // Do not call initializeTables in read-only mode
  return new DbWrapper(db);
}

export default getDb;

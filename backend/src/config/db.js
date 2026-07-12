import sqlite3 from "sqlite3";

sqlite3.verbose();

const db = new sqlite3.Database("./chat.db", (err) => {
  if (err) {
    console.error("Database Error:", err.message);
  } else {
    console.log("SQLite Connected");

    db.run(`
      CREATE TABLE IF NOT EXISTS messages (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT NOT NULL,
        text TEXT NOT NULL,
        createdAt DATETIME DEFAULT (datetime('now', '+5 hours', '+30 minutes'))
      )
    `);
  }
});

export default db;
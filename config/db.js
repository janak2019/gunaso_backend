import mysql from "mysql2";
import dotenv from "dotenv";

dotenv.config();

// const db = mysql.createConnection({
//   host: process.env.DB_HOST,
//   port: process.env.DB_PORT,   // ✅ important
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_NAME,
// });
const db = mysql.createConnection(process.env.DATABASE_URL);
db.connect((err) => {
  if (err) {
    console.log("❌ DB Error:", err);
  } else {
    console.log("✅ Connected to Railway MySQL");
  }
});

export default db;
import db from "../config/db.js";

// 👥 GET ALL STAFF
export const getUsers = (req, res) => {
  const { role } = req.query;

  let sql = "SELECT id, mobile, role FROM users";
  let params = [];

  if (role) {
    sql += " WHERE role = ?";
    params.push(role);
  }

  db.query(sql, params, (err, result) => {
    if (err) {
      return res.status(500).json(err); // ✅ IMPORTANT
    }

    return res.json(result); // ✅ only one response
  });
};

// ➕ CREATE STAFF
export const createUsers = (req, res) => {
  const { name, mobile, password } = req.body;

  const sql = `
    INSERT INTO users (name, mobile, password, role)
    VALUES (?, ?, ?, 'staff')
  `;

  db.query(sql, [name, mobile, password], (err, result) => {
    if (err) return res.status(500).json(err);

    res.json({
      message: "Staff created successfully",
      id: result.insertId,
    });
  });
};

// 📥 STAFF ASSIGNED COMPLAINTS
export const getUsersComplaints = (req, res) => {
  const staffId = req.params.id;

  const sql = `
    SELECT * FROM complaints
    WHERE assigned_to = ?
    ORDER BY id DESC
  `;

  db.query(sql, [staffId], (err, result) => {
    if (err) return res.status(500).json(err);

    res.json(result);
  });
};
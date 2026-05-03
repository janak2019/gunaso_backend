import db from "../config/db.js";

// 👥 GET ALL STAFF
export const getStaffs = (req, res) => {
  const sql = "SELECT id, name, mobile FROM users WHERE role='staff'";

  db.query(sql, (err, result) => {
    if (err) return res.status(500).json(err);
    res.json(result);
  });
};

// ➕ CREATE STAFF
export const createStaff = (req, res) => {
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
export const getStaffComplaints = (req, res) => {
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
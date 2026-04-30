
import db from "../config/db.js";

// ➕ Submit Complaint
export const createComplaint = (req, res) => {
  const { mobile, type, description } = req.body;

  const sql =
    "INSERT INTO complaints (mobile, type, description) VALUES (?, ?, ?)";

  db.query(sql, [mobile, type, description], (err, result) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Complaint submitted" });
  });
};

// 📥 Get All Complaints (Admin)
export const getComplaints = (req, res) => {
  db.query("SELECT * FROM complaints ORDER BY id DESC", (err, result) => {
    if (err) return res.status(500).json(err);
    res.json(result);
  });
};

// 🔄 Update Status
export const updateStatus = (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  const sql = "UPDATE complaints SET status=? WHERE id=?";

  db.query(sql, [status, id], (err, result) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Status updated" });
  });
};
// track complaint
export const trackComplaint = (req, res) => {
  const { mobile } = req.params;

  const sql = "SELECT * FROM complaints WHERE mobile = ? ORDER BY id DESC";

  db.query(sql, [mobile], (err, result) => {
    if (err) return res.status(500).json(err);
    res.json(result);
  });
};
// send summary data
export const getStats = (req, res) => {
  const sql = `
    SELECT 
      COUNT(*) as total,
      SUM(CASE WHEN status='Pending' THEN 1 ELSE 0 END) as pending,
      SUM(CASE WHEN status='Resolved' THEN 1 ELSE 0 END) as resolved
    FROM complaints
  `;

  db.query(sql, (err, result) => {
    if (err) return res.status(500).json(err);
    res.json(result[0]);
  });
};

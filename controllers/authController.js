import jwt from "jsonwebtoken";

export const login = (req, res) => {
  const { username, password } = req.body;

  // simple hardcoded admin (upgrade later)
  if (username === "admin" && password === "1234") {
    const token = jwt.sign({ role: "admin" }, "SECRET_KEY", {
      expiresIn: "1h",
    });

    return res.json({ token });
  }

  res.status(401).json({ message: "Invalid credentials" });
};
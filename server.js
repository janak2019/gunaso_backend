import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";

import complaintRoutes from "./routes/complaints.js";
import authRoutes from "./routes/auth.js";
dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use("/api/complaints", complaintRoutes);
app.use("/api/auth", authRoutes);


app.listen(process.env.PORT, () => {
  console.log("Server running");
});
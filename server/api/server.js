require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const serverless = require("serverless-http");
const connectDB = require("../config/db.js")
const authRoutes = require("../routes/authRoutes.js")
const incomeRoutes = require("../routes/incomeRoutes.js")
const expenseRoutes = require("../routes/expenseRoutes.js")
const dashboardRoutes = require("../routes/dashboardRoutes.js")

const app = express();

// Middleware to handle CORS
app.use(
    cors({
        origin: process.env.CLIENT_URL || "*",
        methods: ["GET", "POST", "PUT", "DELETE"],
        allowedHeaders: ["content-type", "Authorization"],
        credentials: true,
    })
);

app.use(express.json());
connectDB();

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/income", incomeRoutes);
app.use("/api/v1/expense", expenseRoutes);
app.use("/api/v1/dashboard", dashboardRoutes);

// Serve uploads folder
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.get("/", (req, res) => {
    res.send("🚀 Welcome Mr. Ayush");
  });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`));

if (process.env.VERCEL) {
    const serverless = require("serverless-http");
    module.exports = serverless(app);
  } else {
    const PORT = process.env.PORT || "https://bachat-book-expense-tracker-app.vercel.app";
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  }

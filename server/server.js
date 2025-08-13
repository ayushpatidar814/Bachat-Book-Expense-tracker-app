require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const connectDB = require("./config/db.js")
const authRoutes = require("./routes/authRoutes.js")
const incomeRoutes = require("./routes/incomeRoutes.js")
const expenseRoutes = require("./routes/expenseRoutes.js")
const dashboardRoutes = require("./routes/dashboardRoutes.js")

const app = express();

// Production frontend URL
const allowedOrigins = [
  'https://bachat-book-expense-tracker-app-1.onrender.com'
];

// CORS config
app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (like curl, Postman) for testing
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    } else {
      return callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));


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

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`));


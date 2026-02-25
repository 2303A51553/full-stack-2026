const express = require("express");
const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());

app.get("/api/dashboard", (req, res) => {
  res.json({ message: "Dashboard API working" });
});

app.get("/api/expenses", (req, res) => {
  res.json({ message: "Expenses API working" });
});

app.get("/api/income", (req, res) => {
  res.json({ message: "Income API working" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
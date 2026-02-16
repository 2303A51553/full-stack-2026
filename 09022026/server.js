const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/api/dashboard", (req, res) => {
  res.json({
    totalIncome: 50000,
    totalExpenses: 32000
  });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});

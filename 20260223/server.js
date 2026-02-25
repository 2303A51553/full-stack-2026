const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// MongoDB Connection
mongoose.connect("mongodb://127.0.0.1:27017/lendingDB")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

// Load index.html
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

// Schema
const lendSchema = new mongoose.Schema({
    bookTitle: String,
    borrowerName: String,
    dueDate: String
});

const Lend = mongoose.model("Lend", lendSchema);

// POST
app.post("/lend", async (req, res) => {
    const newLend = new Lend(req.body);
    await newLend.save();
    res.send("<h3>Book Lent Successfully</h3><a href='/'>Go Back</a>");
});

// GET
app.get("/lend", async (req, res) => {
    const records = await Lend.find();
    res.json(records);
});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});
require("dotenv").config({ path: "../.env" });
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

// MongoDB connection
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB Connected");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
    process.exit(1);
  }
};

// Visitor schema and model
const visitorSchema = new mongoose.Schema({
  count: { type: Number, default: 0 },
});
const Visitor = mongoose.model("Visitor", visitorSchema);

// Initialize visitor count
const initializeVisitorCount = async () => {
  try {
    await Visitor.findOneAndUpdate(
      {},
      { $setOnInsert: { count: 0 } },
      { upsert: true, new: true }
    );
  } catch (err) {
    console.error("Error initializing visitor count:", err);
  }
};

// Initialize DB connection and visitor count on startup
connectDB();
initializeVisitorCount();

// Routes to get and increase visitor count
app.get("/api/visitor", async (req, res) => {
  try {
    const visitor = await Visitor.findOne();
    if (!visitor) return res.status(404).json({ message: "Visitor data not found" });
    res.json({ count: visitor.count });
  } catch (err) {
    console.error("Error fetching visitor count:", err);
    res.status(500).json({ message: "Server error" });
  }
});

app.post("/api/visitor/increase", async (req, res) => {
  try {
    const visitor = await Visitor.findOneAndUpdate(
      {},
      { $inc: { count: 1 } },
      { new: true }
    );
    res.json({ count: visitor.count });
  } catch (err) {
    console.error("Error increasing visitor count:", err);
    res.status(500).json({ message: "Server error" });
  }
});

// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// Initialize app
const app = express();
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose
  .connect("mongodb://mongo:27017/stockdb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB Error:", err));

// Schema
const ContactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Contact = mongoose.model("Contact", ContactSchema);

// Routes
app.get("/", (req, res) => {
  res.send("Backend is running...");
});

app.post("/contact", async (req, res) => {
  try {
o
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const newContact = new Contact({ name, email, message });
    await newContact.save();

    res.status(200).json({ message: "Form submitted successfully" });
  } catch (error) {
    console.error("Error submitting form:", error);
    res.status(500).json({ error: "Server error" });
  }
});

// Start server
const PORT = 5008;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


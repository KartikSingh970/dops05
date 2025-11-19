const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const contactRoutes = require("./routes/contactRoutes");

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

// Routes
app.use("/api/contact", contactRoutes);

app.get("/", (req, res) => {
  res.send("Backend is running...");
});

// Start server
const PORT = 5008;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


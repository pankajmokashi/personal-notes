const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const app = express();
const groupRoutes = require("./routes/groups");
const noteRoutes = require("./routes/notes");
require("dotenv").config();

connectDB();

app.use(cors());
app.use(express.json());

app.use("/api/groups", groupRoutes);
app.use("/api/notes", noteRoutes);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));

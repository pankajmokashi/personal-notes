const mongoose = require("mongoose");

const NoteSchema = new mongoose.Schema({
  text: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  group: { type: mongoose.Schema.Types.ObjectId, ref: "Group" },
});

module.exports = mongoose.model("Note", NoteSchema);

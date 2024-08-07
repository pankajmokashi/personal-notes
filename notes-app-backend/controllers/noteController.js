const Note = require("../models/Note");
const Group = require("../models/Group");

exports.addNote = async (req, res) => {
  try {
    const { text, groupId } = req.body;
    const note = new Note({
      text,
      group: groupId,
    });
    await note.save();
    res.status(201).json(note);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getNotesByGroup = async (req, res) => {
  try {
    const { groupId } = req.params;
    const notes = await Note.find({ group: groupId });
    res.status(200).json(notes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

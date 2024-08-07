const Group = require("../models/Group");

exports.createGroup = async (req, res) => {
  try {
    const { name, color } = req.body;
    const newGroup = new Group({ name, color });
    await newGroup.save();
    res.status(201).json(newGroup);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAllGroups = async (req, res) => {
  try {
    const groups = await Group.find();
    res.status(200).json(groups);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

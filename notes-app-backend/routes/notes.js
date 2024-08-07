const express = require("express");
const { addNote, getNotesByGroup } = require("../controllers/noteController");
const router = express.Router();

router.post("/", addNote);
router.get("/:groupId", getNotesByGroup);

module.exports = router;

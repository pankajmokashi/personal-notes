const express = require("express");
const { createGroup, getAllGroups } = require("../controllers/groupController");
const router = express.Router();

router.post("/", createGroup);
router.get("/", getAllGroups);

module.exports = router;

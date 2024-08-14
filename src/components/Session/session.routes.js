const express = require('express');
const sessionController = require("./session.controller")

const router = express.Router();

router.post("/session", sessionController.createSession)
router.get("/session", sessionController.fetchAllSessions)
router.get("/session/:sessionID", sessionController.fetchSession)
router.put("/session/:sessionID", sessionController.updateSession)
router.delete("/session/:sessionID", sessionController.deleteSession)


module.exports = router
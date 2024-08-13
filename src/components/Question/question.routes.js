const express = require('express');
const questionController = require("./question.controller")

const router = express.Router();

router.post("/question", questionController.createQuestion)
router.get("/question", questionController.fetchAllQuestions)
router.get("/question/:questionID", questionController.fetchQuestion)
router.put("/question/:questionID", questionController.updateQuestion)
router.delete("/question/:questionID", questionController.deleteQuestion)


module.exports = router
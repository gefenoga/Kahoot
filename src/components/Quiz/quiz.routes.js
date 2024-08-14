const express = require('express');
const quizController = require("./quiz.controller")

const router = express.Router();

router.post("/quiz", quizController.createQuiz)
router.get("/quiz", quizController.fetchAllQuizzes)
router.get("/quiz/:quizID", quizController.fetchQuiz)
router.put("/quiz/:quizID", quizController.updateQuiz)
router.delete("/quiz/:quizID", quizController.deleteQuiz)


module.exports = router
const Quiz = require('./quiz.schema')


exports.createQuiz = async (req, res) => {
    try {
        const newQuiz = req.body;
        const doc = new Quiz(newQuiz)
        await doc.save()
        console.log('quiz saved successfully.')

        return res.status(201).send();
    }
    catch (err) {
        return res.status(500).json({ message: err.message });
    }
}

exports.fetchAllQuizzes = async (req, res) => {
    try {
        const docs = await Quiz.find();
        return res.status(200).json(docs);
    }
    catch (err) {
        return res.status(500).json({ message: err.message });
    }
}

exports.fetchQuiz = async (req, res) => {
    try {
        const quizID = req.params.quizID;
        const doc = await Quiz.findById(quizID);
        return res.status(200).json(doc);
    }
    catch (err) {
        return res.status(500).json({ message: err.message });
    }
}

exports.updateQuiz = async (req, res) => {
    try {
        const quizID = req.params.quizID;
        const changes = req.body;
        await Quiz.findByIdAndUpdate(quizID, changes);
        return res.status(200).send();
    }
    catch (err) {
        return res.status(500).json({ message: err.message });
    }
}

exports.deleteQuiz = async (req, res) => {
    try {
        const quizID = req.params.quizID;
        await Quiz.findByIdAndDelete(quizID);
        return res.status(200).send();
    }
    catch (err) {
        return res.status(500).json({ message: err.message });
    }
}
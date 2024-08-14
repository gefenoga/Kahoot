const Question = require('./question.schema')


exports.createQuestion = async (req, res) => {
    try {
        const newQuestion = req.body;
        const doc = new Question(newQuestion)
        await doc.save()
        console.log('Question saved successfully.')

        return res.status(201).send();
    }
    catch (err) {
        return res.status(500).json({ message: err.message });
    }
}

exports.fetchAllQuestions = async (req, res) => {
    try {
        const docs = await Question.find();
        return res.status(200).json(docs);
    }
    catch (err) {
        return res.status(500).json({ message: err.message });
    }
}

exports.fetchQuestion = async (req, res) => {
    try {
        const questionID = req.params.questionID;
        const doc = await Question.findById(questionID);
        return res.status(200).json(doc);
    }
    catch (err) {
        return res.status(500).json({ message: err.message });
    }
}

exports.updateQuestion = async (req, res) => {
    try {
        const questionID = req.params.questionID;
        const changes = req.body;
        await Question.findByIdAndUpdate(questionID, changes);
        return res.status(200).send();
    }
    catch (err) {
        return res.status(500).json({ message: err.message });
    }
}

exports.deleteQuestion = async (req, res) => {
    try {
        const questionID = req.params.questionID;
        await Question.findByIdAndDelete(questionID);
        return res.status(200).send();
    }
    catch (err) {
        return res.status(500).json({ message: err.message });
    }
}
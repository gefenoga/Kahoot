const mongoose = require('mongoose');

const sessionSchema = new mongoose.Schema({
    quizID: { type: mongoose.Types.ObjectId, required: true, ref: 'Quiz' },
    playerScores: [
        {
            userID: { type: mongoose.Types.ObjectId, required: true, ref: 'User' },
            grade: { type: Number, required: true }
        }
    ]
});

module.exports = mongoose.model('Session', sessionSchema);

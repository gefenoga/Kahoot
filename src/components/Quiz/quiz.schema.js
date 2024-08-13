const mongoose = require('mongoose');

const quizSchema = new mongoose.Schema({
  owner: { type: mongoose.Types.ObjectId, required: true, ref: 'User' },
  questions: [{ type: mongoose.Types.ObjectId, ref: 'Question' }],
  state: { type: String, required: true }
});

module.exports = mongoose.model('Quiz', quizSchema);

const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
    title: { type: String, required: true },
    options: [
        {
            content: { type: String, required: true },
            isTrue: { type: Boolean, required: true }
        }
    ]
});

module.exports = mongoose.model('Question', questionSchema);

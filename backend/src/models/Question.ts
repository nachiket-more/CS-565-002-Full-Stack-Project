const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    question: {
        type: String,
        required: true,
        max: 255
    },
    options: {
        type: mongoose.Schema.Types.Mixed,
        required: true
    },
    answer: {
        type: Number,
        required: true
    }
},
{
    versionKey: false
}
);

module.exports = mongoose.model('questions', questionSchema);
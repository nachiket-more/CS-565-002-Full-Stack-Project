const mongoose = require('mongoose');

const gameRecordsSchema = new mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    username: {
        type: String,
        required: true,
        max: 255
    },
    correct_answers: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
},
{
    versionKey: false
}
);

module.exports = mongoose.model('GameRecords', gameRecordsSchema, 'GameRecords');
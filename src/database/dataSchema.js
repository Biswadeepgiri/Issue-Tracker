const mongoose = require('mongoose');

const IssueSchema = new mongoose.Schema({
    descrition: {
        type: String,
        required: true
    },
    developer: {
        type: String,
        required: true
    },
    priority:
    {
        type: String,
        required: true
    }
});

const Issue = mongoose.model('Issue', IssueSchema);
module.exports = Issue;
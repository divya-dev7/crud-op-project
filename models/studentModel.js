const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    firstName: {
        type: 'string',
        required: true
    },
    lastName: {
        type:'string',
        required: true
    },
    email: {
        type:'string',
        required: true
    },
    location: {
        type:'string',
        required: true
    }
})

module.exports = mongoose.model('Student', studentSchema);
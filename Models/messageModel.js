const mongoose = require ('mongoose');

const MessageSchema = new mongoose.Schema ({
    date: {
        type: Date,
        rerquired: true,
    },
    text: {
        type: String,
        required: true
    },
    owner: Object.id,


});
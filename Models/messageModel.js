const mongoose = require ('mongoose');

const MessageSchema = new mongoose.Schema ({

    date: {
        type: Date,
        required: true
    },
    text: {
        type: String,
        required: true

    },

    owner: Object.id,

    room: Object.id
})
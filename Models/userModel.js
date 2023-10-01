const mongoose = require ('mongoose');

const UserSchema = new mongoose.Schema({
    UserName: {
        type: String,
        required: true,
        unique: true
    },

    email: {
        type: String, 
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true
    }
})
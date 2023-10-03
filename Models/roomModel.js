const mongose = require('mongoose');

const RoomSchema = new mongoose.Schema({
title: {
    type: String, 
    required: true,
    unique: true
},
discription: {
    type: String,
    required: false, 
},
messages: {
    type: Array
},
ownerID: {
    type: Schema.types.ObjectId,
    ref: "User"
}

});

module.exports = mongoose.model('User', UserSchema);
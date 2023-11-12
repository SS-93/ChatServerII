 
const mongoose = require ('mongoose');

const RoomSchema = new mongoose.Schema({
title: {
    type: String,
    unique: true,
    required: true
},
 description: {
    type: String,
    required: false,
 },
//  messages: {
//  type: Array
//  },
 owner: { type: String,
    required: true
// ownerID: Object.id  
 }
});

 




module.exports = mongoose.model ('Room', RoomSchema );



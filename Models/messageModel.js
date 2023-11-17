const mongoose = require ('mongoose');

const MessageSchema = new mongoose.Schema ({


    text: {
        type: String
    }

    // title: {
    //     type: String,
    //     required: true

  
 
    // },
    // description: {
    //     type: String,
    //     required: true

    // },

    // owner: Object.id,

    // room: Object.id
})

  
module.exports = mongoose.model ('Message', MessageSchema );

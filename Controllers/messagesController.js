const router = require ('express').Router();


const Message = require ('../Models/messageModel')

// const validateSession = require ('../Middleware/validateSession')


function errorResponse (res, err) {
    res.status(500).json ({Error: err.message });
}


router.post('/new', async (req,res ) => {
    try { 
        const text = req.body.text
        // const room = req.params.roomId
        // const owner = req.user._id

     const newMessage = new Message ({
        text
        // room,
        // owner
     });
     await newMessage.save()
     res.status(201).json ({
        message: 'New Message Created!',
        text: newMessage
     })
        
    } catch (err) {
        errorResponse(res, err)
        
    }
})


module.exports = router
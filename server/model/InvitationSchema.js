const mongoose = require("mongoose");

const InvitationSchema = new mongoose.Schema({
    senderEmail: {
        type: String,
        required: true
    },
    recipientEmail:{
        type: String,
        required: true
    },
    message:{
        type: String,
        required: true
    },
    trip: {
         type: mongoose.Schema.Types.ObjectId,
          ref: 'Trip' 
        },
   
  });

const Invitation = mongoose.model("Invitation", InvitationSchema);

module.exports = Invitation;
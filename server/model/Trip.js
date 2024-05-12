const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tripSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    destination: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    cost: {
        type: Number,
        required: true,
    },
    startDate: {
        type: Date,
        required: true,
    },
    endDate: {
        type: Date,
        required: true,
    },
    totalDays: {
        type: Number,
    },
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    // invitations: [
    //     {
    //         type: String,
    //     }
    // ],
});

const Trip = mongoose.model('Trip', tripSchema);

module.exports = Trip;

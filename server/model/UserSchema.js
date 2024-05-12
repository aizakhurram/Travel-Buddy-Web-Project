const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add a name"],
    },
    email: {
      type: String,
      required: [true, "Please add an email"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Please add a password"],
    },
    bio: {
      type: String,
      required: [true, "Please add a bio"],
    },
    invitations: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Invitation' }],
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("USER", userSchema);

module.exports = User;

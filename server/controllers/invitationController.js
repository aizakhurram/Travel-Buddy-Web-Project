const Invitation = require("../model/InvitationSchema")
const User = require("../model/UserSchema")
const { getTripIdByDestination } = require('../controllers/tripController'); 

const createInvitation= async (req, res) => {
    const { senderEmail, recipientEmail, message, destination } = req.body;
  
    try {

    const tripId = await getTripIdByDestination(destination);

    if (!tripId) {
      return res.status(404).json({ error: "Trip not found for the given destination" });
    }
      // Create a new invitation
      const invitation = await Invitation.create({
        senderEmail,
        recipientEmail,
        message,
        trip: tripId,
      });
  
      // Find the recipient user and add the invitation to their list
      const recipient = await User.findOneAndUpdate(
        { email: recipientEmail },
        { $push: { invitations: invitation._id } },
        { new: true }
      );
  
      res.status(200).json({ message: "Invitation sent successfully" });
    } catch (error) {
      console.error("Error sending invitation:", error);
      res.status(500).json({ error: "Failed to send invitation" });
    }
}
  
  // Route to get user's invitations
  const getInvitations = async (req, res) => {
    const { userEmail } = req.query;
  
    try {
      // Find the user and populate invitations with trip field
      const user = await User.findOne({ email: userEmail }).populate({
        path: 'invitations',
        populate: { path: 'trip' }
      });
  
      // Iterate through each invitation and populate trip using async/await
      for (const invitation of user.invitations) {
        try {
          await invitation.populate('trip');
        } catch (err) {
          console.error("Error populating trip for invitation:", err);
        }
      }
  
      res.status(200).json({ invitations: user.invitations });
    } catch (error) {
      console.error("Error fetching invitations:", error);
      res.status(500).json({ error: "Failed to fetch invitations" });
    }
  };
const deleteInvite= async (req, res) => {
    try {
      const invitationId = req.params.invitationId;
      // Find the invitation by ID and delete it
      const deletedInvitation = await Invitation.findByIdAndDelete(invitationId);
      if (!deletedInvitation) {
        // If invitation with given ID doesn't exist, return 404 Not Found
        return res.status(404).json({ message: "Invitation not found." });
      }
      // If deleted successfully, return a success message
      res.status(200).json({ message: "Invitation deleted successfully." });
    } catch (error) {
      console.error("Error deleting invitation:", error);
      // If an error occurs, return a 500 Internal Server Error
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
  module.exports = { createInvitation, getInvitations, deleteInvite};
  
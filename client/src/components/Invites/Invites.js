import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Invites.css"; // Import CSS file for styling
import { getUser } from "../../features/userSlice";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
const Invites = () => {
  const [invitations, setInvitations] = useState([]);
  const { user } = useSelector(getUser);

  useEffect(() => {
    const fetchInvitations = async () => {
      try {
        const response = await axios.get(`/api/invitation/invitations?userEmail=${user.email}`);
        setInvitations(response.data.invitations);
      } catch (error) {
        console.error("Error fetching invitations:", error);
      }
    };
  
    fetchInvitations();
  }, [user]);

  const handleDeleteInvite = async (invitationId) => {
    try {
      // Send a delete request to your backend API to delete the invitation
      await axios.delete(`/api/invitation/${invitationId}`);
      // Remove the deleted invitation from the state
      setInvitations(invitations.filter(invitation => invitation._id !== invitationId));
     toast.success("Invitation deleted");
    } catch (error) {
      console.error("Error deleting invitation:", error);
    }
  };

  return (
    <div className="invitations-list-container">
      <h2>Invitations</h2>
      <ul className="invitations-list">
        {invitations.map((invitation) => (
          <li key={invitation._id} className="invitation-item">
            <p>Sender: {invitation.senderEmail}</p>
            <p>Message: {invitation.message}</p>
            {invitation.trip && (
              <div>
                <p>Trip Information:</p>
                <p>Destination: {invitation.trip.destination}</p>
                <p>Duration: {invitation.trip.startDate} - {invitation.trip.endDate}</p>
                <p>Cost: {invitation.trip.cost}</p>
                {/* Add more trip details as needed */}
              </div>
            )}
            <div className="icons">
           <i className="fa-solid fa-trash-can" onClick={() => handleDeleteInvite(invitation._id)}></i>
          </div>
           
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Invites;

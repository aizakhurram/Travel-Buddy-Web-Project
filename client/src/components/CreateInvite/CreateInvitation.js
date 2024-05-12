import React, { useState } from "react";
import axios from "axios";
import "./CreateInvitation.css"; // Import CSS file for styling
import { toast } from "react-toastify";

const CreateInvitation = () => {
  const [senderEmail, setSenderEmail] = useState("");
  const [recipientEmail, setRecipientEmail] = useState("");
  const [message, setMessage] = useState("");
  const [destination, setDestination] = useState("");
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/invitation/createInvitations", {
        senderEmail,
        recipientEmail,
        message,
        destination,
      });
      toast.success("Invitation sent Successfully");
    } catch (error) {
      console.error("Error creating invitation:", error);
      toast.error("Invitation not sent!");
    }
  };

  return (
    <div className="invitation-form-container">
      <h2>Send Invite to your Friends</h2>
      <form onSubmit={handleSubmit} className="invitation-form">
        <div className="form-group">
          <label htmlFor="senderEmail">Your Email:</label>
          <input
            type="email"
            id="senderEmail"
            value={senderEmail}
            onChange={(e) => setSenderEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="recipientEmail">Recipient's Email:</label>
          <input
            type="email"
            id="recipientEmail"
            value={recipientEmail}
            onChange={(e) => setRecipientEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="destination">Destination:</label>
          <input
            type="text"
            id="destination"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn-submit">Send Invitation</button>
      </form>
     
    </div>
  );
};

export default CreateInvitation;

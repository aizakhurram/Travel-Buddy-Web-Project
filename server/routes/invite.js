const router = require("express").Router();
const { createInvitation, getInvitations, deleteInvite } = require('../controllers/invitationController');

// Route to create invitation
router.post('/createInvitations', createInvitation);

// Route to get user's invitations
router.get('/invitations', getInvitations);
router.delete('/:invitationId', deleteInvite);
module.exports = router;

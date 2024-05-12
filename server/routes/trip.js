const router = require("express").Router();

const { createTrip, getTrips, getUserTrips, deleteTrip } = require("../controllers/tripController.js");
const { protected } = require("../middleware/auth");

router.post('/create',protected, createTrip);
router.get('/search', getTrips);
router.get('/userTrips',protected, getUserTrips);
router.delete('/:tripId', deleteTrip);
// router.put('/update/:id', updateTrip);
// router.delete('/delete/:id', deleteTrip);

module.exports = router;
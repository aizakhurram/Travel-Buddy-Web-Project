const Trip = require('../model/Trip');

const createTrip = async (req, res) => {
  
  const {
    name,
    destination,
    description,
    cost,
    startDate,
    endDate,
    totalDays, // Assuming you have authentication and you get the user ID of the creator
 
  } = req.body;
  
 
  try {
    const newTrip = await Trip.create({
      name,
      destination,
      description,
      cost,
      startDate,
      endDate,
      totalDays,
      createdBy: req.user.id,
    
    });
    res.status(200).json({
      name: newTrip.name,
      destination: newTrip.destination,
      description: newTrip.description,
      cost: newTrip.cost,
      startDate: newTrip.startDate,
      endDate: newTrip.endDate,
      totalDays: newTrip.totalDays,
      createdBy: newTrip.createdBy,
      message: 'New trip has been added!'
    });

  } catch (error) {
    console.error('Error creating trip:', error);
    res.status(500).json({ success: false, message: 'Failed to create trip' });
  }
};
const getUserTrips = async (req, res) => {
  try {
   
    const userTrips = await Trip.find({ createdBy: req.user.id });

    res.status(200).json(userTrips);
  } catch (error) {
    console.error('Error fetching user trips:', error);
    res.status(500).json({ message: 'Failed to fetch user trips' });
  }
};



const getTrips= async (req, res) => {
  try {
    const { destination, startDate, endDate } = req.query;
  
    const searchResults = await Trip.find({
      destination: { $regex: new RegExp(destination, "i") }, // Case-insensitive search
      startDate: { $gte: new Date(startDate) }, // Search for trips starting on or after the start date
      endDate: { $lte: new Date(endDate) }, // Search for trips ending on or before the end date
    });

    res.json(searchResults);
  } catch (error) {
    console.error("Error searching trips:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
const getTripIdByDestination = async (destination) => {
  try {
    const trip = await Trip.findOne({ destination });
    return trip ? trip._id : null; // Return trip ID if found, otherwise null
  } catch (error) {
    console.error("Error finding trip by destination:", error);
    return null;
  }
};

const deleteTrip= async (req, res) => {
  const { tripId } = req.params;

  try {
    // Find the trip by ID and delete it from the database
    const deletedTrip = await Trip.findByIdAndDelete(tripId);
    
    if (!deletedTrip) {
      // If the trip with the provided ID doesn't exist, return 404 Not Found
      return res.status(404).json({ error: 'Trip not found' });
    }
    
    // If the trip is successfully deleted, return a success message
    res.json({ message: 'Trip deleted successfully' });
  } catch (error) {
    // If there's an error, return a 500 Internal Server Error
    console.error('Error deleting trip:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
module.exports = { createTrip, getUserTrips, getTrips, getTripIdByDestination , deleteTrip};

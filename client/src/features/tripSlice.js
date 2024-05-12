import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  trip: [],
  isLoading: false,
  isSuccess: false,
  isError: false,
  errorMessage: "",
};

export const createTrip = createAsyncThunk(
  'trip/createTrip',
  async ({ name, destination, description, cost, startDate, endDate, totalDays }, thunkAPI) => {
    try {
      const token = thunkAPI.getState().user.user.token;
      const response = await axios.post(
        '/api/trips/create',
        {
          name,
          destination,
          description,
          cost,
          startDate,
          endDate,
          totalDays,
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data.message || error.message || error.toString()
      );
    }
  }
);

export const getUserTrips = createAsyncThunk(
  "trip/getUserTrips",
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().user.user.token;
      const response = await axios.get("/api/trips/userTrips", {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log(response.data);
      return response.data;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

const tripSlice = createSlice({
  name: "trip",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers(builder) {
    builder
      .addCase(createTrip.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createTrip.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        // Add the newly created trip to the existing trips array
        state.trip = [...state.trip, action.payload];
      })
      .addCase(createTrip.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.payload;
      })
      .addCase(getUserTrips.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUserTrips.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.trip = action.payload;
      })
      .addCase(getUserTrips.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.payload;
      });
  },
});
export const { reset } = tripSlice.actions;
export const getTripItems = (state) => state.trip.trip;
export default tripSlice.reducer;
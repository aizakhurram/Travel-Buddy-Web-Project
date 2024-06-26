import { configureStore } from "@reduxjs/toolkit";
import bucketListReducer from "../features/bucketListSlice";
import placeReducer from "../features/placeSlice";
import userReducer from "../features/userSlice";
import tripReducer from "../features/tripSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    bucketList: bucketListReducer,
    place: placeReducer,
    trip: tripReducer, 
  },
});

import { configureStore  } from "@reduxjs/toolkit";
import userSlice from "./reducers/users/userSlice";

const store = configureStore({
  reducer: userSlice,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  }),
});

export default store;

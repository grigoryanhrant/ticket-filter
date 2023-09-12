import { configureStore } from "@reduxjs/toolkit";
import { cardsSlice } from "./slices/cardsSlice.ts";

export const store = configureStore({
  reducer: {
    transfers: cardsSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

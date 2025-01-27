import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import mockapiSlice from "../reducers/mockapi";
import { getBillQuery } from "../rtkquery";

const store = configureStore({
  reducer: {
    mockapiSlice: mockapiSlice,
    [getBillQuery.reducerPath]: getBillQuery.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(getBillQuery.middleware),
});

setupListeners(store.dispatch);

export default store;

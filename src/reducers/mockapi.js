import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getBillApi } from "../service";

export const getBill = createAsyncThunk(
  "mockapiSlice/getBill",
  async () => await getBillApi().then((resp) => resp)
);

const initialState = {
  billDataLoader: false,
  billData: [],
};

const mockapiSlice = createSlice({
  name: "mockapiSlice",
  initialState,
  reducers: {
    getMockData: (state, action) => {
      return state[action.payload];
    },
    setMockData: (state, action) => {
      state[action.payload.key] = action.payload.value;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getBill.pending, (state) => {
      state.billDataLoader = true;
    });
    builder.addCase(getBill.fulfilled, (state, action) => {
      state.billDataLoader = false;
      state.billData = action.payload || [];
    });
    builder.addCase(getBill.rejected, (state) => {
      state.billDataLoader = false;
    });
  },
});

export const { getMockData, setMockData } = mockapiSlice.actions;
export default mockapiSlice.reducer;

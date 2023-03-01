import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  loading: false,
  error: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    extraReducers: (builder) => {
      builder
        .addCase(fetch.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(getProducts.fulfilled, (state, action) => {
          state.isLoading = false;
          state.isSuccess = true;
          state.products = action.payload;
        })
        .addCase(getProducts.rejected, (state) => {
          state.isLoading = false;
          state.isError = true;
        });
    },
  },
});

export const {} = userSlice.actions;

export default userSlice.reducer;

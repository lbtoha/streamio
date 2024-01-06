import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "customModal",
  initialState: null,
  reducers: {
    setCustomModal: (state, action) => {
      return action.payload;
    },
  },
});

export const { setCustomModal } = modalSlice.actions;
export default modalSlice.reducer;

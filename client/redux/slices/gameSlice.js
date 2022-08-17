import { createSlice } from "@reduxjs/toolkit";
import Swal from "sweetalert2";

const gameSlice = createSlice({
  name: "gameSlice",
  initialState: {
    isLoadingSubmitScore: false,
  },
  reducers: {
    submitScore: (state, action) => {
      state.isLoadingSubmitScore = true;
    },
    successSubmitScore: (state, action) => {
      state.isLoadingSubmitScore = false;
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Score submited successfuly",
        showConfirmButton: false,
        timer: 1500,
      });
    },
  },
});

export const { submitScore, successSubmitScore } = gameSlice.actions;

export default gameSlice.reducer;

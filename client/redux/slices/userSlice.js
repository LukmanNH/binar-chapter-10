import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useRouter } from "next/router";
import Swal from "sweetalert2";

export const logoutUser = createAsyncThunk("userSlice/logout", async () => {
  const router = useRouter();
  try {
    const res = await axios.post("http://localhost:8800/api/auth/logout");
    localStorage.removeItem("access_token");
    return {};
  } catch (err) {
    return err.message;
  }
});

export const userSlice = createSlice({
  name: "userSlice",
  initialState: {
    users: [],
    token: "",
    loading: false,
    isSignOutLoading: false,
    isLoadingProfile: false,
  },
  reducers: {
    getUser: (state, action) => {
      state.users = action.payload.user;
      state.token = action.payload.token;
    },
    logout: (state, action) => {
      state.users = [];
      localStorage.removeItem("access_token");
    },
    updateRequested: (state) => {
      state.isLoadingProfile = true;
    },
    updateSuccess: (state, action) => {
      state.isLoadingProfile = false;
      state.users = action.payload;
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Profile has been updated",
        showConfirmButton: false,
        timer: 1500,
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(logoutUser.pending, (state) => {
        console.log("pending");
        state.isSignOutLoading = true;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        console.log("fulfilled");
        state.isSignOutLoading = false;
      })
      .addCase(logoutUser.rejected, (state) => {
        console.log("rejected");
        state.users = [];
        state.isSignOutLoading = false;
      });
  },
});

export const { getUser, logout, updateRequested, updateSuccess } =
  userSlice.actions;

export default userSlice.reducer;

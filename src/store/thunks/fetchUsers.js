import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// the string argument is the base action type
const fetchUsers = createAsyncThunk("users/fetch", async () => {
  const response = await axios.get("http://localhost:3005/users ");
  await pause(1000);
  return response.data;
});

// // Action Types automatically added to the fetchUsers thunk
// fetchUsers.pending === "users/fetch/pending"; // request just started
// fetchUsers.fulfilled === "users/fetch/fulfilled"; //request just completed
// fetchUsers.rejected === "users/fetch/rejected"; // request broke / something went wrong

//DEV ONLY
const pause = (duration) => {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
};

export { fetchUsers };

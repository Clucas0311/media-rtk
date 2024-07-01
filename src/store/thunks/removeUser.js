import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const removeUser = createAsyncThunk("users/remove", async (user) => {
  await axios.delete(`http://localhost:3005/users/${user.id}`);

  // Delete request the repsonse.data may return an empty object in that case return the usersss
  return user;
});

export { removeUser };

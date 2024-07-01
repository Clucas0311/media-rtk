import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { faker } from "@faker-js/faker";

const addUser = createAsyncThunk("users/add", async () => {
  const response = await axios.post("http://localhost:3005/users", {
    name: faker.name.fullName(),
  });
  if (response.status !== 201) {
    throw new Error(`Error: ${response.status} ${response.statusText}`);
  }
  // Whatever you return here will be stored in payload property of this action
  return response.data;
});

export { addUser };

import { createAsyncThunk } from "@reduxjs/toolkit";


const getUserLogin = createAsyncThunk(
	'auth',
	async ({ email, password }, thunkAPI) => {
	  try {
		const response = await fetch("http://localhost:3001/api/v1/user/login", {
		  method: "POST",
		  headers: {
			"Content-Type": "application/json"
		  },
		  body: JSON.stringify({ email, password })
		});
  
		if (!response.ok) {
		  const errorData = await response.json();
		  return thunkAPI.rejectWithValue(errorData);
		}
		else {
			const data = await response.json();
			return data;
		}
	  }
	  catch (error) {
		return thunkAPI.rejectWithValue({ message: "Network error" });
	  }
	}
  );

  export default getUserLogin
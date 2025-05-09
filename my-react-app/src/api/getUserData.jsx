import { createAsyncThunk } from "@reduxjs/toolkit";


const getUserData = createAsyncThunk(
	'data',
	async ({ token }, thunkAPI) => {
	  try {
		const response = await fetch("http://localhost:3001/api/v1/user/profile", {
		  method: "GET",
		  headers: {
			"Authorization": "Bearer " + token,
			"Accept": "application/json"
		  }, 
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
export default getUserData
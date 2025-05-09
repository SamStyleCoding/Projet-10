import { createAsyncThunk } from "@reduxjs/toolkit";

export const putUserData = createAsyncThunk(
    'data',
    async ({ token, userName }, thunkAPI) => {
        const data = {
            userName: userName,  
        };

        const config = {
            method: 'PUT',
            headers: {
                "Authorization": "Bearer " + token,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        };

        try {
            const response = await fetch("http://localhost:3001/api/v1/user/profile", config);
            const responseData = await response.json();

            if (!response.ok) {
                throw new Error(responseData.message || 'Il y a une error');
            }

            return responseData;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export default putUserData;

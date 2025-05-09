import { createSlice } from "@reduxjs/toolkit";
import putUserData from "../api/putUserData"; 

const initialState = {
    userName: null,
    token: null,
    status: 'idle',
    error: null,
};

const putSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setToken(state, action) {
            state.token = action.payload;
        },
        setUserName(state, action) {
            state.userName = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(putUserData.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(putUserData.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.userName = action.payload.body.userName;
            })
            .addCase(putUserData.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            });
    }
});

export const { setToken, setUserName } = putSlice.actions;

export default putSlice;

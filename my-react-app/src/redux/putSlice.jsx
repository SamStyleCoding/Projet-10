import { createSlice } from "@reduxjs/toolkit";
import putUserData from "../api/putUserData"; 

const initialState = {
    userName: null,
    token: null,
    status: '',
    error: null,
};

const putSlice = createSlice({
    name: 'put',
    initialState,
    reducers: {
        setUserName(state, action) {
            state.userName = action.payload.userName;
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

export const { setUserName } = putSlice.actions;

export default putSlice;

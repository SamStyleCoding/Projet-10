import {configureStore} from "@reduxjs/toolkit";
import authSlice, {setCredentials} from "./authSlice.jsx";
import userSlice from "./userSlice.jsx";

export const store = configureStore({
    reducer: {
        auth: authSlice,
        user: userSlice,
    }
})

const token = localStorage.getItem('token');
if (token) {
    store.dispatch(setCredentials({token}))
}

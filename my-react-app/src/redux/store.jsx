import {configureStore} from "@reduxjs/toolkit";
import authSlice, {setCredentials} from "./authSlice.jsx";
import userSlice from "./userSlice.jsx";
import putSlice from "./putSlice.jsx";

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        user: userSlice.reducer,
        put: putSlice.reducer
    }
})

const token = localStorage.getItem('token');
if (token) {
    store.dispatch(setCredentials({token}))
}

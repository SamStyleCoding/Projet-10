import { createSlice} from "@reduxjs/toolkit";
import getUserLogin from "../api/getUserLogin";
  


const authSlice = createSlice({
    name: "auth",
    initialState: {
        token: null,
        isLoading: false,
        error: null,
    },
    reducers: {
        setCredentials: (state, action) => {
            const { token } = action.payload;
            state.token = token;
        },
        logoutToken: (state) => {
            state.token = null;
            localStorage.removeItem('token');
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getUserLogin.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(getUserLogin.fulfilled, (state, action) => {
                state.isLoading = false;
                state.token = action.payload.body.token;
                localStorage.setItem('token', action.payload.body.token);
            })
            .addCase(getUserLogin.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
    }
})

export const {logoutToken, setCredentials} = authSlice.actions;
export default authSlice;
                     
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import Axios from '../../lib/Axios';
import { authSuccess } from './authSlice'

export const registerUser = createAsyncThunk('user/registerUser', async payloadData => {
    try {
        let response = await Axios.post('/users/register', payloadData);
        return response.data;
    } catch (e) {
        console.log('!@-------registerUser Error-------@!')
        console.log(e);
        
    }
});

export const loginUser = createAsyncThunk('user/loginUser', async (userData, thunkAPI) => {
    try {
        let response = await Axios.post('/users/login', userData);
        console.log(response);
        
        localStorage.setItem('jwtToken', response.data.token);

        thunkAPI.dispatch(authSuccess());

        return response.data;

    } catch (e) {
        return thunkAPI.rejectWithValue(e.response.data);
        
    }
});

export const usersSlice = createSlice ({
    name: 'user',
    initialState: {
        email: '',
        password: '',
        firstname: '',
        lastname: '',
        message: '',
        status: null,
    },
    //syncronous set state
    reducers: {
        setUser: (state, action) => {
            console.log(action.payload);
            return {
                ...action.payload,
                password: ''
            }
        }

    },
    //asyncronous set state
    extraReducers: builder => {
        builder
                .addCase(registerUser.fulfilled, (state, action) => {
                    console.log(action.payload)
                    // state = {
                    //     email: action.payload.data.userObj.email,
                    //     firstname: action.payload.data.userObj.firstname,
                    //     lastname: action.payload.data.userObj.lastname,
                    //     message: action.payload.data.message,
                    //     password: '',
                    // }
                    state = action.payload.data;
                })
                .addCase(registerUser.rejected, () => {
                    console.log('!@-------registerUser error!-------@!')
                    
                })
                .addCase(loginUser.fulfilled, (state, action) => {
                    console.log(action.payload);
                    state.firstname = action.payload.user.firstname;
                    state.lastname = action.payload.user.lastname;
                    state.email = action.payload.user.email;
                    state.message = action.payload.message;
                    state.password = '';
                    state.status = 'fulfilled';
                })
                .addCase(loginUser.rejected, (state, action) => {
                    console.log(action.payload);
                    state.message = action.payload;
                    state.status = 'rejected';
                })
    }
})

export const { setUser } = usersSlice.actions;

export default usersSlice.reducer;
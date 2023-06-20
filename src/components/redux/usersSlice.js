import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import Axios from '../../lib/Axios';

export const registerUser = createAsyncThunk('user/registerUser', async payloadData => {
    try {
        let response = await Axios.post('/users/register', payloadData);
        return {
            data: response.data // action.payload.user = response.data
        }
    } catch (e) {
        console.log('!@-------registerUser Error-------@!')
        console.log(e);
        
    }
});

export const usersSlice = createSlice ({
    name: 'user',
    initialState: {
        email: '',
        password: '',
        firstname: '',
        lastname: '',
    },
    //syncronous set state
    // reducers: {

    // },
    //asyncronous set state
    extraReducers: builder => {
        builder
                .addCase(registerUser.fulfilled, (state, action) => {
                    state = action.payload.data.userObj;
                })
                .addCase(registerUser.rejected, () => {
                    console.log('!@-------registerUser error!-------@!')
                    
                })
    }
})

// export const {} = usersSlice.actions;

export default usersSlice.reducer;
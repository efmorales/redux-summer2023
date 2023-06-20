import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const registerUser = createAsyncThunk('user/registerUser', async payloadData => {
    try {
        let response = await Axios.post('/register', payloadData);
        return {
            user: response.data // action.payload.user = response.data
        }
    } catch (e) {
        console.log('!@-------registerUser Error-------@!')
        console.log(e);
        
    }
});

export const usersSlice = createSlice ({
    name: 'user',
    initialState: {
        username: '',
        password: ''
    },
    //syncronous set state
    reducers: {

    },
    //asyncronous set state
    extraReducers: builder => {
        builder
                .addCase(registerUser.fulfilled, (state, action) => {
                    state = action.payload.user;
                })
                .addCase(registerUser.rejected, () => {
                    console.log('!@-------registerUser error!-------@!')
                    
                })
    }
})

export const {} = usersSlice.actions;

export default usersSlice.reducer;
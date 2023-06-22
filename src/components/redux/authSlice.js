import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import Axios from '../../lib/Axios'
import { checkAuthToken } from '../../lib/checkAuthToken'
import { setUser } from './usersSlice'

export const authCheck = createAsyncThunk('auth/authCheck', async(_, thunkAPI) => {
    try {
      checkAuthToken()
      let response = await Axios.post('/users/authtoken')
  
      thunkAPI.dispatch(setUser(response.data))
  
      return response.data
  
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response)
    }
  })

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isAuth: false
    },
    reducers: {
        authSuccess: (state) => {
            state.isAuth = true
        },
        authFailure: (state) => {
            state.isAuth = false
        }
        // authSuccess: state => state.isAuth = true,
        // authFailure: state => state.isAuth = false
    },

    extraReducers: builder => {
        builder
          .addCase(authCheck.fulfilled, (state) => {
            state.isAuth = true
          })
          .addCase(authCheck.rejected, (state, action) => {
            state.isAuth = false
            console.log('!@-------authCheck-------@!')
            console.log(action.payload)
          })
      }
});

export const {
    authSuccess,
    authFailure
} = authSlice.actions

export default authSlice.reducer;

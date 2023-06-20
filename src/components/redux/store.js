import { configureStore } from '@reduxjs/toolkit'
import usersReducer from './usersSlice'
import authReducer from './authSlice'
//import reducers/slicers here

export default configureStore({
  reducer: {
    users: usersReducer,
    auth: authReducer
  },
})
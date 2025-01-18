import {createSlice} from "@reduxjs/toolkit"

const userSlice = createSlice({
  name:"user",
  initialState:{
    authUser:null,
    theme:"aqua",
  },
  reducers:{
    setAuthUser:(state, action) => {
      state.authUser = action.payload
    },
    setTheme:(state, action) =>{
      state.theme = action.payload
    }
  }
})

export const {setAuthUser, setTheme} = userSlice.actions

export default userSlice.reducer
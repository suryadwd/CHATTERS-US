import React from 'react'
import Navbar from "./components/Navbar"
import {Route, Routes, useNavigate} from "react-router-dom"
import { useDispatch } from "react-redux";
import Home from './pages/Home'
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Profile from "./pages/Profile"
import Setting from "./pages/Setting"
import { setAuthUser } from './redux/userSlice'
const App = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

  return (
    <div>
      
      <Navbar />

      <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/signup' element={<Signup/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/profile' element={<Profile/>} />
          <Route path='/setting' element={<Setting/>} />
         
      </Routes>

    </div>
  )
}

export default App

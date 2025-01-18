import React from 'react'
import Navbar from "./components/Navbar"
import {Route, Routes, useNavigate, useLocation } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import Home from './pages/Home'
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Profile from "./pages/Profile"
import Setting from "./pages/Setting"
import { setAuthUser,setTheme } from './redux/userSlice'
const App = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const location = useLocation();
    const hideNavbar = location.pathname === "/signup" || location.pathname === "/login";

    const { theme } = useSelector((store) => store.user);

  return (
    <div data-theme = {theme}>
      
      {!hideNavbar && <Navbar />}

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

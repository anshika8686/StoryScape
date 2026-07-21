import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router'

import LoginForm from './components/Auth/LoginForm'
import LandingPage from './pages/Landing/LandingPage'
import AuthLayout from './layouts/AuthLayout'
import Login from './pages/Auth/Login'

const AppRouter = () => {
  return (
   <BrowserRouter>
   <Routes>

    <Route path="/" element={<LandingPage/>}></Route>
    <Route element={<AuthLayout/>}>
    <Route path='/login' element={<Login/>}></Route>
    </Route>
    

   </Routes>
   </BrowserRouter>
  )
}

export default AppRouter
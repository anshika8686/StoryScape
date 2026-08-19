import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router'

import LoginForm from './components/Auth/LoginForm'
import LandingPage from './pages/Landing/LandingPage'
import AuthLayout from './layouts/AuthLayout'
import Login from './pages/Auth/Login'
import SignUp from './pages/Auth/SignUp'
import ProtectedRoute from './components/Common/ProtectedRoute'
import Dashboard from './pages/Dashboard/Dashboard'
import CreateStory from './pages/CreateStory/CreateStory'
import StoryResult from './pages/CreateResult/CreateResult'
import OurVision from './pages/Vision/Vision'

const AppRouter = () => {
  return (
   <BrowserRouter>
   <Routes>

    <Route path="/" element={<LandingPage/>}></Route>
    <Route path='/vision' element={<OurVision/>}></Route>

    <Route element={<AuthLayout/>}>
    <Route path='/login' element={<Login/>}></Route>
    <Route path='/signup' element={<SignUp/>}></Route>
    </Route>

    <Route element={<ProtectedRoute/>}>
    <Route path='/dashboard' element={<Dashboard/>}></Route>
    <Route path='/create-story' element={<CreateStory/>}></Route>
    <Route path='/story-result' element={<StoryResult/>}></Route>

    </Route>
    
    

   </Routes>
   </BrowserRouter>
  )
}

export default AppRouter
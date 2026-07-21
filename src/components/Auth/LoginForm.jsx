import React, { useState } from 'react'
import { useAuth } from '../../hooks/auth.use'
import {Link, useNavigate} from 'react-router-dom'
import InputField from '../Common/InputField'
import AuthButton from '../Common/AuthButton'

const LoginForm = () => {
  const [username, setusername] = useState("")
  const [password, setpassword] = useState("")
  const {loading,handleLogin}=useAuth();
  const navigate=useNavigate()

  function handleSubmit(e){
    e.preventDefault();
    if(loading){
      return <h1>Loading......</h1>
    }

    handleLogin(username,password)
    .then((res)=>{
      console.log(res);
      navigate("/")
    })

    console.log("Login Form submitted successfully");
    alert('Login Form submitted successfully')

  }
  
  return (
    <div>
        <form autoComplete="off" onSubmit={(e)=>{
          handleSubmit(e)
        }}>
            <InputField onChange={(e)=>{
              setusername(e.target.value)
            }}
            type='text' 
            name='username'
             placeholder='Username'></InputField>
            
            <InputField onChange={(e)=>{
              setpassword(e.target.value)
            }}
            type='password'
             name='password'
             placeholder='Password'></InputField>

            <AuthButton>Submit</AuthButton>
        </form>
        <p className='text-gray-400 text-sm mt-3' >New to Storyscape? <Link className="text-gray-200" to="/signup">Create account</Link></p>
    </div>
  )
}

export default LoginForm
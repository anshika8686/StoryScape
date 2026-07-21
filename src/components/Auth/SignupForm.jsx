import React, { useState } from 'react'
import InputField from '../Common/InputField';
import AuthButton from '../Common/AuthButton';
import { useAuth } from '../../hooks/auth.use';
import { useNavigate } from 'react-router';

const SignupForm = () => {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [email, setemail] = useState("");
  const {loading,handlesignup}=useAuth();
  const navigate=useNavigate();

  const handleSubmit=(e)=>{
    e.preventDefault();
    if(loading){
      return <h1>Loading...</h1>
    }
    handlesignup(username,email,password)
    .then((res)=>{
      console.log("Sign up successfull")
      console.log(res)
      navigate("/");
    })
  }
  return (
    

    <form onSubmit={(e)=>{
      handleSubmit(e)
    }}>
        <InputField onChange={(e)=>{
          setusername(e.target.value)
        }}
        type='text'
         name='username' 
         placeholder='Username'>
         </InputField>

        <InputField onChange={(e)=>{
          setemail(e.target.value)
        }}
        type='email' 
        name='email'
        placeholder='abc@mail.com'>
        </InputField>

        <InputField onChange={(e)=>{
          setpassword(e.target.value)
        }}
        type='password'
        name='password'
        placeholder='Password'>
        </InputField>

        <AuthButton disabled={loading}>
        {loading ? "Creating Account..." : "Create Account"}
        </AuthButton>
    </form>
  )
}

export default SignupForm
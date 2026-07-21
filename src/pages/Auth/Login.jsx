import React from 'react'
import LoginForm from '../../components/Auth/LoginForm'
import { AuthProvider } from '../../context/auth.context'
import AuthCard from './AuthCard';

const Login = () => {
   return (
    <AuthCard
      title="Welcome Back"
      subtitle="Continue your storytelling journey."
    >
    <LoginForm /> 
    {/* //children(anything inside the component)passed in auth card */}
    </AuthCard>
  );
}

export default Login
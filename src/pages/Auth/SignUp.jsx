import React from 'react'
import AuthCard from './AuthCard';
import SignupForm from '../../components/Auth/SignupForm';

const SignUp = () => {
  
    return (
    <AuthCard
      title="Begin Your Story"
      subtitle="Every great adventure starts here."
    >
    <SignupForm/>
    </AuthCard>
  );
}

export default SignUp
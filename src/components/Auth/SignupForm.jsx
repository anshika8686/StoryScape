import React from 'react'

const SignupForm = () => {
  return (
    <div>
        <input type='text' name='username' placeholder='Username'></input>
        <input type='email' name='emal' placeholder='abc@mail.com'></input>
            <input type='password' name='password' placeholder='Password'></input>
            <button>Submit</button>
    </div>
  )
}

export default SignupForm
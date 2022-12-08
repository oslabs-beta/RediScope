import React from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';

type SignUpProps = {
    username: string,
    password: string
}

const Signup = ({ username, password }: SignUpProps) => {
  function submitHandler() {
    const userData = {
      // information to grab from inputs
      username: document.getElementById('username').value,
      password: document.getElementById('password').value
    }
  }
  
  return (
    <form className='SignupForm' onSubmit={submitHandler}>
        <div className='box'>
            <h1>RediScope</h1>
            <div className='inputs'>
                <input className='inputUser' type='text' id='username' placeholder='Username'></input>
                <input className='inputPW' type='text' id='password' placeholder='Password'></input>
                <button className='SignupBtn' type='submit'>Sign up</button>
            </div>
            <div className='redirect'>
                <span className='redirectLink'>Already have an account? <Link id='link' to='/Login'>Log in here.</Link></span>
            </div>
        </div>
    </form>
  );
};

export default Signup;
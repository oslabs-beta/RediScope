import React from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

type LoginProps = {
    username: string,
    password: string
}

const Login = ({username, password}: LoginProps) => {
  console.log('hello from Login');
  function submitHandler(e){
    e.preventDefault();
    const userData = {
        // information to grab from inputs
        username: document.getElementById('username')value,
        password: document.getElementById('password').value
    }
  }

  return (
    <form className='LoginForm' onSubmit={submitHandler}>
        <div className="box">
            <h1>RediScope</h1>
            <div className='inputs'>
                <input className='inputUser' type='text' id='username' placeholder='Username'></input>
                <input className='inputPW' type='text' id='password' placeholder='Password'></input>
                <button className='loginBtn' type='submit'>Log in</button>
            </div>
        </div>
    </form>
  )
}

export default Login;
import React, { Component } from 'react'
import { Navigate } from 'react-router-dom'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'

// import { Link } from "react-router-dom";

// ----- deprecated imports, may need if downgrading react-router-dom v5 ----- //

// import { PromptProps } from "react-router-dom";
// import Axios from "axios";

// ----- router props to change route upon submission ----- //
// DEPRECATED
// interface RouterProps {
//     history: string
// }

type Props = {}

// ------ state ------ //
type LoginState = {
  redirect: string | null
  username: string
  password: string
  loading: boolean
  valid: boolean
}

export default class Login extends Component<Props, LoginState> {
  constructor(props: Props) {
    super(props)
    this.handleLogin = this.handleLogin.bind(this)

    this.state = {
      redirect: null,
      username: '',
      password: '',
      loading: false,
      valid: false,
    }
  }

  handleLogin(formValue: { username: string; password: string }) {
    const { username, password } = formValue
    if (username === 'username' && password === '123') {
      this.setState({
        loading: true,
        valid: true,
      })
    }
    console.log('submitted')
    console.log(this.state)
    if (this.state.valid === true) {
      this.setState({ redirect: '/Dashboard' })
    }
  }

  componentDidMount(): void {
    // set current user to the evaluated result of the get request via authentication
    // if this user exists, redirect to the dashboard/mainpage
    // if (this.state.valid === true){
    //     this.setState({ redirect: '/Dashboard' });
    // };
    // if (user){
    //     this.setState({ redirect: '/dashboard' });
    // };
    // console.log('Component mounted!');
  }

  componentWillUnmount(): void {
    // check with electron
    // console.log("reloading from componentWillUnmount in Login file!")
    window.location.reload()
  }

  // ------ required form handling ------ //
  validationSchema() {
    return Yup.object().shape({
      username: Yup.string().required('Username is required!'),
      password: Yup.string().required('Password is required!'),
    })
  }

  render() {
    if (this.state.redirect) {
      return <Navigate to={this.state.redirect} />
    }

    const { loading } = this.state

    const initVal = {
      username: '',
      password: '',
    }

    return (
      <div className="Login">
        <div className="formContainer">
          <Formik
            initialValues={initVal}
            validationSchema={this.validationSchema}
            onSubmit={this.handleLogin}
          >
            <Form>
              <div className="form">
                <label htmlFor="username">Username</label>
                <Field name="username" type="text" className="form-control" />
                <ErrorMessage
                  name="username"
                  component="div"
                  className="alert alert-danger"
                />
              </div>
              <div className="form">
                <label htmlFor="password">Password</label>
                <Field
                  name="password"
                  type="password"
                  className="form-control"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="alert alert-danger"
                />
              </div>
              <div className="form">
                <button type="submit" className="btn" disabled={loading}>
                  <span>Login</span>
                </button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    )
  }
}

// ------ original login page, no TS ------ //

// const Login = ({username, password}: LoginProps) => {
//   console.log('hello from Login');
//   function submitHandler(e){
//     e.preventDefault();
//     const userData = {
//         // information to grab from inputs
//         username: document.getElementById('username').value,
//         password: document.getElementById('password').value
//     }
//   }

//   return (

//     // <form className='LoginForm' onSubmit={submitHandler}>
//     //     <div className="box">
//     //         <h1>RediScope</h1>
//     //         <div className='inputs'>
//     //             <input className='inputUser' type='text' id='username' placeholder='Username'></input>
//     //             <input className='inputPW' type='text' id='password' placeholder='Password'></input>
//     //             <button className='loginBtn' type='submit'>Log in</button>
//     //         </div>
//     //         <div className='redirect'>
//     //             <span className='redirectLink'> No account? <Link id='link' to='/Signup'>Sign up here.</Link></span>
//     //         </div>
//     //     </div>
//     // </form>
//   )
// }

// export default Login;

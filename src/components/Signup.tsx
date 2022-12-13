import React, { Component } from 'react';
import { Formik, Field, Form, ErrorMessage, yupToFormErrors } from 'formik';
import * as Yup from 'yup';

// ------ old imports ------ //
// import Axios from 'axios';
// import { Link } from 'react-router-dom';


// props to be passed down
type Props = {};
// state types for signing up
type SignUpState = {
    username: string,
    password: string,
    email: string,
    success: boolean,
    message: string,
    redirect: string | null
}

export default class SignUp extends Component<Props, SignUpState> {
    constructor(props: Props) {
        super(props);
        this.handleSignUp = this.handleSignUp.bind(this);

        this.state = {
            username: '',
            password: '',
            email: '',
            success: false,
            message: '',
            redirect: null
        };
    }

    // ----- form handling for required fields/specifications ----- //
    SignUpSchema(){
        return Yup.object().shape({
            username: Yup.string()
              .min(5, 'Username must have at least 5 characters!')
              .max(50, 'Username is too long!')
              .required('Required Field!'),
            password: Yup.string()
              .min(3, 'Password must have at least 3 characters')
              .max(50, 'Password is too long!')
              .required('Required Field!'),
            email: Yup.string()
              .email('Please enter valid email')
              .required('Required Field!'),
        });
    }

    // ----- form handling for submitting/registering new user ------ //

    handleSignUp(formValue: {username: string; password: string; email: string }) {
        const { username, password, email } = formValue;

        this.setState({
            message: '',
            success: false
        });

        // post request
    }

    componentDidMount(): void {
        if (this.state.success){
            this.setState({ redirect: '/login' });
        }
    }

    componentWillUnmount(): void {
        window.location.reload();
    }

    // do we need to render and return even though index.tsx should be handling the rendering?
    render(){
        const { success, message } = this.state;

        const initVals = {
            username: '',
            password: '',
            email: ''
        };

        return(
            <div className='SignUp'>
                <div className='SignUp-Container'>
                    <Formik
                      initialValues={initVals}
                      SignUpSchema={this.SignUpSchema}
                      onSubmit={this.handleSignUp}
                    >
                      <Form>
                        {!success && (
                            <div>
                                <div className='form'>
                                    <label htmlFor='username'> Username </label>
                                    <Field 
                                      name='username'
                                      type='text'
                                      className='form-control'
                                    />
                                    <ErrorMessage
                                      name='username'
                                      component='div'
                                      className='alert alert-danger'
                                    />
                                </div>

                                <div className='form'>
                                    <label htmlFor='password'> Password </label>
                                    <Field
                                      name='password'
                                      type='password'
                                      className='form-control'
                                    />
                                    <ErrorMessage
                                      name='password'
                                      component='div'
                                      className='alert alert-danger'
                                    />
                                </div>

                                <div className='form'>
                                    <label htmlFor='email'> Email </label>
                                    <Field
                                      name='email'
                                      type='email'
                                      className='form-control'
                                    />
                                    <ErrorMessage
                                      name='email'
                                      component='div'
                                      className='alert alert-danger'
                                    />
                                </div>

                                <div className='form'>
                                    <button type='submit' className='btn'> Sign Up</button>
                                </div>
                            </div>
                        )}

                        {message && (
                            <div className='form'>
                                <div
                                  className={
                                    success ? 'alert alert-success' : 'alert alert-danger'
                                  }
                                  role='alert'
                                >
                                  { message }
                                </div>
                            </div>
                        )}
                      </Form>
                    </Formik>
                </div>
            </div>
        );
    }
}


// ------ OLD CODE ------ //

// const Signup = ({ username, password }: SignUpProps) => {
//   function submitHandler() {
//     const userData = {
//       // information to grab from inputs
//       username: document.getElementById('username').value,
//       password: document.getElementById('password').value
//     }
//   }
  
//   return (
//     <form className='SignupForm' onSubmit={submitHandler}>
//         <div className='box'>
//             <h1>RediScope</h1>
//             <div className='inputs'>
//                 <input className='inputUser' type='text' id='username' placeholder='Username'></input>
//                 <input className='inputPW' type='text' id='password' placeholder='Password'></input>
//                 <button className='SignupBtn' type='submit'>Sign up</button>
//             </div>
//             <div className='redirect'>
//                 <span className='redirectLink'>Already have an account? <Link id='link' to='/Login'>Log in here.</Link></span>
//             </div>
//         </div>
//     </form>
//   );
// };

// export default Signup;
import React, { Component } from 'react'
import { Navigate, Link } from 'react-router-dom'
import { Formik, Field, Form, ErrorMessage, yupToFormErrors } from 'formik'
import * as Yup from 'yup'

import AuthService from '../service/authentication'
import {
  ButtonStyle,
  FullscreenContainer,
  LoginSignUpBox,
  Title,
  CenteredContainer,
  LoginLogo,
} from '../styles/GlobalStyle'

// props to be passed down
type Props = {}
// state types for signing up
type SignUpState = {
  username: string
  password: string
  email: string
  success: boolean
  message: string
  redirect: string | null
  formikcheck: boolean
  backendcheck: boolean
  duplicateUser: boolean
}

export default class SignUp extends Component<Props, SignUpState> {
  constructor(props: Props) {
    super(props)
    this.handleSignUp = this.handleSignUp.bind(this)

    this.state = {
      username: '',
      password: '',
      email: '',
      success: true,
      message: '',
      redirect: null,
      formikcheck: false,
      backendcheck: false,
      duplicateUser: false
    }
  }

  // ----- form handling for required fields/specifications ----- //
  SignUpSchema() {
    return Yup.object().shape({
      username: Yup.string()
        .test(
          'len',
          'Username must be between 3 and 20 characters long.',
          (val: any) =>
            val && val.toString().length >= 3 && val.toString().length <= 20
        )

        .required('Required Field!'),
      password: Yup.string()
        .test(
          'len',
          'Password must be between 3 and 20 characters long.',
          (val: any) =>
            val && val.toString().length >= 3 && val.toString().length <= 20
        )
        .required('Required Field!'),
      email: Yup.string()
        .email('Please enter valid email')
        .required('Required Field!'),
    })
  }

  // ----- form handling for submitting/registering new user ------ //

  async handleSignUp(formValue: {
    username: string
    password: string
    email: string
  }) {
    const { username, password, email } = formValue

    // ------ checking to see if input is inserted into fields ------ //

    formValue
      ? this.setState({ success: true, formikcheck: true })
      : this.setState({ message: 'please fill in required fields' })

    await AuthService.signup(username, password, email).then(
      res => {
          this.setState({
            message: res.data.message,
            backendcheck: true,
          })
        
      },
      error => {
        const resMessage =
          (error.res && error.res.data && error.res.data.message) ||
          error.message ||
          error.toString()
        this.setState({
          backendcheck: false,
          message: resMessage,
        })
      }
    )

    if (!this.state.backendcheck) {
      this.setState({duplicateUser: true})
    } else if (this.state.formikcheck) {
      this.setState({ redirect: '/Login' })
    }
  }

  componentDidMount(): void {}

  componentWillUnmount(): void {
    window.location.reload()
  }

  render() {
    if (this.state.redirect) {
      return <Navigate to={this.state.redirect} />
    }

    const { success, message } = this.state

    const initVals = {
      username: '',
      password: '',
      email: '',
    }

    return (
      <FullscreenContainer>
        <CenteredContainer>
          <LoginSignUpBox>
            <div className="formContainer">
              <a href="/">
              <LoginLogo
                src={
                  'https://github.com/oslabs-beta/RediScope/raw/routing-images/src/components/images/RediScope%205.png'
                }
              ></LoginLogo>
              </a>
              <Formik
                initialValues={initVals}
                validationSchema={this.SignUpSchema}
                onSubmit={this.handleSignUp}
              >
                <Form>
                    <div>
                      <div className="form">
                        <label htmlFor="username"> Username </label>
                        <Field
                          name="username"
                          type="text"
                          className="form-control"
                        />
                        <ErrorMessage
                          name="username"
                          component="div"
                          className="alert alert-danger"
                        />
                        {this.state.duplicateUser && (
                        <div className="alert alert-danger">Please try a different username.</div>
                        )}
                      </div>

                      <div className="form">
                        <label htmlFor="password"> Password </label>
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
                        <label htmlFor="email"> Email </label>
                        <Field
                          name="email"
                          type="email"
                          className="form-control"
                        />
                        <ErrorMessage
                          name="email"
                          component="div"
                          className="alert alert-danger"
                        />
                      </div>

                      <div className="form">
                        <ButtonStyle type="submit" className="btn">
                          {' '}
                          Sign Up
                        </ButtonStyle>
                        <div className="redirectLink">
                          <span className="redirectLink">
                            {' '}
                            Already have an account?{' '}
                            <Link id="link" to="/Login">
                              {' '}
                              Login Here{' '}
                            </Link>
                          </span>
                        </div>
                      </div>
                    </div>
                  
                  <br></br>
                  {message && (
                    <div className="form">
                      <div
                        className={
                          success ? 'alert alert-success' : 'alert alert-danger'
                        }
                        role="alert"
                      >
                        Please fill required forms properly. Usernames and
                        passwords should be between 3 and 20 characters. E-mail
                        must be valid.
                      </div>
                    </div>
                  )}
                </Form>
              </Formik>
            </div>
          </LoginSignUpBox>
        </CenteredContainer>
      </FullscreenContainer>
    )
  }
}

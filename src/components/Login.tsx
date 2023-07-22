import React, { Component } from 'react'
import { Navigate, Link } from 'react-router-dom'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import {
  ButtonStyle,
  GlobalStyle,
  FullscreenContainer,
  LoginSignUpBox,
  Title,
  CenteredContainer,
  LoginLogo,
} from '../styles/GlobalStyle'

import AuthService from '../service/authentication'

type Props = {}

// ------ state ------ //
type LoginState = {
  redirect: string | null
  username: string
  password: string
  loading: boolean
  valid: boolean
  message: string
  backendcheck: boolean
  wrongPassword: boolean
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
      message: '',
      backendcheck: false,
      wrongPassword: false
    }
  }

  async handleLogin(formValue: { username: string; password: string }) {
    const { username, password } = formValue

    // ------ invoke login  authorization from service folder ------ //

    await AuthService.login(username, password).then(
      () => {
        // confirmed
        this.setState({
          redirect: '/Dashboard',
          loading: true,
          valid: true,
          username,
          backendcheck: true,
        })
      },
      error => {
        const response =
          (error.res && error.res.data && error.res.data.message) ||
          error.message ||
          error.toString()
        this.setState({
          loading: false,
          valid: false,
          message: response,
          backendcheck: false,
        })
      }
    )

    if (!this.state.backendcheck) {
      this.setState({wrongPassword: true})
    }

    if (this.state.valid === true) {
      this.setState({ redirect: '/Dashboard' })
    }
  }

  componentDidMount(): void {

  }

  componentWillUnmount(): void {


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
      return (
        <Navigate
          to={this.state.redirect}
          state={{ user: this.state.username }}
        />
      )
    }

    const { loading } = this.state

    const initVal = {
      username: '',
      password: '',
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
                    {this.state.wrongPassword && (
                        <div className="alert alert-danger">Incorrect Password.</div>
                        )}
                  </div>

                  <div className="form">
                    <ButtonStyle
                      type="submit"
                      className="btn btn btn-primary mt-4"
                      disabled={loading}
                    >
                      <span>Login</span>
                    </ButtonStyle>
                    <div>
                      <span className="redirectLink">
                        {' '}
                        New to RediScope?{' '}
                        <Link id="link" to="/Signup">
                          {' '}
                          Create an account here.{' '}
                        </Link>
                      </span>
                    </div>
                  </div>
                </Form>
              </Formik>
            </div>
          </LoginSignUpBox>
        </CenteredContainer>
      </FullscreenContainer>
    )
  }
}

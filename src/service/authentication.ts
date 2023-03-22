import axios from 'axios'

// Set NODE_ENV to 'development' or 'production' to conditionally change the URL
// const API_URL = 'http://localhost:4000/api/users/';
const baseURL =
  process.env.NODE_ENV === 'production'
    ? 'api/users/'
    : 'http://localhost:4000/api/users/'

class AuthService {
  login(username: string, password: string) {
    return axios
      .post(baseURL + 'signin', {
        username,
        password,
      })
      .then(res => {
        if (res.data) {
          localStorage.setItem('user', JSON.stringify(res.data))
        }
        return res.data
      })
  }

  signup(username: string, password: string, email: string) {
    return axios.post(baseURL + 'signup', {
      username,
      password,
      email,
    })
  }
}

export default new AuthService()

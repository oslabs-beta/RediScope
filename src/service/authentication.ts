import axios from "axios";

const API_URL = 'http://localhost:4000/api/users/';

class AuthService {
    login(username: string, password: string){
        return axios
          .post(API_URL + "sign-in", {
            username, password
          })
          .then(res => {
            if (res.data){
                localStorage.setItem('user', JSON.stringify(res.data));
            }
            return res.data;
          });
    }

    signup(username: string, password: string, email: string){
        return axios.post(API_URL + 'signup', {
            username,
            password,
            email
        });
    }
}

export default new AuthService();
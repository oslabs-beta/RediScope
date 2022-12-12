// import { GlobalStyle } from './styles/GlobalStyle'
// import { Greetings } from './components/Greetings'
import * as React from 'react';
import * as ReactDOM from "react-dom"
import { HashRouter, Route } from "react-router-dom";
import Login  from "./components/Login";
import SignUp from "./components/Signup";

export function App() {
  return (
    <HashRouter>
      <div>
        <Route path="/Login" element= { <Login />} />
        <Route path="/Signup" element= { <SignUp />} />
      </div>
    </HashRouter>
  )
}

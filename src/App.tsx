// import { GlobalStyle } from './styles/GlobalStyle'
// import { Greetings } from './components/Greetings'
import { HashRouter, Route } from "react-router-dom";
import { Login } from "./components/Login";
import { Signup } from "./components/Signup";

export function App() {
  return (
    <HashRouter>
      <div>
        <Route path="/" component= { Login }/>
        <Route path="/Signup" component= { Signup}/>
      </div>
    </HashRouter>
  )
}

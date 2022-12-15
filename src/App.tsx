import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { HashRouter, Route, Link, Routes } from 'react-router-dom'
import Login from './components/Login'
import SignUp from './components/Signup'
import Dashboard from './components/Dashboard'
import { GlobalStyle } from './styles/GlobalStyle'
import { Greetings } from './components/Greetings'

export function App() {
  // <>
  //   <GlobalStyle />
  //   <Greetings />
  // </>

  //   <HashRouter>
  // <div className="App">
  //   <div className="menu">
  //     <Link to="/"><h2>Home</h2></Link>
  //     <Link to="/one"><h2>Stand</h2></Link>
  //     <Link to="/two"><h2>Sit</h2></Link>
  //   </div>
  //   <Switch>
  //     <Route exact path="/" component={Home}/>
  //     <Route exact path="/one" component={Stand}/>
  //     <Route exact path="/two" component={Sit}/>
  //   </Switch>
  // </div>
  // </HashRouter>

  return (
    <HashRouter>
      <GlobalStyle />{' '}
      <div>
        <div>
          <Link to="/Login">
            <h2>Login</h2>
          </Link>
          <Link to="/Signup">
            <h2>Signup</h2>
          </Link>
          <Link to="/Dashboard">
            <h2>Dashboard</h2>
          </Link>
        </div>

        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<SignUp />} />
          <Route path="/Dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </HashRouter>
  )
}

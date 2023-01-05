import React, { useState, useContext } from 'react'
import * as ReactDOM from 'react-dom'
import { Route, Link, Routes, BrowserRouter } from 'react-router-dom'
import Login from './components/Login'
import SignUp from './components/Signup'
import Dashboard from './components/Dashboard'
import { GlobalStyle } from './styles/GlobalStyle'
import { RedisContextProvider } from './context/RedisContext'
import Main from './components/Main'

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
    <RedisContextProvider>
      <BrowserRouter>
        <GlobalStyle />
        <div>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Signup" element={<SignUp />} />
            <Route path="/Dashboard" element={<Dashboard />} />
          </Routes>
        </div>
      </BrowserRouter>
    </RedisContextProvider>
  )
}

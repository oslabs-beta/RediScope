import React from 'react'
import { Route, Link, Routes, BrowserRouter } from 'react-router-dom'
import Login from './components/Login'
import SignUp from './components/Signup'
import Dashboard from './components/Dashboard'
import { GlobalStyle, Mainpage } from './styles/GlobalStyle'
import { RedisContextProvider } from './context/RedisContext'

export function App() {
  
  return (
    <RedisContextProvider >
      <BrowserRouter>
        <GlobalStyle />
        <div>
          <Mainpage>
            <h1> RediScope </h1>
            <button>
              <Link to="/Login">Login</Link>
            </button>
            <button>
              <Link to="/Signup">Create Account</Link>
            </button>
            <button>
              <Link to="/Dashboard">dash</Link>
            </button>
          </Mainpage>

          <Routes>
            <Route path="/Login" element={<Login />} />
            <Route path="/Signup" element={<SignUp />} />
            <Route path="/Dashboard" element={<Dashboard />} />
          </Routes>
        </div>
      </BrowserRouter>
    </RedisContextProvider>
  )
}


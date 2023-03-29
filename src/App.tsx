import React from 'react'
import { Route, Link, Routes, BrowserRouter } from 'react-router-dom'
import Login from './components/Login'
import SignUp from './components/Signup'
import Dashboard from './components/Dashboard'
import { GlobalStyle } from './styles/GlobalStyle'
import { RedisContextProvider } from './context/RedisContext'
import Main from './components/Main'

export function App() {
  return (
    <RedisContextProvider>
      <BrowserRouter>
        <GlobalStyle />
        
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Signup" element={<SignUp />} />
            <Route path="/Dashboard" element={<Dashboard />} />
          </Routes>
      
      </BrowserRouter>
    </RedisContextProvider>
  )
}

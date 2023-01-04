import React from 'react'
import { Route, Link, Routes, BrowserRouter } from 'react-router-dom'
import {
  ButtonStyle,
  Border,
  Title,
  ChartWrapper,
  Mainpage,
  Center,
  Image,
  Circle
} from '../styles/GlobalStyle'
import ch from './chihiroheadshot.png'
import ce from './images/coralheadshot.png'

type Props = {}

export default function Main(props: Props): JSX.Element {
  return (
    <>
      <Border>
        <div id="header">
          <Center>
            <h1> RediScope </h1>
          </Center>
          <Center>
            <h2> Scope out your Redis cache performance with RediScope</h2> 
          </Center>
          <Center>
             <h3>a data visualizer for Redis cache performance metrics </h3>
          </Center>
          <Center>
            <button> 
              <Link to="/Signup"> Get Started Now!</Link> 
            </button>
          </Center>
        </div>
      </Border>

      <Center>
        <div id="features"> 
          <h1> Features </h1> 
        </div>
      </Center>

      <Border>
        <Center>
         <div id="feature1">
            <h2 id="feature1"> Store Your Redis Cache URL </h2>
        </div>
        </Center>
      </Border>

      <Border>
        <Center>
          <div id="feature2">
            <h2> Look at Performance Metrics in Real Time </h2>
          </div>
        </Center>
      </Border>
      <Border>
        <Center>
          <div id="feature3">
            <h2> Cache/Hit Ratio is calculated for you </h2>
          </div>
        </Center>
      </Border>
      
      <Border>
        <Center>
      <div id="contributers">
        <h2 id="hello"> RediScope Team </h2>
        <div>
     
      <h2> Chihiro Snider </h2>
      <Image src={ch} />
      

      <Image src={ce} />
      </div>
      
       
        
          
           
      
      
      
      </div>
        </Center>
      </Border>
      
    </>
    
  )
}
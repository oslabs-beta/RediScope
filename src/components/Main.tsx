import React from 'react'
import { Route, Link, Routes, BrowserRouter } from 'react-router-dom'
import {
  ButtonStyle,
  Border,
  Center,
  Image,
  Gif,
  Team,
  Names,
  NavBar,
  Nav,
  Elements,
  Title

} from '../styles/GlobalStyle'
import cs from './images/chihiroheadshot.png'
import ce from './images/coralheadshot.png'
import aw from './images/AW.png'
import bk from './images/BK.png'
import graphGif from './images/giphygraph.gif'
import  linkIcon from './images/linkedinicon.svg'


type Props = {}

export default function Main(props: Props): JSX.Element {
  return (
    <>
      <NavBar>
        <Title> RediScope </Title>
        <Nav>
          <Elements>
            <li><a href='/Signup'>Get Started</a></li>
            <li><a href='/Login'>Login</a></li>
          </Elements>
        </Nav>
      </NavBar>
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
            <ButtonStyle> 
              <Link to="/Signup"> Get Started Now!</Link> 
            </ButtonStyle>
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
            <h2> View Performance Metrics in Real Time </h2>
          </div>
        </Center>
        <Center>
        <Gif src={graphGif} />
        </Center>
      </Border>
      <Border>
        <Center>
          <div id="feature3">
            <h2> Cache/Hit Ratio is calculated for you </h2>
            <h3>Cache Hit Ratio = KeySpace Hits/ KeySpace Misses + KeySpace Hits</h3>
          </div>
        </Center>
       
      </Border>
      <Center>
        <h1 id="hello"> RediScope Team </h1>
        </Center>
      <Border>
        <Center>
          <div id="contributers">
            
             <Team>
              <Names>
               <h3> Chihiro Snider </h3>
               </Names>
                   <Image src={cs} />
                   
              </Team>
              <Team>
                <div>
                <Names>
                <h3> Coral D. Edelson </h3>
                </Names>
                   <Image src={ce} />
                   </div>
                  
              </Team>
              <Team>
                <Names>
                <h3>
                  <a href="www.linkedin.com/in/andy-wong27"> Andy Wong</a></h3>
                </Names>
                   <Image src={aw} />
              </Team>
              <Team>
                <div>
                <Names>
                <h3> Bo Kim</h3>
                </Names>
                   <Image src={bk} />
                   </div>
              </Team>
              <Team>
                  <Names>
                   <h3> Coral Edelson</h3>
                   </Names>
                   <Image src={ce} />
                   </Team>
              
           </div>
        </Center>
      </Border>
      
    </>
    
  )
}
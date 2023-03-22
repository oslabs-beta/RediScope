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
  Title,
  URLGif,
  ContributorsDiv,
  MainLogo,
  UpperLogo,
  WriteUp,
  H2Title,
  H5Title
} from '../styles/GlobalStyle'
// import cs from './images/chihiroheadshot.png'
// import ce from './images/coralheadshot.png'
// import aw from './images/AW.png'
// import bk from './images/BK.png'
// import ay from './images/AY.png'
// import graphGif from './images/giphygraph.gif'
// import URL from './images/URL.gif'

type Props = {}

export default function Main(props: Props): JSX.Element {
  return (
    <>
      <NavBar>
        <UpperLogo
          src={
            'https://github.com/oslabs-beta/RediScope/raw/routing-images/src/components/images/RediScope%205.png'
          }
        ></UpperLogo>
        <Nav>
          <Elements>
            <li>
              <a href="/Signup">Get Started</a>
            </li>
            <li>
              <a href="/Login">Login</a>
            </li>
          </Elements>
        </Nav>
      </NavBar>
      <Border>
        <div id="header">
          <Center>
            <MainLogo
              src={
                'https://github.com/oslabs-beta/RediScope/raw/routing-images/src/components/images/RediScope%205.png'
              }
            ></MainLogo>
          </Center>
          <Center>
            <H2Title> Scope out your Redis cache performance with RediScope</H2Title>
          </Center>
          <Center>
            <H5Title>
              A free open source visualizer for Redis cache performance metrics{' '}
            </H5Title>
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
            <H2Title id="feature1"> Store Your Redis Cache URL </H2Title>
          </div>
        </Center>
        <Center>
          <URLGif
            src={
              'https://github.com/oslabs-beta/RediScope/raw/fix-pathing-images/public/assets/URL.gif'
            }
          />
        </Center>
      </Border>

      <Border>
        <Center>
          <div id="feature2">
            <H2Title> View Performance Metrics in Real Time </H2Title>
          </div>
        </Center>
        <Center>
          <Gif
            src={
              'https://github.com/oslabs-beta/RediScope/raw/fix-pathing-images/public/assets/giphygraph.gif'
            }
          />
        </Center>
      </Border>
      <Border>
        <Center>
          <div id="feature3">
            <H2Title>
            Ditch the calculator. Cache Hit Ratio is calculated for you.
            </H2Title>
            <WriteUp>
              Cache hit ratio helps developers determine which key-value pairs
              should be cached and is often overlooked.
              <br></br>
              Cache Hit Ratio = KeySpace Hits/ (KeySpace Misses + KeySpace Hits)
            </WriteUp>
          </div>
        </Center>
      </Border>
      <Center>
        <h1 id="hello"> RediScope Team </h1>
      </Center>
      <Center>
        <ContributorsDiv>
          <Team>
            <Image
              src={
                'https://github.com/oslabs-beta/RediScope/raw/fix-pathing-images/public/assets/CoralHeadshot.png'
              }
            />
            <Names>
              <a href="https://www.linkedin.com/in/coral-dabarera-edelson/">
                {' '}
                Coral Dabarera Edelson
              </a>{' '}
            </Names>

            <ul>
              <a href="https://www.linkedin.com/in/coral-dabarera-edelson/">
                {' '}
                linkedin{' '}
              </a>
              <br></br>
              <a href="https://github.com/coraletoile"> github </a>
            </ul>
          </Team>
          <Team>
            <Image
              src={
                'https://github.com/oslabs-beta/RediScope/raw/fix-pathing-images/public/assets/BK.png'
              }
            />
            <Names>
              <a href="https://www.linkedin.com/in/bokim1/"> Bo Kim </a>{' '}
            </Names>

            <ul>
              <a href="https://www.linkedin.com/in/bokim1/"> linkedin </a>
              <br></br>
              <a href="https://github.com/bokim2">github </a>
            </ul>
          </Team>
          <Team>
            <Image
              src={
                'https://github.com/oslabs-beta/RediScope/raw/fix-pathing-images/public/assets/Chihiroheadshot.png'
              }
            />
            <Names>
              <a href="https://www.linkedin.com/in/chihiro-snider/">
                {' '}
                Chihiro Snider
              </a>
            </Names>

            <ul>
              <a href="https://www.linkedin.com/in/chihiro-snider/">
                {' '}
                linkedin{' '}
              </a>
              <br></br>
              <a href="https://github.com/cheesehero112">github </a>
            </ul>
          </Team>

          <Team>
            <Image
              src={
                'https://github.com/oslabs-beta/RediScope/raw/fix-pathing-images/public/assets/AW.png'
              }
            />
            <Names>
              <a href="www.linkedin.com/in/andy-wong27"> Andy Wong</a>
            </Names>

            <ul>
              <a href="https://www.linkedin.com/in/andy-wong27/"> linkedin </a>
              <br></br>
              <a href="https://github.com/andyw27">github </a>
            </ul>
          </Team>

          <Team>
            <Image
              src={
                'https://github.com/oslabs-beta/RediScope/raw/fix-pathing-images/public/assets/AY.png'
              }
            />
            <Names>
              <a href="https://www.linkedin.com/in/anazyazd/">
                {' '}
                Andrea Azadeh Yazdandoost{' '}
              </a>
            </Names>

            <ul>
              <a href="https://www.linkedin.com/in/anazyazd/"> linkedin </a>
              <br></br>
              <a href="https://github.com/anazyazd">github </a>
            </ul>
          </Team>
        </ContributorsDiv>
      </Center>
    </>
  )
}

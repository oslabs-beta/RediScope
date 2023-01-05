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
} from '../styles/GlobalStyle'
import cs from '../../public/assets/chihiroheadshot.png'
import ce from '../../public/assets/coralheadshot.png'
import aw from '../../public/assets/AW.png'
import bk from '../../public/assets/BK.png'
import ay from '../../public/assets/AY.png'
import graphGif from '../../public/assets/giphygraph.gif'
import URL from '../../public/assets/URL.gif'

type Props = {}

export default function Main(props: Props): JSX.Element {
  return (
    <>
      <NavBar>
        <Title> RediScope </Title>
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
            <Title> RediScope </Title>
          </Center>
          <Center>
            <h2> Scope out your Redis cache performance with RediScope</h2>
          </Center>
          <Center>
            <h5>
              A free, open source visualizer for Redis cache performance metrics{' '}
            </h5>
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
        <Center>
          <URLGif src={URL} />
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
            <h4>
              Cache Hit Ratio = <br></br>KeySpace Hits/ (KeySpace Misses +
              KeySpace Hits)
            </h4>
          </div>
        </Center>
      </Border>
      <Center>
        <h1 id="hello"> RediScope Team </h1>
      </Center>
      <Center>
        <ContributorsDiv>
          <Team>
            <Names>
              <h3>
                <a href="https://www.linkedin.com/in/coral-dabarera-edelson/">
                  {' '}
                  Coral Dabarera Edelson
                </a>{' '}
              </h3>
            </Names>
            <Image src={ce} />
          </Team>
          <Team>
            <Names>
              <h3>
                <a href="https://www.linkedin.com/in/bokim1/"> Bo Kim </a>{' '}
              </h3>
            </Names>
            <Image src={bk} />
          </Team>
          <Team>
            <Names>
              <h3>
                <a href="https://www.linkedin.com/in/chihiro-snider/">
                  {' '}
                  Chihiro Snider
                </a>
              </h3>
            </Names>
            <Image src={cs} />
          </Team>

          <Team>
            <Names>
              <h3>
                <a href="www.linkedin.com/in/andy-wong27"> Andy Wong</a>
              </h3>
            </Names>
            <Image src={aw} />
          </Team>

          <Team>
            <Names>
              <h3>
                <a href="https://www.linkedin.com/in/aazyaz/">
                  {' '}
                  Andrea Azadeh Yazdandoost{' '}
                </a>
              </h3>
            </Names>
            <Image src={ay} />
          </Team>
        </ContributorsDiv>
      </Center>
    </>
  )
}

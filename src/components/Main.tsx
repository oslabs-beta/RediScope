import React from 'react'
import { Route, Link, Routes, BrowserRouter } from 'react-router-dom'
import {
  ButtonStyle,
  BorderStyle,
  MainContainer,
  CenterStyle,
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
  TeamsDiv,
  MainLogo,
  UpperLogo,
  WriteUp,
  H2Title,
  H5Title,
  Spacer,
  Socials,
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
              <a href="/Login" style={{marginLeft: "2.2em", marginRight: ".4em"}}>Login</a>
            </li>
          </Elements>
        </Nav>
      </NavBar>

      {/* <Spacer></Spacer> */}
      <MainContainer>
        <BorderStyle style={{paddingBottom: "3em", paddingTop: "0em"}}>
          <div id="header">
            <CenterStyle>
              <MainLogo
                src={
                  'https://github.com/oslabs-beta/RediScope/raw/routing-images/src/components/images/RediScope%205.png'
                }
              ></MainLogo>
            </CenterStyle>
            <CenterStyle>
              <H2Title>
                {' '}
                Scope out your Redis cache performance with RediScope
              </H2Title>
            </CenterStyle>
            <CenterStyle >
              <H5Title >
                A free open source visualizer for Redis cache performance metrics{' '}
              </H5Title>
              {/* <h1 style={{paddingTop: "2em"}}> </h1> */}
            </CenterStyle>
            <CenterStyle>
            
              <ButtonStyle>
                <Link to="/Signup" > Get Started Now!</Link>
              </ButtonStyle>
            </CenterStyle>
          </div>
        </BorderStyle>

        <CenterStyle>
          <div id="features">
            <h1 style={{paddingTop: "1em"}}> Features </h1>
          </div>
        </CenterStyle>

        <BorderStyle>
          <CenterStyle>
            <div id="feature1">
              <H2Title id="feature1"> Store Your Redis Cache URL </H2Title>
            </div>
          </CenterStyle>
          <CenterStyle>
            <URLGif
              src={
                'https://github.com/oslabs-beta/RediScope/raw/fix-pathing-images/public/assets/URL.gif'
              }
            />
          </CenterStyle>
        </BorderStyle>
        {/* <h1 style={{paddingTop: ".5em"}}>  </h1> */}
        <BorderStyle >
          <CenterStyle>
            <div id="feature2">
              <H2Title> View Performance Metrics in Real Time </H2Title>
            </div>
          </CenterStyle>
          <CenterStyle>
            <Gif
              src={
                'https://github.com/oslabs-beta/RediScope/raw/r2dev/src/components/images/rediscopegraphs6.gif'
              }
            />
          </CenterStyle>
        </BorderStyle>
        {/* <h1 style={{paddingTop: ".5em"}}>  </h1> */}
        <BorderStyle>
          <div id="feature3">
            <CenterStyle>
              <H2Title style={{paddingBottom: "0.6em"}}>
                Ditch the calculator. Cache Hit Ratio is calculated for you.
              </H2Title>
            </CenterStyle>
            <CenterStyle>
              <WriteUp>
                Cache hit ratio helps developers determine which key-value pairs
                should be cached and is often overlooked.
                <br></br>
                <h1 style={{paddingTop: ".2em"}}>  </h1>
                Cache Hit Ratio = KeySpace Hits / ( KeySpace Misses + KeySpace Hits )
              </WriteUp>
            </CenterStyle>
          </div>
        </BorderStyle>
        <h1 style={{paddingTop: "1em"}}>  </h1>
        <CenterStyle>
          <h1 id="hello"> RediScope Team </h1>
        </CenterStyle>
        <CenterStyle>
          <TeamsDiv>
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

              <Socials>
                <a href="https://www.linkedin.com/in/coral-dabarera-edelson/">
                  {' '}
                  linkedin{' '}
                </a>
                <a href="https://github.com/coraletoile"> github </a>
              </Socials>
            </Team>
            <Team>
              <Image
                src={
                  'https://github.com/oslabs-beta/RediScope/raw/fix-pathing-images/public/assets/BK.png'
                }
              />
              <Names>
                <a href="https://www.linkedin.com/in/bokim1/"> Bo Kim                     
                </a>{' '} <br/>
              </Names>

              <Socials>
                <a href="https://www.linkedin.com/in/bokim1/"> linkedin </a>

                <a href="https://github.com/bokim2">github </a>
              </Socials>
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
                  Chihiro Snider<br/>
                </a>
              </Names>
        

              <Socials>
                <a href="https://www.linkedin.com/in/chihiro-snider/">
                  {' '}
                  linkedin{' '}
                </a>
                <a href="https://github.com/cheesehero112">github </a>
              </Socials>
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

              <Socials>
                <a href="https://www.linkedin.com/in/andy-wong27/"> linkedin </a>
                <a href="https://github.com/andyw27">github </a>
              </Socials>
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

              <Socials>
                <a href="https://www.linkedin.com/in/anazyazd/"> linkedin </a>
                <a href="https://github.com/anazyazd">github </a>
              </Socials>
            </Team>
          </TeamsDiv>
        </CenterStyle>
      </MainContainer>
    </>
  )
}

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
              <a
              href="/Signup"
              style={{ marginLeft: '2.2em', marginRight: '.4em', paddingTop: '0%', paddingBottom: '0' }}
              >Get Started
              </a>
            </li>
            <li>
              <a
                href="/Login"
                style={{ marginLeft: '2.2em', marginRight: '.4em', paddingTop: '0%' }}
              >
                Login
              </a>
            </li>
            <li>
              <a 
                href="https://www.linkedin.com/company/rediscope-open-source-tool/"
                style={{ marginLeft: '2.2em', marginRight: '.4em', paddingTop: '0%' }}
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://github.com/oslabs-beta/rediscope"
                style={{ marginLeft: '2.2em', marginRight: '.4em', paddingTop: '0%' }}
              >
                GitHub
              </a>
            </li>
          </Elements>
        </Nav>
      </NavBar>

      {/* <Spacer></Spacer> */}
      <MainContainer>
        <BorderStyle style={{ paddingBottom: '3em', paddingTop: '0em', boxShadow: '0 0 0.75em white' }}>
          <div id="header">
            <CenterStyle>
              <MainLogo
                src={
                  'https://github.com/oslabs-beta/RediScope/raw/r2dev/src/components/images/Rediscope-banner_27kb.jpg'
                }
              ></MainLogo>
            </CenterStyle>
            <CenterStyle>
              <H2Title style={{ fontFamily: 'Quicksand' }}>
                {' '}
                Scope out your Redis cache performance with RediScope
              </H2Title>
            </CenterStyle>
            <CenterStyle>
              <H5Title >
                A free open source visualizer for Redis cache performance
                metrics{' '}
              </H5Title>
              {/* <h1 style={{paddingTop: "2em"}}> </h1> */}
            </CenterStyle>
            <CenterStyle>
              <ButtonStyle>
                <Link to="/Signup" style={{ color: 'white' }}> Get Started Now!</Link>
              </ButtonStyle>
            </CenterStyle>
          </div>
        </BorderStyle>

        <CenterStyle>
          <div id="features">
            <h1 style={{ paddingTop: '1em' }}> Features </h1>
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
        <BorderStyle>
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
              <H2Title style={{ paddingBottom: '0.6em' }}>
                Ditch the calculator. Cache Hit Ratio is calculated for you.
              </H2Title>
            </CenterStyle>
            <CenterStyle>
              <WriteUp>
                Cache hit ratio helps developers determine which key-value pairs
                should be cached and is often overlooked.
                <br></br>
                <h1 style={{ paddingTop: '.2em' }}> </h1>
                Cache Hit Ratio = KeySpace Hits / ( KeySpace Misses + KeySpace
                Hits )
              </WriteUp>
            </CenterStyle>
          </div>
        </BorderStyle>
        <h1 style={{ paddingTop: '1em' }}> </h1>
        <CenterStyle>
          <h1 id="hello"> RediScope Team </h1>
        </CenterStyle>
        <CenterStyle>
          <TeamsDiv>
            <Team>
              <Image
                src={
                  'https://github.com/oslabs-beta/RediScope/raw/r2dev/src/components/images/CDE_png_113kb.png'
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
                  <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                  </svg>{' '}
                </a>
                <a href="https://github.com/coraletoile">
                <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                  </svg>
                </a>
              </Socials>
            </Team>
            <Team>
              <Image
                src={
                  'https://github.com/oslabs-beta/RediScope/raw/r2dev/src/components/images/BK-png_163kb.png'
                }
              />
              <Names>
                <a href="https://www.linkedin.com/in/bokim1/"> Bo Kim</a> <br />
              </Names>

              <Socials>
                <a href="https://www.linkedin.com/in/bokim1/">
                <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                  </svg>{' '}
                </a>

                <a href="https://github.com/bokim2">
                <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                  </svg>
                </a>
              </Socials>
            </Team>
            <Team>
              <Image
                src={
                  'https://github.com/oslabs-beta/RediScope/raw/r2dev/src/components/images/CS_png_139kb.png'
                }
              />
              <Names>
                <a href="https://www.linkedin.com/in/chihiro-snider/">
                  {' '}
                  Chihiro Snider
                  <br />
                </a>
              </Names>

              <Socials>
                <a href="https://www.linkedin.com/in/chihiro-snider/">
                  {' '}
                  <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                  </svg>{' '}{' '}
                </a>
                <a href="https://github.com/cheesehero112">
                <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                  </svg>
                </a>
              </Socials>
            </Team>

            <Team>
              <Image
                src={
                  'https://github.com/oslabs-beta/RediScope/raw/r2dev/src/components/images/AW-png_119kb.png'
                }
              />
              <Names>
                <a href="www.linkedin.com/in/andy-wong27"> Andy Wong</a>
              </Names>

              <Socials>
                <a href="https://www.linkedin.com/in/andy-wong27/">
                  {' '}
                  <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                  </svg>{' '}{' '}
                </a>
                <a href="https://github.com/andyw27">
                <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                  </svg> </a>
              </Socials>
            </Team>

            <Team>
              <Image
                src={
                  'https://github.com/oslabs-beta/RediScope/raw/r2dev/src/components/images/AY-png_119kb.png'
                }
              />
              <Names>
                <a href="https://www.linkedin.com/in/anazyazd/">
                  {' '}
                  Andrea Azadeh Yazdandoost{' '}
                </a>
              </Names>

              <Socials>
                <a href="https://www.linkedin.com/in/anazyazd/">
                <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                  </svg>{' '}
                </a>
                <a href="https://github.com/anazyazd">
                  <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                  </svg>
                </a>
              </Socials>
            </Team>
          </TeamsDiv>
        </CenterStyle>
      </MainContainer>
    </>
  )
}

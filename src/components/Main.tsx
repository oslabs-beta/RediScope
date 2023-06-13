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
  Feature,
  Feature2,
  BottomBorder,
  FeatureOne,
  URLStorageTitle,
  HoldText
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
    {/* Section 0: Navigation */}
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
              {/* <li className="dropdown">
                <a href="javascript:void(0)" className="dropbtn">Follow Us</a>
                <div className="dropdown-content">
                  <a href="#">1</a>
                  <a href="#">2</a>
                </div>
              </li> */}
            {/* <li>
              <a 
                href="https://www.linkedin.com/company/rediscope-open-source-tool/"
                style={{ marginLeft: '2.2em', marginRight: '.4em', paddingTop: '0%' }}
              >
                LinkedIn
              </a>
            </li> */}
            {/* <li>
              <a
                href="https://github.com/oslabs-beta/rediscope"
                style={{ marginLeft: '2.2em', marginRight: '.4em', paddingTop: '0%' }}
              >
                GitHub
              </a>
            </li> */}
          </Elements>
        </Nav>
      </NavBar>

   
      <MainContainer>
      {/* Container #1:  title with logo 'get started' */}
        <BorderStyle style={{ paddingBottom: '3em', paddingTop: '0em', boxShadow: '0 0 0.1em #D8EEEE' , marginBottom: '2em'}}>
          <div id="header">
            <CenterStyle>
              <MainLogo
                src={
                  'https://github.com/oslabs-beta/RediScope/raw/r2dev/src/components/images/Rediscope-banner_27kb.jpg'
                }
              ></MainLogo>
            </CenterStyle>
            <CenterStyle>
              <H2Title style={{ marginTop: '.5em'}}>
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

      {/* Container #2:  'Features' with gif of all 6 graphs */}  
        <BorderStyle style={{ backgroundColor: 'rgb(101, 197, 195, 0.2)', border: 'none', width: '100%', marginBottom: '2em'}}>
        {/* <CenterStyle>
          <div id="features">
            <h2 style={{ paddingTop: '1em', paddingBottom: '.6em', textShadow: '0em 0em 0.04em #AEFEFF', fontSize: '4vw'}}>Features </h2>
          </div>
        </CenterStyle> */}
        
        <CenterStyle style={{}}>
          <Feature2>
            <CenterStyle>    
              <H2Title style={{paddingBottom: '0.2em'}}> View performance metrics in real time </H2Title>
                {'\n'}
            </CenterStyle>
            
            <CenterStyle>
                <WriteUp> 
                  Utilize six customizable graphs to make sure your cache is running efficiently.
                  <br></br>
                  <br></br>
                  <CenterStyle>
                    <Gif style={{}}
                      src={
                        'https://github.com/oslabs-beta/RediScope/raw/r2dev/src/components/images/rediscopegraphs6.gif'
                      }
                    />
                  </CenterStyle>
                  <br></br>
                  Track your cache database's memory usage, number of connected clients, total commands processed, evicted keys, cache hit ratio, and as of RediScope 2.0:  &nbsp;&nbsp; commands per second.
                    <br></br>
                    <br></br>
                    Cache Invalidation made easy.
                </WriteUp>
              </CenterStyle>
              
            </Feature2>
          </CenterStyle>
          {/* < BottomBorder/> */}
            {/* <div className="bottom-border" style={{paddingBottom: '10em', borderBottom: '1px solid', borderBottomColor: '#4FBDBA', marginLeft: '-100vw', marginRight: }}></div> */}
        </BorderStyle>
      
      {/* Container #3:  'store your redis cache URL' */}  
        <BorderStyle style={{  boxShadow: '0 0 0.1em #D8EEEE' , marginBottom: '2em'}}>
          
            {/* <Feature style={{ }}> */}
              <FeatureOne>


                <CenterStyle>
                  <URLGif
                      src={
                        // 'https://github.com/oslabs-beta/RediScope/raw/fix-pathing-images/public/assets/URL.gif'
                        'https://github.com/oslabs-beta/RediScope/raw/r2dev/src/components/images/adding%20URL.gif'
                      }
                    />
                </CenterStyle>
                <CenterStyle>
                  <HoldText >
                      <H2Title  style={{ alignSelf: 'start'}}> 
                        Store your Redis cache URL </H2Title><br></br>
                      <WriteUp id="feature1"> Securely store and assign an alias to your Redis cache connection URL. 
                      <br></br>
                      <br></br>
                      No need to copy and paste every time. </WriteUp>
                  </HoldText>
                </CenterStyle>
                </FeatureOne>
              <br></br>
              {/* </Feature> */}
          
        </BorderStyle>

      {/* Container #3:  'Enable privacy mode at any time' */}  
        <BorderStyle style={{backgroundColor: 'rgb(101, 197, 195, 0.2)', border: 'none', width: '100%', marginBottom: '2em', paddingBottom: '3em'}}>
          <CenterStyle style={{}}>
            <div id="privacy" style={{ paddingBottom: '2em', display: 'flex',alignContent: 'center', alignItems: 'center'}}>
                <H2Title style={{textAlign: 'center'}}>Enable privacy mode at any time.</H2Title>
                <br></br>
                <div id="private-eyes" style={{paddingLeft: '0.6em'}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="5em" height="5em" fill="currentColor" className="bi bi-eye-slash" viewBox="0 0 16 16">
                  <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>
                  <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>
                  <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="5em" height="5em" fill="currentColor" className="bi bi-eye-fill" viewBox="0 0 16 16">
                  <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
                  <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
              </svg>
              </div>
            </div>
          </CenterStyle>
        </BorderStyle>


      {/* Container #4:  'Ditch the calculator. Cache Hit Ratio is calculated for you' */}              
        <BorderStyle style={{ boxShadow: '0 0 0.1em #D8EEEE' , marginBottom: '2em'}}>
          <div id="feature3" style={{display: 'flex', flexDirection: 'row'}}>
            {/* <CenterStyle> */}
            {/* <Feature> */}
            <svg xmlns="http://www.w3.org/2000/svg" width="16em" height="16em" fill="currentColor" className="bi bi-calculator" viewBox="0 0 16 16">
                <path d="M12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h8zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z"/>
                <path d="M4 2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-2zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-4z"/>
              </svg>
              <div style={{display: 'flex', flexDirection: 'column'}}>
              <H2Title style={{ paddingBottom: '0.6em' }}>
                Ditch the calculator. Cache Hit Ratio is calculated for you.
              </H2Title>
            {/* </CenterStyle> */}
            {/* <CenterStyle> */}
              <WriteUp>
                Cache hit ratio helps developers determine which key-value pairs
                should be cached and is often overlooked.
                <br></br>
                <h1 style={{ paddingTop: '.2em' }}> </h1>
                We determine our cache hit ratio by looking at keyspace hits compared to misses.
              </WriteUp>
              </div>
           
            {/* </CenterStyle> */}
            {/* </Feature> */}
          </div>
        </BorderStyle>

      {/* Container #5:  Rediscope Team */}  
        <CenterStyle>
          <h1 id="hello" style={{ padding: '1em', fontFamily: 'Merriweather, Serif', fontWeight: '300'}}> RediScope Team </h1>
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

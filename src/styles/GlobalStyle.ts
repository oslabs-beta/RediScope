import styled, { createGlobalStyle, StyledFunction } from 'styled-components'
// import cs from '../components/images/chihiroheadshot.png'
// import ce from '../components/images/coralheadshot.png'
// import graphGif from '../components/images/giphygraph.gif'

interface Props {
  src: any
  width: string
  height: string
}

export const GlobalStyle = createGlobalStyle`

* {
  margin: 0px;
  top: 50%
  padding: 10px;
}

#root{
  margin: 5% 2%;
  justify-content: space-around;
}

body {
  font-family: 'Lato', sans-serif;
  font-size: 18px;
  background-color: #072227;
  color: #D8EEEE;

}

a {
  text-decoration: none;
  color: #D8EEEE;
}

`
export const ButtonStyle = styled.button`
  height: 42px;
  padding: 10px;
  width: 100%;
  display: block;
  margin: 20px 0px;
  padding-bottom: 2.25em;

  background: transparent;
  border-radius: 8px;
  border: 1px solid #aefeff;
  transition: 1s ease-in-out;

  color: #fff;
  font-size: 16px;
  font-weight: bold;

  cursor: pointer;

  &:hover {
    filter: brightness(0.9);
    background-color: #35858b;
    transition: 1s ease-in-out;
    stroke-dashoffset: -480;
    border-color: #ffdd87;
  }

  &:active {
    filter: brightness(0.7);
  }

  a:link {
    text-decoration: none;
    color: #d8eeee;
  }
`

export const clickLink = styled.link`
  a:link {
    text-decoration: none;
  }
`

export const LoginSignUpBox = styled.div`
  border-radius: 10px;
  border: 1px solid #286468;
  box-shadow: 1px 4px 10px #aefeff;
  background-image: linear-gradient(#072227, #35858b);
  background-size: cover;
  background-repeat: no-repeat;
  padding: 25px;
`

export const Title = styled.h1`
  font-size: 60px;
  text-align: center;
  color: white;
  font-family: 'Playfair Display', serif;
  font-weight: 800;
`
export const MainLogo = styled.img`
  width: 80%;
  margin-bottom: 10px;
`
export const UpperLogo = styled.img`
  width: 10em;
  margin-bottom: 10px;
`
export const LoginLogo = styled.img`
  width: 55%;
  margin-bottom: 10px;
`

export const DashboardContainer = styled.div`
  display: flex;
  width: 100%
  flex-direction: row;
  border: 0.2px outset #24383b;
`
export const MainContainer = styled.div`
  margin-top: 7em;
  margin-left: 4em;
  margin-right: 4em;

`
export const URLSelector = styled.div`
  padding: 25px;
  background-color: #08282e;
  width: 20%;
`
export const GraphContainer = styled.div`
  width: 80%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%/2, max(300px, 100%/3)), 1fr));
  grid-auto-rows: min-content;

`
// repeat(auto-fit, minmax(min(100%/2, max(300px, 100%/3)), 1fr));
// place-items: stretch;
//  grid-template-rows: fit-content;

export const GraphDiv = styled.div`

  aspect-ratio: 1; 
  display: flex; 
  align-items:
  padding: 1em;
  margin-bottom: 0px;
  margin: .4em;
  border: 0.1em solid;
  border-color: #4fbdba;
  
`

// align-items: start;
// justify-content: start;

export const Inner = styled.div`
  width: 100%;
  height:100%;
  padding: 10px;
`

export const ChartWrapper = styled.section`
  text-align: center;
  color: white;
  width: 100%;
  height:100%;
`

export const CenteredContainer = styled.div`
  margin: auto;
  padding: 5px;
  width: 30%;
  top: 50%;
  gap: 20%;
  align-items: center;
  text-align: center;
  display: flex;
  justify-content: space-around;
`

export const Nav = styled.li`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  display: inline;

  a {
    color: #d8eeee;
    font-size: 25px;
    display: block;
    padding: 8px;
    margin-top: 10px;
  }

  a:hover {
    cursor: pointer;
    filter: brightness(0.9);
    background-color: #35858b;
    transition: 1s ease-in-out;
    stroke-dashoffset: -480;
    border-color: #ffdd87;
    border-radius: 5em;
  }
`
export const NavBar = styled.header`
  display: flex;
  justify-content: space-between;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  padding-left: 3em;
  background-color: #aefeff;
  background-image: linear-gradient(
    15deg,
    #4fbdba 26%,
    #35858b 42%,
    #05161a 80%
  );
  background-size: cover;
  background-repeat: no-repeat;
`
export const Elements = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: .5em;
  padding-right: 5em;
  justify-content: flex-start;
  align-items: center;
`

export const URLSelection = styled.select`
  background-color: #05161a;
  color: #dadada;
  font-size: 20px;
  cursor: pointer;
  border: 1px inset #072227;
  border-radius: 4px;
  padding: 7px;
  outline: none;
`

export const Option = styled.option`
  padding: 10px;
  border-bottom: 1px;

  &:hover {
    filter: brightness(0.9);
    background-color: #35858b;
    transition: 1s ease-in-out;
    stroke-dashoffset: -480;
    border-color: #ffdd87;
    color: rgb(216, 238, 238);
  }
`
export const DeleteButton = styled.button`
  height: 42px;
  padding: 10px;
  width: 100%;
  display: block;
  margin: 20px 0;
  padding-bottom: 2.25em;

  background: rgb(255, 99, 132, 0.5);
  border-radius: 8px;
  border: 2px solid rgb(255, 99, 132);
  transition: 1s ease-in-out;

  color: #dadada;
  font-size: 16px;
  font-weight: bold;

  cursor: pointer;

  &:hover {
    filter: brightness(0.9);
    background-color: #bd4f52;
    transition: 1s ease-in-out;
    stroke-dashoffset: -480;
    border-color: #ffdd87;
  }

  &:active {
    filter: brightness(0.7);
  }
`

export const CollectButton = styled.button`
  height: 42px;
  padding: 10px;
  width: 100%;
  display: block;
  margin: 20px 0;
  padding-bottom: 2.25em;

  background: rgb(79, 189, 186, 0.4);
  border-radius: 8px;
  border: 2px solid rgb(79, 189, 186);
  transition: 1s ease-in-out;

  color: white;
  font-size: 16px;
  font-weight: bold;

  cursor: pointer;

  &:hover {
    filter: brightness(0.9);
    background-color: rgb(79, 189, 186);
    transition: 1s ease-in-out;
    stroke-dashoffset: -480;
    border-color: #ffdd87;
  }

  &:active {
    filter: brightness(0.7);
  }
`

export const UserInput = styled.input`
  border: none;
  border-bottom: 1px solid #35858b;
  background-color: transparent;
  color: rgb(216, 238, 238, 0.5);
  width: 100%;
  outline: none;
`
export const URLInput = styled.input`
  border: none;
  border-bottom: 1px solid #35858b;
  background-color: transparent;
  color: rgb(216, 238, 238, 0.5);
  width: 100%;
  outline: none;
`
export const FormikStyle = styled.form`
  input {
    border: none;
    border-bottom: 1px solid #35858b;
    background-color: transparent;
    color: rgb(216, 238, 238, 0.5);
    width: 100%;
    outline: none;
  }
`
export const RedisForms = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
export const SelectedURL = styled.p`
  overflow-wrap: break-word;
  inline-size: 300px;
`
export const CenterStyle = styled.div`
  display: flex;
  justify-content: center;

  padding: 10px, 10px;
`
// align-items: start;

export const Spacer = styled.div`
  height: 100px;
  width: 100%;
`

export const BorderStyle = styled.div`
padding: 5em 2em;

margin-bottom: 10px;
margin-top: 10px;
border: 0.1em solid;
border-color: #4fbdba;
border-radius: 8px;
justify-content: center;
align-items: center;
overflow: hidden;
white-space: nowrap;
min-width: 580px;
`
// margin-top: 6em;

export const H2Title = styled.h2`
  font-size: 2.8vw;

  @media (max-width: 650px) {
    font-size: 18px;
  }
`
export const H5Title = styled.h5`
  font-size: 2.3vw;
  @media (max-width: 650px) {
    font-size: 16px;
  }
`

export const Circle = styled.div`
  display: inline-block;
  position: relative;
  width: 200px;
  height: 200px;
  overflow: hidden;
  border-radius: 50%;
`

// background-image: url(${'https://github.com/oslabs-beta/RediScope/raw/fix-pathing-images/public/assets/Chihiroheadshot.png'});
export const Image = styled.img`
  width: 200px;
  height: 200px;
  align-items: center;
`
// background-image: url(${'https://github.com/oslabs-beta/RediScope/raw/fix-pathing-images/public/assets/giphygraph.gif'});
export const Gif = styled.img`
  width: 450px;
  height: 400px;

  @media screen and (max-width: 750px) {
    width: 225px;
    height: 200px;
  }
`

// background-image: url(${'https://github.com/oslabs-beta/RediScope/raw/fix-pathing-images/public/assets/giphygraph.gif'});
export const URLGif = styled.img`
  width: 300px;
  height: 400px;
`

export const Team = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5px;
  width: 100%;
  align-items: left;

  @media (max-width: 1030px) {
    align-items: center;
    margin-bottom: 15px;
  }
`
export const Socials = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  align-items: center;
  list-style: none;
  padding: 0px;
=======

`

export const Names = styled.h3`
  display: flex;
  align-items: center;
  justify-content: center;
 
`
export const ContributorsDiv = styled.div`
  display: inline-grid;
  justify-items: start;
  grid-template-columns: repeat(5, 1fr);
  width: 1000px;

  @media (max-width: 1030px) {
    grid-template-rows: auto;
  }
`
export const TeamsDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1000px) {
    display: grid;
  }
`

export const WriteUp = styled.h5`
  display: inline-block;
  white-space:normal;
  word-wrap:break-word;
  overflow-wrap: break-word;
  font-size: 1.7vw;
  padding: 5px;

  @media (max-width: 650px) {
    font-size: 11px;
  }
`
// box-sizing: border-box;
//  <img src={ch} alt="Chihiro Developer" />

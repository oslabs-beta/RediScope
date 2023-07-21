import styled, { createGlobalStyle, StyledFunction } from 'styled-components'

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
  
}

svg {
  .eyePic {

  }
}

body {
  font-family: 'Lato', sans-serif;
  font-size: 20px;
  background-color: #072227;
  color: #D8EEEE;
  max-width: 100%

  @media screen and (min-width: 600px){
    width: 80%;
    margin: 10%;
    padding: 0;
  }
}

a {
  text-decoration: none;
  color: #D8EEEE;
}

h2 {
  font-family: Merriweather, serif;
  font-size: 4vw;
  font-weight: 300;

  @media only screen and (max-width 650px){
    font-size: 7vw;
  }
}

`
export const FullscreenContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-content: center;
  justify-content: center;
`
export const ButtonStyle = styled.button`
  font-size: 20px;
  height: 42px;
  padding: 10px;
  width: 100%;
  margin: 20px 0px;

  display: inline-block;
  height: auto;
  white-space: normal;
  word-wrap: break-word;

  background: transparent;
  border-radius: 8px;
  border: 1px solid #aefeff;
  transition: 1s ease-in-out;
  color: #fff;
  cursor: pointer;

  @media only screen and (max-width: 600px) {
    font-size: 16px;
  }

  &:hover {
    filter: brightness(0.9);
    background-color: #35858b;
    transition: 1s ease-in-out;
    stroke-dashoffset: -480;
    border-color: #ffdd87;
    color: #d8eeee;
  }

  &:active {
    filter: brightness(0.7);
  }

  a:link {
    text-decoration: none;
    color: #d8eeee;
    display: block;
  }
`
export const clickLink = styled.link`
  a:link {
    text-decoration: none;
    color: #d8eeee;
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
  font-family: 'Merriweather, serif;
  font-weight: 800;
`
export const MainLogo = styled.img`
  width: 61%;
  margin-bottom: 10px;
`
export const UpperLogo = styled.img`
  @media (max-width: 600) {
    width: 100%;
    aspect-ratio: initial;
    height: 10em;
  }

  align-self: center;
  justify-self: center;
  height: 100%;
  padding-bottom: 10px;
  margin-left: 1.5em;
  aspect-ratio: initial;
`
export const LoginLogo = styled.img`
  width: 55%;
  margin-bottom: 10px;
`
export const DashboardContainer = styled.div`
  display: flex;
  width: 100%
  flex-direction: row;
  justify-content: center;
  border: none;
  margin-top: 5em;

  @media (max-width:630px){
   flex-wrap: wrap;
  }
`
export const MainContainer = styled.div`
  margin-top: 7%;
  margin-left: 10%;
  margin-right: 10%;
  margin-bottom: 5%;

  @media (max-width: 1500px) {
    margin: 2em;
    margin-top: 12%;
  }

  @media (max-width: 1200px) {
    margin: 0.6em;
    margin-top: 14%;
  }
`
export const URLSelector = styled.div`
  justify-content: center;
  padding: 25px;
  background-color: #08282e;
  width: 20%;
  min-width: 270px;
  margin: 25px;

  @media (max-width: 630px) {
    min-width: 170px;
    width: 100%;
    padding-top: 0;
    margin-top: 0;
  }
`
export const GraphContainer = styled.div`
  width: 80%;
  margin: 18px;
  justify-content: center;
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(min(100vh/3.4, max(440px, 95vh/2)), 43vh)
  );
  grid-auto-rows: min-content;
`
export const GraphDiv = styled.div`
  aspect-ratio: 1;
  display: flex;
  padding: 0.5em;
  margin: 0.4em;
  border: 0.1em solid;
  border-color: #4fbdba;
  border-radius: 6px;
`
export const Inner = styled.div`
  width: 100%;
  height: 100%;
  padding: 12px 5px 12px 12px;
`
export const ChartWrapper = styled.section`
  text-align: center;
  color: white;
  width: 100%;
  height: 100%;
`
export const CenteredContainer = styled.div`
  padding: 5px;
  width: 30%;
  gap: 20%;
  justify-self: center;
  align-self: center;
  text-align: center;

  @media only screen and (max-width: 600px) {
    width: 80%;
  }
`
export const Nav = styled.li`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  display: inline;
  margin-right: 3rem;
  z-index:1;

  a {
    @media (max-width: 670px) {
      font-size: 16px !important;
      padding: 0px;

      margin: 0px;
      height: 3em;
      display: flex;
      align-items: center;

    }

    color: #d8eeee;
    font-size: 25px;
    display: block;
    padding: 8px;
    margin-top: 10px;
    border-radius: 5em;
    padding-bottom: 0;
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
  font: 1em;
  height: 4em;
  width: 100%;
  top: 0;
  left: 0;
  padding-left: 2em;
  background-color: #aefeff;
  background-image: linear-gradient(
    15deg,
    #4fbdba 26%,
    #35858b 42%,
    #05161a 80%
  );
  background-size: cover;
  background-repeat: no-repeat;

  @media (max-width: 670px) {
    font-size: 16px !important;
    padding: 0px;
    padding-left: 0px;
    margin: 0px;
    height: 3em;
    display: flex;
    z-index: 1;
  }
`
export const Elements = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 0.7em;
  padding-right: 1.5em;
  justify-content: flex-start;
  align-items: center;

  @media (max-width: 670px) {
    display: inline-block;
    font-size: 0.5rem !important;
    padding: 0px !important;
    padding-left: 0px !important;
    margin: 0px;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-content: center;
    justify-content: center;
  }
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
  margin: 7px;
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
  margin: 0px 10px 30px 0px;

  display: inline-block;
  height: auto;
  white-space: normal;
  word-wrap: break-word;

  background: rgb(255, 99, 132, 0.5);
  border-radius: 8px;
  border: 2px solid rgb(255, 99, 132);
  transition: 1s ease-in-out;
  color: #dadada;
  font-size: 16px;
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

  display: inline-block;
  height: auto;
  white-space: normal;
  word-wrap: break-word;

  background: rgb(79, 189, 186, 0.4);
  border-radius: 8px;
  border: 2px solid rgb(79, 189, 186);
  transition: 1s ease-in-out;
  color: white;
  font-size: 16px;
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

  @media (max-width: 400px) {
    size: 3;
  }
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

export const URLForm = styled.div`
  input {
    border: none;
    border-bottom: 1px solid #35858b;
    background-color: transparent;
    color: white;
    width: 100%;
    outline: none;
  }

  label {
    align-self: start;
  }

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const RedisForms = styled.div`
  display: flex;
  padding-top: 5px;
  flex-direction: column;
  justify-content: space-between;
`
export const SelectedURL = styled.p`
  word-wrap: break-word;
  overflow-wrap: break-word;
`
export const CenterStyle = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px 10px;
  text-align: center;
  
  @media screen and (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    padding: 0px;
  }
`
export const Feature = styled.div`
  direction: rows;
  justify-content: space-between;

  @media screen and (max-width: 600px){
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
    padding: 0;
    margin: 0;

  }
`
export const Feature2 = styled.div`
  display: inline-block;
  flex-direction: column;
  width: 100%;
 
  @media screen and (max-width: 1000px) {

    text-align: left;
    font-size: 20px;
  }
  
`
export const Spacer = styled.div`
  height: 100px;
  width: 100%;
`
export const BorderStyle = styled.div`
  padding: 4em 6em;
  margin-bottom: 10px;
  margin-top: 10px;
  border: 0.1em solid;
  border-color: #4fbdba;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  white-space: nowrap;

  @media (max-width: 1000px) {
    padding: 2em 3em;
  }


  @media (max-width: 500px) {
    padding: 2em 1em;
    flex-direction: column;
    align-items: center;
  }
`
export const H2Features = styled.h2`
display: inline-block;
margin-top: 0.5em;
white-space: normal;
word-wrap: break-word;
overflow-wrap: break-word;
font-size:calc(16px + 2.5vw);
align-self: center;
@media (max-width: 1000px) {
  font-size: 45px;
}

@media screen and (max-width: 650px){
  font-size: 35px;
  align-self: center !important;
`
export const H2Title = styled.h2`
display: inline-block;
margin-top: 0.8em;
white-space: normal;
word-wrap: break-word;
overflow-wrap: break-word;
font-size:calc(10px + 1.7vw);
align-self: center;

@media (max-width: 1000px) {
  font-size: 30px;
}

@media screen and (max-width: 650px){
  font-size: 22px;
  align-self: center !important;
`
export const URLStorageTitle = styled.h2`
  justify-content: top;
  display: inline-block;
  white-space: normal;
  word-wrap: break-word;
  overflow-wrap: break-word;
  font-size: 2.7vw;

  @media (max-width: 650px) {
    font-size: 24px;
  }
`
export const HoldText = styled.div`
  display: flex;
  flex-direction: column;
  float: right;
  align-self: center;
  justify-self: center;
  text-align: left;

  @media screen and (max-width: 650px){
    text-align: center;
  }
`

export const H5Title = styled.h5`
  display: inline-block;
  margin-top: 0.8em;
  white-space: normal;
  word-wrap: break-word;
  overflow-wrap: break-word;
  font-size:calc(10px + 1.3vw);
  align-self: center;

  @media (max-width: 1000px) {
    font-size: 25px;
  }
  @media (max-width: 650px) {
    font-size: 22px;
  }
  @media (max-width: 650px) {
    font-size: 18px;
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
export const Image = styled.img`
  width: 200px;
  height: 200px;
  align-items: center;
`
export const Gif = styled.img`
  aspect-ratio: initial;
  width: 75%;
  @media screen and (max-width: 750px) {
    width: 310px;
    height: 220px;
  }
`
export const URLGif = styled.img`
  aspect-ratio: initial;
  height: 550px;
  maxWidth: 100%;
  border: 0.05em solid;
  border-color: #4fbdba;
  border-radius: 8px;
  margin-right: 2.5em;
  padding-bottom: 0.5em;
  
  @media screen and (max-width: 1000px) {
    aspect-ratio: initial;
    height: 350px;
    margin-top: 2em;
    padding-right: 0em;
    margin-right: 0em;
  }

  @media screen and (max-width: 500px) {
    aspect-ratio: initial;
    height: 350px;
    margin-top: 1em;
    padding-right: 0em;
    margin-right: 0em;
  }
`
export const Team = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5px;
  width: 100%;
  height: 100%;
  align-content: space-between;
  align-items: center;
  justify-content: space-between;
  justify-items: center;

  @media (max-width: 1030px) {
    align-items: center;
    margin-bottom: 15px;
  }
`
export const Socials = styled.ul`
  display: inline-block;
  flex-direction: row;
  align-items: row;
  justify-content: space-around;
  justify-items: space-between;
  list-style: none;
  padding: 0px;
`
export const Names = styled.h3`
  display: flex;
  align-items: center;
  justify-self: end;
  padding-top: 10px;
  text-align: center;
`
export const ContributorsDiv = styled.div`
  display: inline-grid;
  justify-items: start;
  grid-template-columns: repeat(5, 1fr);
  width: 100vw;

  @media (max-width: 1030px) {
    grid-template-rows: auto;
  }
`
export const TeamsDiv = styled.div`
  display: flex;
  align-content:
  align-items: center;
  justify-content: space-between;
  justify-items: space-between;
  
  @media (max-width: 1000px) {
    display: grid;
  }
`
export const WriteUp = styled.h5`
  display: inline-block;
  white-space: normal;
  word-wrap: normal;
  font-size: 25px;
  align-self: center;
  @media (max-width: 1000px) {
    font-size: 22px;
  }
  @media (max-width: 700px) {
    font-size: 18px;
  }
  @media (max-width: 500px) {
    font-size: 16px;
  }
`
export const FeatureOne = styled.div`
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 1000px){
    flex-direction: column-reverse;
  }
`
export const ConnectionDisplay = styled.div`
  display: flex;
  justify-items: space-between;
  justify-content: space-between;
`
export const EyeIcon = styled.div`
  float: right;
  padding-left: 115px;
`
export const BottomBorder = styled.div`
  padding-bottom: 5em;
  border-bottom: 1px solid;
  border-bottom-color: #4FBDBA;
  margin-left: -100vw;
  margin-right: -7.2vw;
  margin-bottom: 5em;

  @media only screen and (max-width: 650px){
    margin-left: 0;
    margin-right: 0;
    width: 100%;
  }
`

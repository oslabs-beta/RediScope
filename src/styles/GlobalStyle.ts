import styled, { createGlobalStyle, StyledFunction } from 'styled-components'
import cs from '../../public/assets/chihiroheadshot.png'
import ce from '../../public/assets/coralheadshot.png'
import graphGif from '../../public/assets/giphygraph.gif'

interface Props {
  src: any
  width: string
  height: string
}

export const GlobalStyle = createGlobalStyle`

* {
  margin-top: 0px;
  top: 50%
  padding: 10px;
}

#root{
  margin: 10%;
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

export const DashboardContainer = styled.div`
  display: flex;
  width: 80vw;
  flex-direction: row;
  border: 0.2px outset #24383b;
`
export const URLSelector = styled.div`
  padding: 25px;
  background-color: #08282e;
  width: 30%;
`
export const GraphContainer = styled.div`
  width: 100%;
  display: grid;
  justify-content: space-between;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: minmax(20em, auto);
  box-sizing: border-box;
`

export const GraphDiv = styled.div`
  padding: 1em;
  margin: 10px;
  border: 0.1em solid;
  border-color: #4fbdba;
`

export const Inner = styled.div`
  display: flex;
`

export const ChartWrapper = styled.section`
  text-align: center;
  color: white;
`

export const CenteredContainer = styled.div`
  margin: auto;
  padding: 5px;
  top: 50%
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
    font: 14px;
    display: block;
    padding: 8px;
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
  padding-top: 1.25em;
  padding-right: 5em;
  justify-content: flex-start;
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
  inline-size: 200px;
`
export const Center = styled.div`
  display: flex;
  justify-content: center;
`

export const Border = styled.div`
  padding: 5em;
  margin-bottom: 10px;
  border: 0.1em solid;
  border-color: #4fbdba;
  width: 100%;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  white-space: nowrap;
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
  background-image: url(${cs});
  width: 200px;
  height: 200px;
  align-items: center;
`

export const Gif = styled.img`
  background-image: url(${graphGif});
  width: 450px;
  height: 400px;
`

export const URLGif = styled.img`
  background-image: url(${graphGif});
  width: 300px;
  height: 400px;
`

export const Team = styled.div`
  display: inline-block;
  margin: 10px;
`

export const Names = styled.h3`
  justify-content: center;
  display: flex;
  align-items: center;
`
export const ContributorsDiv = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: wrap;
`

//  <img src={ch} alt="Chihiro Developer" />

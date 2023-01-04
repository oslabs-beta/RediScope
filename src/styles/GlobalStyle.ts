import styled, { createGlobalStyle } from 'styled-components'




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
  font-family: Arial, Helvetica, sans-serif;
  font-size: 16px;
  background-color: #072227;
  color: #D8EEEE;

}

a:link {
  text-decoration: none;
}

`
export const ButtonStyle = styled.button`
  height: 42px;
  padding: 10px;
  width: 100%;
  display: block;
  margin: 10px 0;

  background: transparent;
  border-radius: 8px;
  border: 1px solid #AEFEFF;
  transition: 1s ease-in-out;

  color: #FFF;
  font-size: 16px;
  font-weight: bold;

  cursor: pointer;

  &:hover {
    filter: brightness(0.9);
    background-color: #35858B;
    transition: 1s ease-in-out;
    stroke-dashoffset: -480;
    border-color: #FFDD87;
  }

  &:active {
    filter: brightness(0.7);
  }

  a:link {
    text-decoration: none;
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
  box-shadow: 1px 4px 10px #AEFEFF;
  background-image: linear-gradient(#072227, #35858B);
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
`;

export const DashboardContainer = styled.div`
  display: flex;
  flex-direction: row;
  border: 0.2px outset #24383B;
`
export const URLSelector = styled.div`
  padding: 25px;
  background-color: #08282E;
`
export const GraphContainer = styled.div`
  width: 100%;
  display: grid;
`

export const GraphDiv = styled.div`
  padding: 5em;
  margin-bottom: 10px;
  border: 0.1em solid;
  border-color: #4FBDBA;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const Inner = styled.div`
  display: flex;
  justify-content: center;
`

export const ChartWrapper = styled.section`
  text-align: center;
  color: white;
`;

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
    color: #D8EEEE;
    font: 14px;
    display: block;
    padding: 8px;
  }

  a:hover {
    cursor: pointer;
    filter: brightness(0.9);
    background-color: #35858B;
    transition: 1s ease-in-out;
    stroke-dashoffset: -480;
    border-color: #FFDD87;
  }
`
export const NavBar = styled.header`
  display: flex;
  justify-content: space-between;
  background-color: #05161A;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  padding-left: 3em;
`
export const Elements = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 1.25em;
  padding-right: 5em;
  justify-content: flex-start;
`

export const URLSelection = styled.select`
  background-color: #05161A;
  color: rgb(216, 238, 238, 0.5);
  font-size: 20px;
  cursor: pointer;
  border: 0.2px inset #072227;
`

export const Option = styled.option`
  padding: 10px;
  border-bottom: 1px;

  &:hover {
    filter: brightness(0.9);
    background-color: #35858B;
    transition: 1s ease-in-out;
    stroke-dashoffset: -480;
    border-color: #FFDD87;
    color: rgb(216, 238, 238);
  }
`
export const DeleteButton = styled.button`
  height: 42px;
  padding: 10px;
  width: 100%;
  display: block;
  margin: 10px 0;

  background: rgb(255, 99, 132, 0.5);
  border-radius: 8px;
  border: 2px solid rgb(255, 99, 132);
  transition: 1s ease-in-out;

  color: #08282E;
  font-size: 16px;
  font-weight: bold;

  cursor: pointer;

  &:hover {
    filter: brightness(0.9);
    background-color: #BD4F52;
    transition: 1s ease-in-out;
    stroke-dashoffset: -480;
    border-color: #FFDD87;
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
  margin: 10px 0;

  background: rgb(189, 79, 82, 0.5);
  border-radius: 8px;
  border: 1px solid #AEFEFF;
  transition: 1s ease-in-out;

  color: #35858B;
  font-size: 16px;
  font-weight: bold;

  cursor: pointer;

  &:hover {
    filter: brightness(0.9);
    background-color: #BD4F52;
    transition: 1s ease-in-out;
    stroke-dashoffset: -480;
    border-color: #FFDD87;
  }

  &:active {
    filter: brightness(0.7);
  }
`

export const UserInput = styled.input`
  border: none;
  border-bottom: 1px solid #35858B;
  background-color: transparent;
  color: rgb(216, 238, 238, 0.5);
`
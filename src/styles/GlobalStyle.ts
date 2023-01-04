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

export const Container = styled.div`
  
`


export const Wrapper = styled.div`
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

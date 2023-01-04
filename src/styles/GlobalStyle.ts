import styled, { createGlobalStyle, StyledFunction } from 'styled-components'
import ch from '../components/chihiroheadshot.png'
import ce from '../components/images/coralheadshot.png'

interface Props {
  src: any;
  width: string;
  height: string;
}


export const GlobalStyle = createGlobalStyle`
  * {
    margin-top: 0px;
    top: 50%
    padding: 10px;
  }

  #root{
    margin: 10%;
  }

  body {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;
    color: white;
    background-color: #072227;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
    gap: 25px;
  }


  button {
    margin: 6px;
    height: 42px;
    padding: 0 24px;
    
    display: flex;
    align-items: center;
    justify-content: center;
  
    background: rgb(174, 254, 255);
    border-radius: 8px;
    border: 0;
  
    color: #072227;
    font-size: 16px;
    font-weight: bold;


    cursor: pointer;

    &:hover {
      filter: brightness(0.9);
    }
  
    &:active {
      filter: brightness(0.7);
    }

    a:link {
      text-decoration: none;
      color: #072227
    }


  }
`
export const ButtonStyle = styled.button`
  height: 42px;
  padding: 0 24px;
  
  display: flex;
  align-items: center;
  justify-content: center;

  background: #8257e6;
  border-radius: 8px;
  border: 0;

  color: #FFF;
  font-size: 16px;
  font-weight: bold;

  cursor: pointer;

  &:hover {
    filter: brightness(0.9);
  }

  &:active {
    filter: brightness(0.7);
  }
`
export const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: white;
`;
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

export const Mainpage = styled.div`
  margin: auto;
  padding: 5px;
  top: 50%
  justify-content: center;
  box-sizing: content-box;
  width: 100%;
  gap: 20%;
  align-items: center;
  text-align: center;
  display: flex;


  
`







export const Center = styled.div`
  display: flex;
  justify-content: center;
`

export const Border = styled.div`
  padding: 5em;
  margin-bottom: 10px;
  border: 0.1em solid;
  border-color: #4FBDBA;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const Circle = styled.div `
display: inline-block; 
position: relative; 
width: 200px; 
height: 200px; 
overflow: hidden; 
border-radius: 50%; 
`;

export const Image = styled.img`
  background-image: url(${ch});
  width: 200px;
  height: 200px;
  `;



//  <img src={ch} alt="Chihiro Developer" />


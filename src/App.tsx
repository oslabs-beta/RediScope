import { GlobalStyle } from './styles/GlobalStyle'

import { Greetings } from './components/Greetings'
// const { ipcRenderer } = require("electron")

export function App() {
  return (
    <>
      <GlobalStyle />
      <Greetings />
    </>
  )
}

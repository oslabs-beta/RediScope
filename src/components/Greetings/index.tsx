import { Button } from '../Button'
import { Container } from './styles'
import { LineGraph, LineGraph2 } from '../Charts/lineGraph'

export function Greetings() {
  function handleSayHello() {
    window.Main.sendMessage('Hello World')
    console.log('Message sent! Check main process log in terminal.')
  }

  return (
    <Container>
      <h1>Welcome to RediScope</h1>
      <div>
        <LineGraph />
      </div>
      <div>
        <LineGraph2 />
      </div>
      <Button onClick={handleSayHello}>Send message to main process</Button>
    </Container>
  )
}

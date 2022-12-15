import { Button } from '../Button'
import { Container } from './styles'
import { LineGraph, LineGraph2 } from '../Charts/LineGraph'
import React, { useState, useContext, useEffect } from 'react'

export function Greetings() {
  function handleSayHello() {
    window.Main.sendMessage('Hello World')
    console.log('Message sent! Check main process log in terminal.')
  }

  const [polls, setPolls] = useState([])

  useEffect(() => {
    try {
      const fetchPolls = async () => {
        let response = await fetch(`http://localhost:4000/api/flasks`)
        let data = await response.json()

        setPolls(data.poll)
      }
      fetchPolls()
    } catch (err) {
      console.log(err)
    }
  }, [])

  async function testFetch() {
    let res = await fetch('http://localhost:4000/api/flasks')
    let data = await res.json()
    console.log('function testFetch data', data)
  }

  // let res = await fetch('http://localhost:4000/api/flasks')
  // let data = await res.json()
  // console.log('function testFetch data', data);

  return (
    <Container>
      <h1>Welcome to RediScope{JSON.stringify(polls)}</h1>
      <div>
        <LineGraph />
      </div>
      <div>
        <LineGraph2 />
      </div>
      <Button onClick={testFetch}>Send message to main process</Button>
    </Container>
  )
}

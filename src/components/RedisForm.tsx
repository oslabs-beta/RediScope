import React, { useState, useContext, useEffect } from 'react'
import axios from 'axios'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { RedisContextProvider, RedisContext } from '../context/RedisContext'

const RedisForm = props => {
  const [url, setUrl] = useState('')
  //setting context
  const { redisData, setRedisData } = useContext(RedisContext)

  const urlChangeHandler = e => {
    setUrl(e.target.value)
  }

  const submitHandler = async e => {
    try {
      e.preventDefault()
      const res = await axios.post('http://localhost:4000/api/redis', {
        url,
      })
      setRedisData(res.data)
      console.log('res.data in redis form upon submit', res.data)
      console.log('redisData in redis form upon submit', redisData)

      // const res = await fetch('http://localhost:4000/api/redis', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   mode: 'no-cors',
      //   body: JSON.stringify(
      //     'redis://default:rediscope123@redis-15161.c53.west-us.azure.cloud.redislabs.com:15161'
      //   ),
      // })
      // const data = await res.json()
      // console.log(data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        placeholder="Your Redis URL"
        onChange={urlChangeHandler}
      />
      <button type="submit">Connect</button>
    </form>
  )
}

export default RedisForm

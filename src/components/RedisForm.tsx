import React, { useContext, useState } from 'react'
import axios from 'axios'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { RedisContextProvider, RedisContext } from '../context/RedisContext'

type Props = {}
type URLState = {
  URL: string
}

function RedisForm(props: Props): JSX.Element {
  const { redisData, setRedisData } = useContext(RedisContext)
  const { localMemories, setLocalMemories } = useContext(RedisContext)
  const { localMemoriesTime, setLocalMemoryTime } = useContext(RedisContext)

  const submitHandler = async (formValue: object): Promise<any> => {
    try {
      const res = await axios.post('http://localhost:4000/api/redis', formValue)
      let timesRun = 0
      console.log(timesRun)
      const getData = async () => {
        if (timesRun < 3) {
          const response = await axios.post(
            'http://localhost:4000/api/redis',
            formValue
          )
          console.log(response.data.used_memory)
          const timeStamp = new Date()
          sessionStorage.setItem(
            `${timeStamp.toLocaleString()}`,
            `${response.data.used_memory}`
          )
          timesRun += 1
        } else {
          clearInterval(getMemory)
          const memoryDataAll = Object.entries(sessionStorage)
          const timeData = memoryDataAll.map(data => data[0])
          const memoryDataOnly = memoryDataAll.map(data => parseInt(data[1]))
          setLocalMemories(memoryDataOnly)
          setLocalMemoryTime(timeData)

          // console.log('memory data from Object.entries', memoryDataAll)
          // console.log('memory data array: ', memoryDataOnly)
          // console.log('time stamp array: ', timeData)
        }
      }
      const getMemory = setInterval(getData, 7000)

      // IF FETCH IS SUCCESSFUL, SET DATA TO CONTEXT
      if (res.status === 200) {
        setRedisData(res.data)
        console.log('res data', res)
        console.log('redisData', redisData)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const handleStart = async (formValue: object): Promise<any> => {
    try {
      // IF FETCH IS SUCCESSFUL, SET DATA TO CONTEXT
      // if (res.status === 200) {
      //   setRedisData(res.data)
      //   console.log('res data', res)
      //   console.log('redisData', redisData)
      // }
    } catch (error) {
      console.log(error)
    }
  }

  const initVal: URLState = {
    URL: '',
  }

  const validationSchema = () => {
    return Yup.object().shape({
      URL: Yup.string().required(
        'Please insert URL to connect to your Redis Cache Database'
      ),
    })
  }

  return (
    <Formik
      initialValues={initVal}
      validationSchema={validationSchema}
      onSubmit={submitHandler}
    >
      <Form>
        <div className="URL-Form">
          <label htmlFor="URL">Redis Cache URL</label>
          <Field name="URL" type="text" className="URL-form-control" />
        </div>
        <div>
          <button type="submit" className="btn">
            Submit
          </button>
        </div>
      </Form>
    </Formik>
  )
}

export default RedisForm

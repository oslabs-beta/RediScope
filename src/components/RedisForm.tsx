import React, { useContext } from 'react'
import axios from 'axios'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { RedisContext } from '../context/RedisContext'

type Props = {}
type URLState = {
  URL: string
}

function RedisForm(props: Props): JSX.Element {
  const { redisData, setRedisData } = useContext(RedisContext)
  const { usedMemory, setUsedMemory } = useContext(RedisContext)
  const { time, setTime } = useContext(RedisContext)

  const submitHandler = async (formValue: object): Promise<any> => {
    try {
      setInterval(async () => {
        const res = await axios.post(
          'http://localhost:4000/api/redis',
          formValue
        )
        setUsedMemory((prev: Array<number>) => {
          return [...prev, parseInt(res.data.used_memory)]
        })
        const date = new Date()
        const hour = date.getHours()
        const min = date.getMinutes()
        const sec = date.getSeconds()
        const timeStamp = `${min}:${sec}`
        setTime((prev: Array<string>) => {
          return [...prev, timeStamp]
        })
      }, 2000)
    } catch (error) {
      console.log(error)
    }
  }

  const initVal: URLState = {
    URL: 'redis://default:rediscope123@redis-15161.c53.west-us.azure.cloud.redislabs.com:15161',
    // URL: 'redis://default:olYVwjlh1PxPEb3Pia3od0QbpE7DAhIu@redis-13288.c83.us-east-1-2.ec2.cloud.redislabs.com:13288',
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

// redis://default:rediscope123@redis-15161.c53.west-us.azure.cloud.redislabs.com:15161
// redis://default:olYVwjlh1PxPEb3Pia3od0QbpE7DAhIu@redis-13288.c83.us-east-1-2.ec2.cloud.redislabs.com:13288

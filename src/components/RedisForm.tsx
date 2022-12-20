import React, { useContext } from 'react'
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

  const submitHandler = async (formValue: object): Promise<any> => {
    try {
      const res = await axios.post('http://localhost:4000/api/redis', formValue)
      // IF FETCH IS SUCCESSFUL, SET DATA TO CONTEXT
      if (res.status === 200) {
        setRedisData(res.data)
        console.log('res data', res)
        console.log('redisData', redisData)
      } else {
      }
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

// redis://default:rediscope123@redis-15161.c53.west-us.azure.cloud.redislabs.com:15161

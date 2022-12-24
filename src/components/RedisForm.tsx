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
  const { redisData, setRedisData } = useContext(RedisContext);
  const { usedMemory, setUsedMemory } = useContext(RedisContext);
  const { time, setTime } = useContext(RedisContext);
  const { rss, setRss } = useContext(RedisContext);
  
  // Function submitHandler grabs user's Redis URI and makes a get request to capture data with timestamps
  const submitHandler = async (formValue: object): Promise<any> => {
    try {
      setInterval(async () => {
        const res = await axios.post(
          'http://localhost:4000/api/redis',
          formValue
        )
        // Creating the Used Memory data array to be used in the lineGraph component

        setUsedMemory((prev: Array<number>) => {
          console.log('usedMemory state: ', usedMemory);
          // if prev length is equal to 10, slice the first element, if not, keep adding new memory
          return (prev.length === 3) ?
            [...prev, parseInt(res.data.used_memory)].slice(1) :
            [...prev, parseInt(res.data.used_memory)];
        })

        // Creating date object to create our own timestamps to be parsed

        const date = new Date()
        const hour = date.getHours()
        const min = date.getMinutes()
        const sec = date.getSeconds()
        const timeStamp = `${min}:${sec}`

        // Creating the timestamp array for our linegraph component
        
        setTime((prev: Array<string>) => {
          console.log('time state: ', time);
          // if prev length is rqual to 10, slice the first element, if not, keep adding new memory
          return (prev.length === 3) ?
            [...prev, timeStamp].slice(1) :
            [...prev, timeStamp];
        });
        
        // Creating the RSS (available memory) array for linegraph component

        setRss((prev: Array<number>) => {
          console.log('rss: ', rss);
          return (prev.length === 3) ?
            [...prev, parseInt(res.data.used_memory_rss)].slice(1) :
            [...prev, parseInt(res.data.used_memory_rss)];
        });
      }, 8500)
    } catch (error) {
      console.log(error)
    }
  }

  const initVal: URLState = {
    URL: 'redis://default:rediscope123@redis-15161.c53.west-us.azure.cloud.redislabs.com:15161',
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

import React, { useState } from 'react'
import PieChart from './Charts/PieChart'
import BarChart from './Charts/BarChart'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import {
  ButtonStyle,
  Wrapper,
  Title,
  ChartWrapper,
  Inner,
} from '../styles/GlobalStyle'
import * as Yup from 'yup'
import axios from 'axios'
import RedisForm from './RedisForm'

type Props = {}

type URLState = {
  URL: string | void
}

export default function Dashboard(
  props: Props,
  { URL }: URLState
): JSX.Element {
  // const state = {
  //   URL: ''
  // }
  const [inputField, setInputField] = useState('')

  const handleSubmit = async (formValue?: string): Promise<any> => {
    // const URL = formValue
    // console.log(URL)
    try {
      const res = await axios.post('http://localhost:4000/api/redis', {
        url: 'redis://default:rediscope123@redis-15161.c53.west-us.azure.cloud.redislabs.com:15161',
      })
      console.log(res.data)
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

  const validationSchema = () => {
    return Yup.object().shape({
      URL: Yup.string().required(
        'Please insert URL to connect to your Redis Cache Database'
      ),
    })
  }

  const initVal = {
    URL: '',
  }

  // return <RedisForm />
  return (
    <>
      <div>
        <h2> Welcome </h2>
        <RedisForm />
        {/* <input>Redis URI: </input> */}
        {/* <button type="submit" className="submit-btn" onClick={handleSubmit}> */}
        {/* Connect */}
        {/* </button> */}
      </div>
      <h1>Metric Dashboard</h1>

      <Wrapper>
        <Inner>
          <BarChart />
        </Inner>
      </Wrapper>
      <Wrapper>
        <Inner>
          <PieChart />
        </Inner>
      </Wrapper>
    </>
  )
}

// export default Dashboard

{
  /* <Formik
  initialValues={initVal}
  validationSchema={validationSchema}
  onSubmit={handleSubmit}
> */
}
{
  /* <Form>
    <div className="URL-Form">
      <label htmlFor="Connect-URL">Redis Cache URL</label>
      <Field
        name="Connect-URL"
        type="text"
        className="URL-form-control"
      />
    </div> */
}
{
  /* <div> */
}

{
  /* <button type="submit" className="btn">
        <span>Submit</span>
      </button>
    </div>
  </Form> */
}
{
  /* </Formik> */
}

import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { RedisContext } from '../context/RedisContext'
import { useLocation } from 'react-router-dom'
import {
  ButtonStyle,
  DeleteButton,
  Option,
  URLSelection,
  UserInput,
  URLInput,
  CollectButton,
  FormikStyle,
  RedisForms,
  SelectedURL,
  URLForm,
} from '../styles/GlobalStyle'
import { render } from 'react-dom'

type Props = {}
type URLState = {
  URL: string
}

function RedisForm(props: Props): JSX.Element {
  const { usedMemory, setUsedMemory } = useContext(RedisContext)
  const { time, setTime } = useContext(RedisContext)
  const { rss, setRss } = useContext(RedisContext)
  const { user, setUser } = useContext(RedisContext)
  const { urlId, setUrlId } = useContext(RedisContext)
  const { url, setUrl } = useContext(RedisContext)
  const { urls, setUrls } = useContext(RedisContext)
  const { setConClients } = useContext(RedisContext)
  const { setTotalComms } = useContext(RedisContext)
  const { setEvictedKeys } = useContext(RedisContext)
  const { setKeyHits } = useContext(RedisContext)
  const { setKeyMisses } = useContext(RedisContext)
  const { setCommandsPerSec } = useContext(RedisContext)
  const location = useLocation()
  const [intervalId, setIntervalId] = useState(0)
  const [intervalMS, setIntervalMS] = useState(2000)
  const [numOfTimepoints, setnumOfTimepoints] = useState(50)

  // Function submitHandler grabs user's Redis URI and makes a get request to capture data with timestamps

  useEffect(() => {
    setUser(location.state.user)
  }, [])

  const getallURL = async () => {
    try {
      const baseURLusers =
        process.env.NODE_ENV === 'production'
          ? `api/url/getUserURL/${user}/`
          : `http://localhost:4000/api/url/getUserURL/${user}/`

      if (user) {
        const res = await axios.get(baseURLusers)
        // console.log('res in getallURL returned from backend', res)
        // console.log('res.data.data in getallURL returned from backend', res.data.data)
        setUrls(res.data.data)
        // let urlObj = urls.filter(url =>
        //   url.id == e.target.value)
        // console.log('urlOBJ', urlObj)
        setUrl(res.data.data[0].url)
        setUrlId(res.data.data[0].id)
      }
    } catch (err) {
      console.log(err)
    }
   
  }

  useEffect(() => {
    // console.log('useEffect calling getallURL', urls)
    getallURL()
    
    // console.log('urls in getAllURL in useEffect', urls)
    // console.log('url in getAllURL in useEffect', url)
    // console.log('user in getAllURL in useEffect', user)
    // console.log('intervalMS', intervalMS)
  }, [user])

  // console.log('AFTER useEffect called', urls)

  // useEffect(() => {
  //   getallURL()
    
  // }, [urls])

  const deleteURL = async e => {
    e.preventDefault()
    try {
      const baseURLdelete =
        process.env.NODE_ENV === 'production'
          ? `api/URL/${urlId}/`
          : `http://localhost:4000/api/url/${urlId}/`
          // ? `api/URL/${url || urls[0]?.url}/${userId}/`
          // : `http://localhost:4000/api/url/${url || urls[0]?.url}/${user}/`
      await axios.delete(baseURLdelete)
      getallURL()
    } catch (error) {
      console.log(error)
    }
  }

  // start live data collection
  const startCollection = async (e): Promise<any> => {
    e.preventDefault()
    try {
      if (intervalId) {
        clearInterval(intervalId)
        setIntervalId(0)
        return
      }
      // MUST set all measurements to empty array after before you start up live data collection!
      setRss([])
      setUsedMemory([])
      setTime([])
      setConClients([])
      setTotalComms([])
      setEvictedKeys([])
      setKeyHits([])
      setKeyMisses([])

      const newIntervalId: any = setInterval(async () => {
        const baseURLredisurl =
          process.env.NODE_ENV === 'production'
            ? `api/redis/`
            : 'http://localhost:4000/api/redis'
        const res = await axios.post(baseURLredisurl, {
          URL: url,
        })
        // setting array values for each graph
        // used memory data grab 
        
        // console.log('res.data after fetch', res.data)
        
        setCommandsPerSec((prev: Array<number> | any) => {
          return prev.length === numOfTimepoints
            ? [...prev, parseInt(res.data.instantaneous_ops_per_sec)].slice(1)
            : [...prev, parseInt(res.data.instantaneous_ops_per_sec)]
        })

        setUsedMemory((prev: Array<number> | any) => {
          // if prev length is equal to 10, slice the first element, if not, keep adding new memory
         
          return prev.length === numOfTimepoints
            ? [...prev, parseInt(res.data.used_memory)].slice(1)
            : [...prev, parseInt(res.data.used_memory)]
        })

        // connected clients data grab
        setConClients((prev: Array<number>) => {
          return prev.length === numOfTimepoints
            ? [...prev, parseInt(res.data.connected_clients)].slice(1)
            : [...prev, parseInt(res.data.connected_clients)]
        })
        // total commands processed data grab
        setTotalComms((prev: Array<number>) => {
          return prev.length === numOfTimepoints
            ? [...prev, parseInt(res.data.total_commands_processed)].slice(1)
            : [...prev, parseInt(res.data.total_commands_processed)]
        })
        // evicted keys data grab
        setEvictedKeys((prev: Array<number>) => {
          return prev.length === numOfTimepoints
            ? [...prev, parseInt(res.data.evicted_keys)].slice(1)
            : [...prev, parseInt(res.data.evicted_keys)]
        })
        // cache hit ratio data grab
        setKeyHits((prev: Array<number>) => {
          return prev.length === numOfTimepoints
            ? [...prev, parseInt(res.data.keyspace_hits)].slice(1)
            : [...prev, parseInt(res.data.keyspace_hits)]
        })
        setKeyMisses((prev: Array<number>) => {
          return prev.length === numOfTimepoints
            ? [...prev, parseInt(res.data.keyspace_misses)].slice(1)
            : [...prev, parseInt(res.data.keyspace_misses)]
        })
        // Creating date object to create our own timestamps to be parsed

        const date = new Date()
        // const hour = date.getHours()
        const min = date.getMinutes()
        const sec = date.getSeconds()
        const timeStamp = `${min}:${sec}`

        // Creating the timestamp array for our linegraph component

        setTime((prev: Array<string>) => {
          // if prev length is rqual to 10, slice the first element, if not, keep adding new memory
          return prev.length === numOfTimepoints
            ? [...prev, timeStamp].slice(1)
            : [...prev, timeStamp]
        })

        // Creating the RSS (available memory) array for linegraph component
        setRss((prev: Array<number>) => {
          return prev.length === numOfTimepoints
            ? [...prev, parseInt(res.data.used_memory_rss)].slice(1)
            : [...prev, parseInt(res.data.used_memory_rss)]
        })
      }, intervalMS)
      setIntervalId(newIntervalId)
    } catch (error) {
      console.log(error)
    }
  }

  // // handling user url input and sending to backend
  const submitHandler = async (formValue: object | any): Promise<any> => {
    const input = { user: user, url: formValue?.URL, name: formValue?.name }

    try {
      const baseURLcreate =
        process.env.NODE_ENV === 'production'
          ? 'api/url/createURL/'
          : 'http://localhost:4000/api/url/createURL'

      const res = await axios.post(baseURLcreate, input)
      getallURL()
    } catch (error) {
      console.log(error)
    }
  }

  const initVal: URLState = {
    URL: url,
  }

  // checking user url input shape
  const validationSchema = () => {
    return Yup.object().shape({
      URL: Yup.string().required(
        'Please insert URL to connect to your Redis Cache Database'
      ),
    })
  }

  const handleDropdown = e => {
    setUrlId(e.target.value)
    let urlObj = urls.filter(url =>
      url.id == e.target.value)
    // console.log('urlOBJ', urlObj)
    setUrl(urlObj[0].url)
    // console.log('url after changing dropdown', url)
  }

  useEffect(()=> {
    // console.log('urls', urls)
    // console.log('url', url)
    // console.log('urlId', urlId)

  }, [urls, url, urlId])

  const collectionSetting = e => {
    e.preventDefault()
  }

  return (
    <RedisForms>
      <Formik
        initialValues={initVal}
        validationSchema={validationSchema}
        onSubmit={submitHandler}
      >
        <Form>
          {/* <FormikStyle> */}
          <URLForm>
            <label htmlFor="URL">URL Alias: </label>
            {'\n'}
            <Field name="name" type="text" className="URLInput" />
            {'\n'}
            <br></br>
            {"URL path:     "}
            {/* <br></br> */}
            <Field name="URL" type="text" className="URLInput" />
            {/* <button type="submit" className="btn btn-primary"> </button> */}
            <ButtonStyle type="submit" className="btn btn-primary">
              Add URL
            </ButtonStyle>
            
          </URLForm>
          {/* </FormikStyle> */}
        </Form>
      </Formik>

      {/* <Formik
        initialValues={initVal}
        validationSchema={validationSchema}
        onSubmit={submitHandler}
      >
        <Form>
          <FormikStyle>
            <div className="URL-Form">
              <label htmlFor="URL">Redis Cache URL</label> {'\n'}
              name:{' '}
              <Field name="name" type="text" className="URL-form-control" />
              <br></br>
              URL path:{' '}
              <Field name="URL" type="text" className="URL-form-control" />
              <ButtonStyle type="submit" className="btn btn-primary">
                Add URL
              </ButtonStyle>
            </div>
          </FormikStyle>
        </Form>
      </Formik> */}
      <form>
        <label htmlFor="setIntervalMS">Choose an interval ms:</label>
        <UserInput
          id="setIntervalMS"
          name="setIntervalMS"
          value={intervalMS}
          type="number"
          min="1000"
          onChange={e => setIntervalMS(+e.target.value)}
        ></UserInput>
        <label htmlFor="setnumOfTimepoints">
          Choose max number of timepoints:
        </label>
        <UserInput
          id="setnumOfTimepoints"
          name="setnumOfTimepoints"
          value={numOfTimepoints}
          type="number"
          max="500"
          onChange={e => setnumOfTimepoints(+e.target.value)}
        ></UserInput>
        <ButtonStyle
          type="submit"
          value="Submit"
          className="btn btn-primary"
          onClick={collectionSetting}
        >
          Set Settings
        </ButtonStyle>
      </form>

      <div>
        <form>
          <label htmlFor="urls">Choose a URL:</label>
          <URLSelection
            name="urls"
            id="urls"
            onChange={handleDropdown}
            style={{ width: '100%' }}
            multiple
          >
            {urls &&
              urls.map(url => {
                return (
                  <>
                    <Option key={url.id} value={url?.id}>
                      {'NAME- ' + url.name + '  __  PATH- '}
                      {url?.url}
                    </Option>
                  </>
                )
              })}
          </URLSelection>
          <DeleteButton
            type="submit"
            value="Submit"
            className="btn btn-danger"
            onClick={deleteURL}
          >
            Delete selected URL
          </DeleteButton>
          <CollectButton
            type="submit"
            className="btn btn-primary"
            onClick={startCollection}
          >
            {intervalId
              ? 'STOP LIVE DATA COLLECTION'
              : 'START LIVE DATA COLLECTION'}
          </CollectButton>
          <SelectedURL>
            <h5>Selected: </h5>
           
            Alias: <span>&nbsp;&nbsp;</span>
            {urls[0]?.name}          
            <br/>
              {url || urls[0]?.url}  

          </SelectedURL>
        </form>
      </div>
    </RedisForms>
  )
}

export default RedisForm

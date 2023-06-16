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
  EyeIcon,
  ConnectionDisplay
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
  const [privacy, setPrivacy] = useState(true);
  let [count, setCount] = useState<number>(0);
  // const { hidden, setHidden } = useState("");

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
        const hour = date.getHours()
        const min = date.getMinutes()
        const sec = date.getSeconds()
        const timeStamp = `${hour}:${min}:${sec}`

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
      console.log(error);
    }
  }

  // // handling user url input and sending to backend
  const submitHandler = async (formValue: object | any): Promise<any> => {
    const input = { user: user, url: formValue?.URL, name: formValue?.name }
    if (!input.name) {
      setCount(count+=1);
      input.name = 'Untitled Connection #' + count;
    }
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
    const validURL = 'redis://';
    return Yup.object().shape({
      URL: Yup.string()
        .required(
          'Please insert URL to connect to your Redis Cache Database'
        )
        .test(
          'valid',
          'Please enter a valid connection URL',
          (value: any) => value.includes(validURL)
        )
    })
  }

  const handleDropdown = e => {
    setUrlId(e.target.value)
    let urlObj = urls.filter(url => url.id == e.target.value)
    // console.log('urlOBJ', urlObj)
    setUrl(urlObj[0].url)
    // console.log('url after changing dropdown', url)
  }

  useEffect(() => {
    // console.log('urls', urls)
    // console.log('url', url)
    // console.log('urlId', urlId)
  }, [urls, url, urlId])

  const collectionSetting = e => {
    e.preventDefault()
  }

  const handleClickable = () => {
    (!privacy) ? setPrivacy(true) : setPrivacy(false);
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
            <label htmlFor="URL">URL path: </label>
            {/* <br></br> */}
            <Field name="URL" type="text" className="URLInput" />
            <ErrorMessage name="URL" component="div" className="alert alert-danger" />
            {/* <button type="submit" className="btn btn-primary"> </button> */}
            <ButtonStyle type="submit" className="btn-primary">
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
        <URLForm>
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
        </URLForm>
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
                      {'> ' + url.name}
                      {/* {url?.url} */}
                    </Option>
                  </>
                )
              })}
          </URLSelection>
          <CollectButton
            type="submit"
            className="btn btn-primary"
            onClick={startCollection}
          >
            {intervalId
              ? 'STOP LIVE DATA COLLECTION'
              : 'START LIVE DATA COLLECTION'}
          </CollectButton>
          <DeleteButton
            type="submit"
            value="Submit"
            className="btn btn-danger"
            onClick={deleteURL}
          >
            Delete selected URL
          </DeleteButton>
          <SelectedURL>
          <ConnectionDisplay>
              <h5>Connected to: </h5>
              { privacy ?
              <EyeIcon className="privacy" onClick={handleClickable}><svg xmlns="http://www.w3.org/2000/svg" width="1.4em" height="1.4em" fill="currentColor" className="bi bi-eye-slash" viewBox="0 0 16 16">
                <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>
                <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>
                <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>
              </svg></EyeIcon>
              :
              <EyeIcon className="privacy" onClick={handleClickable}><svg xmlns="http://www.w3.org/2000/svg" width="1.4em" height="1.4em" fill="currentColor" className="bi bi-eye-fill" viewBox="0 0 16 16">
                <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
                <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
              </svg></EyeIcon>
            }
              <br />
            </ConnectionDisplay>
            {urls[0]?.name}
            <br />
            { !privacy && urls[0]?.url ?
              url || urls[0]?.url : ""}
          </SelectedURL>
   
        </form>
      </div>
    </RedisForms>   
  )
}

export default RedisForm

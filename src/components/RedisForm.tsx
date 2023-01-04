import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { RedisContext } from '../context/RedisContext'
import { useLocation } from 'react-router-dom';
import { ButtonStyle } from '../styles/GlobalStyle'

type Props = {}
type URLState = {
  URL: string
}

function RedisForm(props: Props): JSX.Element {
  const { redisData, setRedisData } = useContext(RedisContext);
  const { usedMemory, setUsedMemory } = useContext(RedisContext);
  const { time, setTime } = useContext(RedisContext);
  const { rss, setRss } = useContext(RedisContext);
  const { user, setUser} = useContext(RedisContext);
  const { url, setUrl} = useContext(RedisContext);
  const { urls, setUrls} = useContext(RedisContext);
  const { conClients, setConClients } = useContext(RedisContext);
  const { totalComms, setTotalComms } = useContext(RedisContext);
  const { evictedKeys, setEvictedKeys } = useContext(RedisContext);
  const { keyHits, setKeyHits } = useContext(RedisContext);
  const { keyMisses, setKeyMisses } = useContext(RedisContext);
  const location = useLocation();
  const [intervalId, setIntervalId] = useState(0);
  const [intervalMS, setIntervalMS] = useState(1000);
  const [numOfTimepoints, setnumOfTimepoints] = useState(50);

  const [noShow, setnoShow] = useState(true);

  // const [check, setCheck] = useState(false);

  // const { data } = state; 
  // Function submitHandler grabs user's Redis URI and makes a get request to capture data with timestamps
  console.log('user in redisform')
  console.log('user', user)
    
  useEffect( ()=>{ 
    console.log('user in useeffect in redisform')
     setUser(location.state.user)
  },[])

  const getallURL = async()=>{
  try{
    if(user){
    // await setUser(location.state.user)
    const res = await axios.get(
  `http://localhost:4000/api/userURL/${user}`
    // `http://localhost:4000/api/userURL/a`
    )
    console.log('res.data in getallURL', res.data.data)
    setUrls(res.data.data)
    console.log('urls in getallURL', urls)
    // let {date} = urlstate
    // console.log(date)
    }
  }
  catch(err){
    console.log(err)
    } 
  }

  useEffect(()=>{
    // setUser(location.state.user)
    getallURL()
    // console.log('urls in useeffect', urls)
  },[user])

  async function deleteURL(e) {
    e.preventDefault();
    // console.log('e.target.value', e.target.value)
    // console.log('url in start collection', url)
    try {    
      const res = await axios.delete(
            `http://localhost:4000/api/URL/${url || urls[0]?.url}`
          )
       getallURL()
    } catch (error) {
      console.log(error)
    }
  }
  

//start life data collection
  const startCollection = async (e): Promise<any> => {
    e.preventDefault();
    console.log('e.target.value', e.target.value)
    console.log('url in start collection', url)
    try { 
      if (intervalId) {
        clearInterval(intervalId);
        setIntervalId(0);

        return;
      }
        //MUST set all measurements to empty array after before you start up live data collection!
        setRss([]);
        setUsedMemory([]);
        setTime([]);
        setConClients([]);
        setTotalComms([]);
        setEvictedKeys([]);
        setKeyHits([]);
        setKeyMisses([]);
      let newIntervalId: any = setInterval(async () => {
        const res = await axios.post(
          'http://localhost:4000/api/redis',
          {URL: url}
        )
          // setting array values for each graph
          // used memory data grab
        setUsedMemory((prev: Array<number> | any) => {
          console.log('usedMemory state: ', usedMemory);
          // if prev length is equal to 10, slice the first element, if not, keep adding new memory
          return (prev.length === numOfTimepoints) ?
            [...prev, parseInt(res.data.used_memory)].slice(1) :
            [...prev, parseInt(res.data.used_memory)];
        })
          // connected clients data grab
          setConClients((prev:Array<number>)=> {
            return (prev.length === numOfTimepoints) ? 
            [...prev, parseInt(res.data.conClients)].slice(1) :
            [...prev, parseInt(res.data.conClients)];
          })
          // total commands processed data grab
          setTotalComms((prev:Array<number>) => {
            return (prev.length === numOfTimepoints) ? 
            [...prev, parseInt(res.data.totalComms)].slice(1) :
            [...prev, parseInt(res.data.totalComms)];
          })
          // evicted keys data grab
          setEvictedKeys((prev:Array<number>) => {
            return (prev.length === numOfTimepoints) ? 
            [...prev, parseInt(res.data.evictedKeys)].slice(1) :
            [...prev, parseInt(res.data.evictedKeys)];
          }) 
          // cache hit ratio data grab
          setKeyHits((prev:Array<number>) => {
            return (prev.length === numOfTimepoints) ? 
            [...prev, parseInt(res.data.keyspace_hits)].slice(1) :
            [...prev, parseInt(res.data.keyspace_hits)];
          })
          setKeyMisses((prev:Array<number>) => {
            return (prev.length === numOfTimepoints) ? 
            [...prev, parseInt(res.data.keyspace_misses)].slice(1) :
            [...prev, parseInt(res.data.keyspace_misses)];
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
          return (prev.length === numOfTimepoints) ?
            [...prev, timeStamp].slice(1) :
            [...prev, timeStamp];
        });
        
        // Creating the RSS (available memory) array for linegraph component

        setRss((prev: Array<number>) => {
          console.log('rss: ', rss);
          return (prev.length === numOfTimepoints) ?
            [...prev, parseInt(res.data.used_memory_rss)].slice(1) :
            [...prev, parseInt(res.data.used_memory_rss)];
        });
      }, intervalMS)
      setIntervalId(newIntervalId);
    
    } catch (error) {
      console.log(error)
    }
  }

  // // handling user url input and sending to backend
  const submitHandler = async (formValue: object|any): Promise<any> => {
    let input = {"user": user, "url":formValue?.URL, "name": formValue?.name};
    console.log('input', input)

    try {    
      const res = await axios.post(
            'http://localhost:4000/api/createURL',
            input
          )
          console.log('formValue', formValue)

       getallURL()
    } catch (error) {
      console.log(error)
    }
  }

  const initVal: URLState = {
    URL: url
  }

 // checking user url input shape 
  const validationSchema = () => {
    return Yup.object().shape({
      URL: Yup.string().required(
        'Please insert URL to connect to your Redis Cache Database'
      ),
    })
  }
    // console.log('urls', urls)

    const handleDropdown = (e) =>{
      setUrl(e.target.value)
      console.log('url after changing dropdown', url)
    }

   const collectionSetting = (e) => {
    e.preventDefault();
    // console.log('e.target.value', e.target.value)
    // console.log('intervalMS', intervalMS)
   }

   // 
   const handleClick= () => {
    setnoShow(false);
   }
   // child components that hold each url that a user may have
   // each child component should be a button that will select the url to collect data from


  return (
    <>
      <Formik
        initialValues={initVal}
        validationSchema={validationSchema}
        onSubmit={submitHandler}
      >
        <Form>
          <div className="URL-Form">
            <ButtonStyle onClick={handleClick}> Connect To A New URL </ButtonStyle>
              <label htmlFor="URL">Redis Cache URL</label> {"\n"}
              name: <Field name="name" type="text" className="URL-form-control" />{"\n"}
              URL path: <Field name="URL" type="text" className="URL-form-control" />
              <ButtonStyle type="submit" className="btn btn-primary">Add URL</ButtonStyle>
          </div>
        </Form>
      </Formik>
      <form>
        <label htmlFor="setIntervalMS">Choose an interval ms:</label>
        <input id="setIntervalMS" name="setIntervalMS" value={intervalMS} type="number" min="1000" onChange={e=> setIntervalMS(+e.target.value)}></input>
        <label htmlFor="setnumOfTimepoints">Choose max number of timepoints:</label>
        <input id="setnumOfTimepoints" name="setnumOfTimepoints" value={numOfTimepoints} type="number" max="500" onChange={e=> setnumOfTimepoints(+e.target.value)}></input>
        <ButtonStyle type="submit" value="Submit" className="btn btn-primary" onClick={collectionSetting}>Set Settings</ButtonStyle>
      </form>

      <div>
        <form>
        <label htmlFor="urls">Choose a URL:</label>
          <select name="urls" id="urls" onChange={handleDropdown} style={{width: '50%'}}>
            {urls.map(url => {
              return (
                <>
              <option key={url.id} value={url?.url}>{"NAME- "+url.name+"  __  PATH- "}{url?.url}</option>
              </>
              )
            })}
          </select>
          <button type="submit" value="Submit" className="btn btn-danger" onClick={deleteURL}>Delete selected URL</button>
          <div>Selected: { url || urls[0]?.url }</div>          
          <ButtonStyle type="submit" className="btn btn-primary" onClick={startCollection}>{intervalId ? "STOP LIVE DATA COLLECTION" : "START LIVE DATA COLLECTION"}</ButtonStyle>

        </form>
      </div>
      </>
  )
}

export default RedisForm

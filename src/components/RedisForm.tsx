import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { RedisContext } from '../context/RedisContext'
import { useLocation } from 'react-router-dom';

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
  const [urlstate, seturlstate] = useState([])
  const location = useLocation();
  const [count, setCount] = useState(0);
  const [intervalId, setIntervalId] = useState(0);

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
    // let {date} = urlstate
    // console.log(date)
    }
  }
  catch(err){
    console.log(err)} 
    // console.log('res.data in useeffect redisform', res.data)
    // console.log('res.data in useeffect redisform', JSON.stringify(res.data))
    // setUrls(res.data)
    // console.log('urls in useeffect in redisform', urls)
  }
  // getallURL()

  useEffect(()=>{
    // setUser(location.state.user)
    getallURL()
    console.log('urls in useeffect', urls)
  },[user])
  

// let startInterval;
  const startCollection = async (e): Promise<any> => {
    e.preventDefault();
    console.log('e.target.value', e.target.value)
    console.log('url in start collection', url)
    // collectionStatus ? collectionStatus = false : collectionStatus = true;
    // console.log('collectionStatus', collectionStatus)
    try { 
      if (intervalId) {
        clearInterval(intervalId);
        setIntervalId(0);

        return;
      }
        //MUST set all measurements to empty array after before you start up live data collection!
        setRss([]);
        setUsedMemory([]);
        setTime([])
      let newIntervalId = setInterval(async () => {
        const res = await axios.post(
          'http://localhost:4000/api/redis',
          {URL: url}
        )
        // console.log('formValue', formValue)
        // Creating the Used Memory data array to be used in the lineGraph component
        //  await setUrl(formValue.URL)
    
 
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
      }, 2000)
      setIntervalId(newIntervalId);
    
    } catch (error) {
      console.log(error)
    }
  }
  
  //tried to make live data collection stop, but did NOT work.  feel free to erase or modify.  
  function stopCollection(){
    console.log('stop collection');
    clearInterval(startInterval);
      // collectionStatus = false;
  }

  //
  const submitHandler = async (formValue: object): Promise<any> => {
    let input = {"user": user, "url":formValue.URL, "name": formValue.name};
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

  const validationSchema = () => {
    return Yup.object().shape({
      URL: Yup.string().required(
        'Please insert URL to connect to your Redis Cache Database'
      ),
    })
  }
    console.log('urls', urls)

    const handleDropdown = (e) =>{
      setUrl(e.target.value)
      console.log('url after changing dropdown', url)
    }

    // const selectStyle = {
    //   max-width: 40px, // note the capital 'W' here
    //   msTransition: 'all' // 'ms' is the only lowercase vendor prefix
    // };

  return (

    <>
    {/* <h5>{user+" url: "+url+" .  urls:"+ JSON.stringify(urls)}</h5> */}
    
    <Formik
      initialValues={initVal}
      validationSchema={validationSchema}
      onSubmit={submitHandler}
    >
      <Form>
        <div className="URL-Form">
          <label htmlFor="URL">Redis Cache URL</label>{"\n"}
           name: <Field name="name" type="text" className="URL-form-control" />{"\n"}
          URL path: <Field name="URL" type="text" className="URL-form-control" />
        </div>
        <div>
          <button type="submit" className="btn btn-primary mt-4">
            Add URL:
          </button>
        </div>
      </Form>
    </Formik>
 
    <form>
    <label htmlFor="urls">Choose a URL:</label>
      <select name="urls" id="urls" onChange={handleDropdown} style={{width: '50%'}}>
        {urls.map(url => {
          return (
            <>
          {/* <h6>{url?.name || ""}</h6> */}
          <option key={url.id} value={url?.url}>{"name: "+url.name+"  ---  path: "}{url?.url}</option>
          </>
          )
        })}
      </select>
      <h6>Selected: { url || urls[0]?.url }</h6>
      <button type="submit" value="Submit" onClick={startCollection}>{intervalId ? "Stop counting" : "Start counting"}</button>
    </form>

    <button type="submit" onClick={()=>stopCollection()}className="btn btn btn-primary mt-4">stop</button>
    </>
  )
}

export default RedisForm

// redis://default:rediscope123@redis-15161.c53.west-us.azure.cloud.redislabs.com:15161

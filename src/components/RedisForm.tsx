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
  const [check, setCheck] = useState(false);

  // const { data } = state; 
  // Function submitHandler grabs user's Redis URI and makes a get request to capture data with timestamps
  console.log('user in redisform')
  console.log('user', user)

//   useEffect(()=>{
//     console.log('user in useeffect in redisform')
//      setUser(location.state.user)
//     const fetchFlasks = async () => {
//         let response = await fetch(`http://localhost:4000/api/userURL/${user}`)
//     let data = await response.json()
//     setUrls(data.data)
//     // console.log(data)
    
//     // console.log('data.data.flasks', data.data.flasks, 'id', id)
//     // // console.log('data.data.flasks[id]', data.data.flasks[id])
//     // setFlasks(data.data.flasks)
//     // setCellBank(data.data.flasks.cell_bank)
//     // setod600(data.data.flasks.od600)
    
//     // console.log('data.data.flasks', data.data.flasks)
//     }
//     fetchFlasks()
//     .catch(console.err)
// },[])


    
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
  
  // useEffect( ()=>{ 
  //   // console.log('user in useeffect in redisform')
  //   //  setUser(location.state.user)

  //    const getallURL = async()=>{
  //     try{
  //       const res = await axios.get(
  //     `http://localhost:4000/api/userURL/${user}`
  //       // `http://localhost:4000/api/userURL/a`
  //       )
  //       console.log('res in useEffect', res)
  //       // return res
  //       // console.log('stringify res', JSON.stringify(res))
  //       // seturlstate(res.data.data)
  //       // console.log(urlstate)
  //       // console.log(res.data.data)
  //       // seturlstate(res.data.data)
  //       // console.log(urlstate)
  //     }
  //     catch(err){
  //       console.log(err)} 
  //       // console.log('res.data in useeffect redisform', res.data)
  //       // console.log('res.data in useeffect redisform', JSON.stringify(res.data))
  //       // setUrls(res.data)
  //       // console.log('urls in useeffect in redisform', urls)
  //     }
      
  //    if(user){
  //     let data = getallURL()
  //     setUrls(data)
  //     // .catch(console.error)
  //     // console.log('res.data in useeffect in redisform', url)
  //   } 
  // },[])

let startInterval;
  const startCollection = async (e): Promise<any> => {
    e.preventDefault();
    console.log('e.target.value', e.target.value)
    console.log('url in start collection', url)
    // collectionStatus ? collectionStatus = false : collectionStatus = true;
    // console.log('collectionStatus', collectionStatus)
    try { 
      console.log('check', check)
    if(!check){    
      // setCheck(prevCheck => !prevCheck);
      startInterval = setInterval(async () => {
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
    } else if (check) {
      console.log('check in else statement to clear ', check)
      return () => clearInterval(startInterval);
      // collectionStatus = false;
    }
    setCheck(prevCheck => !prevCheck);
    } catch (error) {
      console.log(error)
    }
  }
  
  function stopCollection(){
    console.log('stop collection');
    clearInterval(startInterval);
      // collectionStatus = false;
  }

  const submitHandler = async (formValue: object): Promise<any> => {
    let input = {"user": user, "url":formValue.URL};
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
    <h5>{user+" url: "+url+" .  urls:"+ JSON.stringify(urls)}</h5>
    <form>
    <label for="urls">Choose a url:</label>
      <select name="urls" id="urls" onChange={handleDropdown} style={{width: '30%'}}>
        {urls.map(url => {
          return (<option key={url.id} value={url.url}>{url.url}</option>)
        })}
      </select>
      <h6>Selected: { url || urls[0]?.url }</h6>
      <input type="submit" value="Submit" onClick={startCollection}/>
    </form>
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
          <button type="submit" className="btn btn-primary mt-4">
            Add URL:
          </button>
        </div>
      </Form>
    </Formik>
    <button type="submit" onClick={()=>stopCollection()}className="btn btn btn-primary mt-4">stop</button>
    </>
  )
}

export default RedisForm

// redis://default:rediscope123@redis-15161.c53.west-us.azure.cloud.redislabs.com:15161

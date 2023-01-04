import React, { useContext, useEffect, useState } from 'react';
import { RedisContext } from '../context/RedisContext';
import axios from 'axios';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

type Props = {}

type URLState = {
  URL: string
}

export default function RedisConnections(): JSX.Element{

    // const [state, setState] = useState([]);
    const { user, setUser} = useContext(RedisContext);
    const { url, setUrl } = useContext(RedisContext);
    const { urls, setUrls} = useContext(RedisContext);

    // get urls from user 
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

    return(
        <div>
            <button className='Delete' type=''></button>
            <button className='RedisConnections' type='submit'>
                
            </button>
        </div>
    )
}
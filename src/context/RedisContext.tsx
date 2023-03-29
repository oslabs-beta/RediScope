import React, { useState, createContext, FC } from 'react'

export type GlobalContent = any

export const RedisContext = createContext<GlobalContent | null>({})

export const RedisContextProvider = (props: any) => {
  const [redisData, setRedisData] = useState<any>([1, 1, 1])
  const [usedMemory, setUsedMemory] = useState<any>([])
  const [time, setTime] = useState<any>([])
  const [rss, setRss] = useState<any>([])
  const [conClients, setConClients] = useState<any>([])
  const [totalComms, setTotalComms] = useState<any>([])
  const [evictedKeys, setEvictedKeys] = useState<any>([])
  const [keyHits, setKeyHits ] = useState<any>([]);
  const [keyMisses, setKeyMisses ] = useState<any>([]);
  const [commandsPerSec, setCommandsPerSec] = useState<any>([]);
  const [user, setUser] = useState<any>("")
  const [urlId, setUrlId] = useState<any>("")
  const [url, setUrl] = useState<any>("")
  const [urls, setUrls] = useState<any>([])
  
  // const [banana, setBanana ] = useState<any>();
  return (
    <RedisContext.Provider
      value={{
        redisData,
        setRedisData,
        usedMemory,
        setUsedMemory,
        time,
        setTime,
        conClients,
        setConClients,
        totalComms,
        setTotalComms,
        evictedKeys,
        setEvictedKeys,
        keyHits, 
        setKeyHits,
        keyMisses, 
        setKeyMisses,
        rss,
        setRss,
        user, setUser,
        urlId, setUrlId,
        url, setUrl,
        urls, setUrls,
        // banana, setBanana
        commandsPerSec, setCommandsPerSec
      }}
    >
      {props?.children}
    </RedisContext.Provider>
  )
}

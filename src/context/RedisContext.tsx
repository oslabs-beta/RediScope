import React, { useState, createContext, FC } from 'react'

export type GlobalContent = any

export const RedisContext = createContext<GlobalContent | null>({})

export const RedisContextProvider = (props: any) => {
  const [redisData, setRedisData] = useState<any>([1, 1, 1])
  const [usedMemory, setUsedMemory] = useState<any>([])
  const [time, setTime] = useState<any>([])
  const [rss, setRss] = useState<any>([])
  const [conClient, setConClients] = useState<any>([])
  const [totalComms, setTotalComms] = useState<any>([])
  const [evictedKeys, setEvictedKeys] = useState<any>([])
  const [keyHits, setKeyHits ] = useState<any>([]);
  const [keyMisses, setKeyMisses ] = useState<any>([]);
  const [user, setUser] = useState<any>("")
  const [url, setUrl] = useState<any>("")
  const [urls, setUrls] = useState<any>([])
  
  return (
    <RedisContext.Provider
      value={{
        redisData,
        setRedisData,
        usedMemory,
        setUsedMemory,
        time,
        setTime,
        conClient,
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
        url, setUrl,
        urls, setUrls
      }}
    >
      {props?.children}
    </RedisContext.Provider>
  )
}

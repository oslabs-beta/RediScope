import React, { useState, createContext, FC } from 'react'

export type GlobalContent = any

export const RedisContext = createContext<GlobalContent | null>({})

export const RedisContextProvider: FC = props => {
  const [redisData, setRedisData] = useState<any>([1, 1, 1])
  const [usedMemory, setUsedMemory] = useState<any>([])
  const [time, setTime] = useState<any>([])
<<<<<<< HEAD
  const [conClient, setConClient] = useState<any>([])

=======
  const [rss, setRss] = useState<any>([])
  const [user, setUser] = useState<any>("")
  const [url, setUrl] = useState<any>("")
  const [urls, setUrls] = useState<any>([])
  
>>>>>>> dev
  return (
    <RedisContext.Provider
      value={{
        redisData,
        setRedisData,
        usedMemory,
        setUsedMemory,
        time,
        setTime,
<<<<<<< HEAD
        conClient,
        setConClient
=======
        rss,
        setRss,
        user, setUser,
        url, setUrl,
        urls, setUrls
>>>>>>> dev
      }}
    >
      {props.children}
    </RedisContext.Provider>
  )
}

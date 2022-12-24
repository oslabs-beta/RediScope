import React, { useState, createContext, FC } from 'react'

export type GlobalContent = any

export const RedisContext = createContext<GlobalContent | null>({})

export const RedisContextProvider: FC = props => {
  const [redisData, setRedisData] = useState<any>([1, 1, 1])
  const [usedMemory, setUsedMemory] = useState<any>([])
  const [time, setTime] = useState<any>([])
  const [conClient, setConClient] = useState<any>([])

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
        setConClient
      }}
    >
      {props.children}
    </RedisContext.Provider>
  )
}

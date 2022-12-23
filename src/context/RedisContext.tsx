import React, { useState, useEffect, createContext, FC } from 'react'

export type GlobalContent = any

export const RedisContext = createContext<GlobalContent | null>({})

export const RedisContextProvider: FC = props => {
  const [redisData, setRedisData] = useState<any>([1, 1, 1])
  const [localMemories, setLocalMemories] = useState<any>([])
  const [localMemoriesTime, setLocalMemoryTime] = useState<any>([])
  // const [memoryData, setMemoryData] = useState<any>([])
  // const [memoryTime, setMemoryTime] = useState<any>([])

  return (
    <RedisContext.Provider
      value={{
        redisData,
        setRedisData,
        localMemories,
        setLocalMemories,
        localMemoriesTime,
        setLocalMemoryTime,
      }}
    >
      {props.children}
    </RedisContext.Provider>
  )
}

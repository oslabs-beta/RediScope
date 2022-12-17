import React, { useState, useEffect, createContext, FC } from 'react';

export type GlobalContent = any;




export const RedisContext = createContext<GlobalContent | null>({});


export const RedisContextProvider: FC =(props) => {
    const [redisData, setRedisData] = useState<any>([1,1,1]);

    return (
        <RedisContext.Provider value={{redisData, setRedisData}}>
             {props.children}
        </RedisContext.Provider>
    )
}
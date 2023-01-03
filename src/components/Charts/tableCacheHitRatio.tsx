import React, { useState, useContext, useEffect, FC } from 'react'
import { RedisContext } from '../../context/RedisContext'

export function TableCacheHitRatio() {
  const { keyHits, setKeyHits } = useContext(RedisContext)
  const { keyMisses, setKeyMisses } = useContext(RedisContext)
  const { totalComms, setTotalComms } = useContext(RedisContext)
  const { conClients, setConClients } = useContext(RedisContext)
  const { banana, setBanana } = useContext(RedisContext);
  // const cacheHitRatio = keyHits[keyHits.length-1]/keyMisses[keyHits.length-1]

  
  const cacheHitRatio = banana/keyMisses[keyHits.length-1]
  console.log(cacheHitRatio)


  // let used_memory: number = redisData?.used_memory / 1000000 || 0
  // let used_memory_rss: number = redisData?.used_memory_rss / 1000000 || 0
  //   <>redisData?.keyspace_hits {redisData?.keyspace_hits}</>
  return (
    <div>
      <div className="list-group">
        <table className="table table-hover table-dark">
          <thead>
            <tr className="bg-primary table-warning">
              <th id="hits" className="text-center" scope="col">
                Cache Hit Ratio
              </th>
            </tr>
          </thead>

          <tbody>
            <tr key="Cache Hit Ratio">
              <td id= "hits" className="text-center">{cacheHitRatio}</td>
              
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

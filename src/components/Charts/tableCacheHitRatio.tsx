import React, { useState, useContext, useEffect, FC } from 'react'
import { RedisContext } from '../../context/RedisContext'

export function TableCacheHitRatio() {
  const { keyHits, setKeyHits } = useContext(RedisContext)
  const { keyMisses, setKeyMisses } = useContext(RedisContext)
  const { totalComms, setTotalComms } = useContext(RedisContext)
  const { conClients, setConClients } = useContext(RedisContext)
  
  // const cacheHitRatio = keyHits[keyHits.length-1]/keyMisses[keyHits.length-1]

  
  const cacheHitRatio = keyHits[keyHits.length-1]/keyMisses[keyHits.length-1] + keyHits[keyHits.length-1]

  return (
    <div>
      <div className="list-group">
        <h3>Cache Hit Ratio: {cacheHitRatio}</h3>
      </div>
    </div>
  )
}


{/* <table className="table table-hover table-dark">
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
</table> */}
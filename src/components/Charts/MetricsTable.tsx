import React, { useState, useContext, useEffect, FC } from 'react'
import { RedisContext } from '../../context/RedisContext'

export default function MetricsTable() {
  const { redisData, setRedisData } = useContext(RedisContext)
  //   console.log('redisData in table')
  //   console.log('redisData?.keyspace_hits in table', redisData?.keyspace_hits)

  let used_memory: number = redisData?.used_memory / 1000000 || 0
  let used_memory_rss: number = redisData?.used_memory_rss / 1000000 || 0
  //   <>redisData?.keyspace_hits {redisData?.keyspace_hits}</>
  return (
    <div>
      <div className="list-group">
        <table className="table table-hover table-dark">
          <thead>
            <tr className="bg-primary table-warning">
              <th className="text-center" scope="col">
                used_memory
              </th>
              <th className="text-center" scope="col">
                used_memory_rss
              </th>
              <th className="text-center" scope="col">
                total_commands_processed
              </th>
              <th className="text-center" scope="col">
                connected_clients
              </th>
              <th className="text-center" scope="col">
                mem_fragmentation_ratio
              </th>
              <th className="text-center" scope="col">
                evicted_keys
              </th>
              <th className="text-center" scope="col">
                keyspace_hits
              </th>
            </tr>
          </thead>

          <tbody>
            <tr key={redisData}>
              <td className="text-center">{used_memory}</td>
              <td className="text-center">{used_memory_rss}</td>
              <td className="text-center">
                {redisData?.total_commands_processed}
              </td>
              <td className="text-center">{redisData?.connected_clients}</td>
              <td className="text-center">
                {redisData?.mem_fragmentation_ratio}
              </td>
              <td className="text-center">{redisData?.evicted_keys}</td>
              <td className="text-center">{redisData?.keyspace_hits}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

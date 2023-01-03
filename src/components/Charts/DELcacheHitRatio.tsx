import React, { useState, useContext, useEffect } from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'react-chartjs-2'
import { RedisContext } from '../../context/RedisContext'
import { optionsType, dataType } from '../../@types/chartjsTypes'

ChartJS.register(ArcElement, Tooltip, Legend)

export function CacheHitRatio(): JSX.Element {
  const { redisData, setRedisData } = useContext(RedisContext)
  const { time, setTime } = useContext(RedisContext)
  const { keyHits, setKeyHits } = useContext(RedisContext)
  const { keyMisses, setKeyMisses } = useContext(RedisContext)
  console.log('redisData in pieChart', keyHits[keyHits.length-1]/keyMisses[keyHits.length-1])

  // assigning data to table.  default to 0 if there is no data or undefined.
  // let keyspaceHits: number = redisData?.keyspace_hits || 0
  // let keyspaceMisses: number = redisData?.keyspace_misses || 0
  // console.log('keyspaceHits, keyspaceMisses', keyspaceHits, keyspaceMisses)

  const options: object = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Cache Hit Ratio',
      },
    },
  }
  const labels: number[] = [99]
  // let length = keyHits.length
  // console.log("this is keyhitslength", keyHits[length])

  const data = {
    labels,
      datasets: [
        {
          label: 'key misses',
          data: [keyMisses],
          borderColor: 'rgb(255, 99, 132)',
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
          label: 'key hits',
          data: [keyHits],
          borderColor: 'rgb(79, 189, 186)',
          backgroundColor: 'rgba(79, 189, 186, 0.5)',
        }
      ],
    }
    

  return <Pie options={options} data={data} />

  
}

// need to fix:
// add cache hit ratio actual number to title
// make it so there are two labels: one for hits and one for misses


// datasets: [
//   {
//     label: 'Key Space Hits & Misses',
//     data: [keyHits, keyMisses],
//     backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)'],
//     borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)'],
//     borderWidth: 1,
//   },
// ],
// }
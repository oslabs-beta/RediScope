import React, { useState, useContext, useEffect } from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Bar } from 'react-chartjs-2'
import { RedisContext } from '../../context/RedisContext'
import { optionsType, dataType } from '../../@types/chartjsTypes'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export default function BarChart(): JSX.Element {
  const { redisData, setRedisData } = useContext(RedisContext)
  // console.log('redisData in BarChart', redisData)
  // console.log('redisData.used_memory in BarChart', redisData.used_memory)
  // console.log('redisData?.used_memory/1000000', redisData?.used_memory/1000000)

  // assigning data to table.  default to 0 if there is no data or undefined.
  let usedMemory: number = redisData?.used_memory / 1000000 || 0
  let usedMemoryRss: number = redisData?.used_memory_rss / 1000000 || 0

  const options: optionsType = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {  
        display: true,
        text: 'Memory',
      },
    },
  }

  const labels: Array<string> = ['Current Memory in Megabytes']

  const data: dataType = {
    labels,
    datasets: [
      {
        label: 'Used Memory MB',
        data: [redisData?.used_memory / 1000000],
        backgroundColor: 'rgba(255, 99, 132, 0.4)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
      {
        label: 'Total Available Memory MB',
        data: [usedMemoryRss],
        backgroundColor: 'rgba(53, 162, 235, 0.4)',
        borderColor: 'rgba(53, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  }

  return (
    <div>
      <Bar options={options} data={data} />
    </div>
  )
}

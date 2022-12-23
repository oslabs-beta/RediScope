import React, { useState, useContext, useEffect } from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Line } from 'react-chartjs-2'
import { RedisContext } from '../../context/RedisContext'

// import { faker } from '@types/faker'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

export const options: object = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Memory Usage Over Time (today)',
    },
  },
}

export function LineGraph() {
  const { localMemories, setLocalMemories } = useContext(RedisContext)
  const { localMemoriesTime, setLocalMemoryTime } = useContext(RedisContext)
  console.log('localmemory state: ', localMemories)
  console.log('localmemoryTime state: ', localMemoriesTime)

  const labels: number[] = localMemoriesTime
  const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: localMemories,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  }
  return <Line options={options} data={data} />
}

// export function LineGraph2() {
//   return <Line options={options} data={data2} />
// }

import React, { useContext } from 'react'
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

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

// I need to figure out how to put data types to these data: I used to have data: object, and when I did, it gave me errors inside of LineGraph components return statement below

export function MemoryUsage() {
  const { usedMemory, setUsedMemory } = useContext(RedisContext)
  const { time, setTime } = useContext(RedisContext)
  const { rss, setRss } = useContext(RedisContext)

  console.log('from linegraph', usedMemory[usedMemory.length])

  const options: object = {
    responsive: true,
    maintainAspectRation: false,
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          color: '#dadada',
        },
      },
      title: {
        display: true,
        text: 'Memory Usage: Used Memory vs RSS',
        font: {
          size: 22,
          family: "'Helvetica', 'serif'",
        },
        color: '#dadada',
      },
    },
  }
  const labels: string[] = time

  const data = {
    labels,
    datasets: [
      {
        label: 'Used Memory',
        data: usedMemory,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'RSS (Available Memory)',
        data: rss,
        borderColor: 'rgb(79, 189, 186)',
        backgroundColor: 'rgba(79, 189, 186, 0.5)',
      },
    ],
  }
  // chart.canvas.parentNode.style.height = '128px'
  return <Line options={options} data={data} />
}

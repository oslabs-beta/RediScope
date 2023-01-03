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

export function GraphCacheHitRatio() {
  const { time, setTime } = useContext(RedisContext)
  const { keyHits, setKeyHits } = useContext(RedisContext)
  const { keyMisses, setKeyMisses } = useContext(RedisContext)
  const { rss, setRss } = useContext(RedisContext);

  // console.log('from linegraph', usedMemory[usedMemory.length])

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
  const labels: string[] = time

  const data = {
    labels,
    datasets: [
      {
        label: 'Key Space Hits',
        data: keyHits,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Key Space Misses',
        data: keyMisses,
        borderColor: 'rgb(79, 189, 186)',
        backgroundColor: 'rgba(79, 189, 186, 0.5)',
      }
    ],
  }
  return <Line options={options} data={data} />
}

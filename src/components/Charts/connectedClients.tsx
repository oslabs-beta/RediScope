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


export function connectedClients() {
  const { conClients, setConClients } = useContext(RedisContext)
  const { time, setTime } = useContext(RedisContext)

 

  const options: object = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Connected Clients',
      },
    },
  }
  const labels: string[] = time

  const data = {
    labels,
    datasets: [
      {
        label: 'current connected clients',
        data: conClients,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  }
  return <Line options={options} data={data} />
}

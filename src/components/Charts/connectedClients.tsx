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

// collect and render total connected clients 
export function ConnectedClients() {
  const { conClients, setConClients } = useContext(RedisContext)
  const { time, setTime } = useContext(RedisContext)
  console.log('from connectedclients', conClients)
 

  const options: object = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          color: '#dadada'
        }
      },
      title: {
        display: true,
        text: 'Connected Clients',
        font: {
          size: 22,
          family: "'Helvetica', 'serif'"
        },
        color: '#dadada'
      },
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: false,
            color: '#dadada'
          },
        }],
      }
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

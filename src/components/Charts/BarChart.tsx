import React from 'react'
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

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

// Fetch to api/redis to grab used memory & available memory metrics
// const fetchData = async () => {
//   try {
//     await fetch('http://localhost:4000/api/redis', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(
//         'redis://default:rediscope123@redis-15161.c53.west-us.azure.cloud.redislabs.com:15161'
//       ),
//     })
//   } catch (error) {
//     console.log(error)
//   }
// }
//fetchData()

export const options = {
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

const labels = ['Current Memory in Megabytes']

export const data = {
  labels,
  datasets: [
    {
      label: 'Used Memory MB',
      data: [1.2],
      backgroundColor: 'rgba(255, 99, 132, 0.4)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1,
    },
    {
      label: 'Total Available Memory MB',
      data: [1.9],
      backgroundColor: 'rgba(53, 162, 235, 0.4)',
      borderColor: 'rgba(53, 162, 235, 1)',
      borderWidth: 1,
    },
  ],
}

export default function BarChart() {
  return <Bar options={options} data={data} />
}

import React from 'react'
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
      text: 'Memory Usage',
    },
  },
}

const labels: string[] = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
]

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [1, 5, 2, 4, 6, 2, 7, 0],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
  ],
}

export const data2 = {
  labels,
  datasets: [
    {
      label: 'Dataset 2',
      data: [7, 4, 3, 10, 2, 1, 5, 8],
      borderColor: '#32C1BA',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
  ],
}

export function LineGraph() {
  return <Line options={options} data={data} />
}

export function LineGraph2() {
  return <Line options={options} data={data2} />
}

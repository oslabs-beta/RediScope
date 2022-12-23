import React, { useEffect, useState } from 'react'
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

// console.log('session storage: ', JSON.parse(arr))

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
// I need to figure out how to put data types to these data: I used to have data: object, and when I did, it gave me errors inside of LineGraph components return statement below
// export const data = {
//   labels,
//   datasets: [
//     {
//       label: 'Dataset 1',
//       data: [7, 4, 3, 10, 2, 1, 5, 8],
//       borderColor: 'rgb(255, 99, 132)',
//       backgroundColor: 'rgba(255, 99, 132, 0.5)',
//     },
//   ],
// }

export const App = () => {
  useEffect(() => {
    const [data, setData] = useState([])
    const fetchData = async () => {
      // Grab session storage data
      // const arr = Object.keys(sessionStorage).reduce((obj, key) => {
      //   obj[key] = sessionStorage.getItem(key)
      //   return arr
      // }, [])

      const arr = Object.keys(sessionStorage)
      setData(arr)
    }

    fetchData()
  }, [])

  return (
    <div>
      <div>{data}</div>
      <Line options={options} data={data} />
    </div>
  )
}

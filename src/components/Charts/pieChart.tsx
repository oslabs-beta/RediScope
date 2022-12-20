import React, { useState, useContext, useEffect } from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'react-chartjs-2'
import { RedisContext } from '../../context/RedisContext'
import { optionsType, dataType } from '../../@types/chartjsTypes'

ChartJS.register(ArcElement, Tooltip, Legend)

export default function PieChart(): JSX.Element {
  const { redisData, setRedisData } = useContext(RedisContext)
  console.log('redisData in pieChart', redisData)

  // assigning data to table.  default to 0 if there is no data or undefined.
  let keyspaceHits: number = redisData?.keyspace_hits || 0
  let keyspaceMisses: number = redisData?.keyspace_misses || 0
  console.log('keyspaceHits, keyspaceMisses', keyspaceHits, keyspaceMisses)

  const options: optionsType = {
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

  const data: dataType = {
    labels: ['keyspace_hits', 'keyspace_misses'],
    datasets: [
      {
        label: '# of Votes',
        data: [keyspaceHits, keyspaceMisses],
        backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)'],
        borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)'],
        borderWidth: 1,
      },
    ],
  }

  return (
    <>
      {/* <h6>keyspace_hits: {keyspaceHits} keyspace_misses: {keyspaceMisses}</h6> */}
      <Pie options={options} data={data} />
    </>
  )
}

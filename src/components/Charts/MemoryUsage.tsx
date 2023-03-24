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

  // console.log('from linegraph', usedMemory)

  const options: object = {
    responsive: true,
    aspectRatio:
    1 | 1,
    // maintainAspectRation: false,
    scales: {
      y: {
          ticks: {
              // Include a dollar sign in the ticks
              callback: function (val, index, ticks) {
                return Number.parseFloat(val).toExponential(3); 
              }
          }
      }
  },
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          color: '#dadada', padding: 10
        },
      },
      title: {
        display: true,
        position: 'top' as const,
        align: 'center' as const,
        text: 'Memory Usage: Used Memory vs RSS',
        font: {
          size: 22,
          family: "'Helvetica', 'serif'",
        },
        color: '#dadada', padding: 0
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

  const legendMargin = {
    id: "legendMargin",
    beforeInit: function (chart) {
      const fitValue = chart.legend.fit;
      chart.legend.fit = function fit() {
        fitValue.bind(chart.legend)();
        return (this.height += 14);
      };
    }
  };

  // chart.canvas.parentNode.style.height = '128px'
  return <Line options={options} data={data} plugins={[legendMargin]}/>
}

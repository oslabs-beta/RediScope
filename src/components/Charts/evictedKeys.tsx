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

// collect and render total evicted keys 
export function EvictedKeys() {
  const { evictedKeys, setEvictedKeys } = useContext(RedisContext)
  const { time, setTime } = useContext(RedisContext)

  const options: object = {
    responsive: true,
    aspectRatio:
    1 | 1,
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          color: '#dadada'
        }
      },
      title: {
        display: true,
        text: 'Evicted Keys',
        font: {
          size: 22,
          family: "'Helvetica', 'serif'"
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
        label: 'current Evicted Keys',
        data: evictedKeys,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
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

  return <Line options={options} data={data} plugins={[legendMargin]}/>
}

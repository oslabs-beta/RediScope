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

// collect and render total commands processed 
export function TotalCommands() {
  const { totalComms, setTotalComms } = useContext(RedisContext)
  const { time, setTime } = useContext(RedisContext)
  // console.log('from totalcommands', time)
 

  const options: object = {
    responsive: true,
    aspectRatio:
    1 | 1,
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
          color: '#dadada'
        }
      },
      title: {
        display: true,
        text: 'Total Commands Processed',
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
        label: 'Current Total Commands Processed',
        data: totalComms,
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

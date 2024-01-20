'use client'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'

ChartJS.register(ArcElement, Tooltip, Legend)

function PizzaGrafico() {
  const data = {
    datasets: [
      {
        label: 'Poll',
        data: [3, 6, 9],
        backgroundColor: ['#69e6a6', '#0dbbfc', '#8fb6d5'],
        borderColor: ['#69e6a6', '#0dbbfc', '#8fb6d5'],
      },
    ],
  }

  const options = {}

  return <Doughnut data={data} options={options}></Doughnut>
}

export default PizzaGrafico

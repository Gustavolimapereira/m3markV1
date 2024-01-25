'use client'
import { Chart as ChartJS, ArcElement, /* Tooltip, */ Legend } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'

ChartJS.register(ArcElement, /* Tooltip, */ Legend)

function PizzaGrafico() {
  const data = {
    datasets: [
      {
        label: 'Poll',
        data: [2, 2, 2],
        backgroundColor: ['#69E6A6', '#0A2640', '#0DBBFC'],
        borderWidth: [0],
      },
    ],
  }

  const options = {
    cutout: '70%', // Define o valor para a espessura do gráfico
  }

  return <Doughnut data={data} options={options}></Doughnut>
}

export default PizzaGrafico

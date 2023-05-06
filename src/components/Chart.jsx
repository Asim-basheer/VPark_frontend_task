import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const Chart = () => {
  const data = {
    // labels: ['Active Vehicles', 'In-Active Vehicles'],
    datasets: [
      {
        data: [1.4, 2],
        backgroundColor: ['rgb(13,134,213)', 'rgb(202,228,250)'],
        borderWidth: 0,
      },
    ],
  };

  return (
    <div>
      <Pie data={data} />
    </div>
  );
};

export default Chart;

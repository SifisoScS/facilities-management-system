import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { useCharts } from '../../../hooks/useCharts';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function PerformanceChart() {
  const { performanceData, isLoading } = useCharts();

  if (isLoading) return <div>Loading chart...</div>;

  const data = {
    labels: performanceData.map(item => item.name),
    datasets: [
      {
        data: performanceData.map(item => item.value),
        backgroundColor: performanceData.map(item => item.color),
        borderColor: performanceData.map(item => item.color.replace('ce', 'b0')),
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: 'bottom' },
      tooltip: { enabled: true },
    },
  };

  return (
    <div className="shadow-xl hover:shadow-2xl transition-shadow duration-300">
      <h3 className="text-2xl font-bold mb-4">Performance Metrics</h3>
      <div style={{ height: '300px' }}>
        <Pie data={data} options={options} />
      </div>
    </div>
  );
}
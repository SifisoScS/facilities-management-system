import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip } from 'chart.js';
import { useCharts } from '../../../hooks/useCharts';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip);

export default function OperationsChart() {
  const { operationsData, isLoading } = useCharts();

  if (isLoading) return <div>Loading chart...</div>;

  const data = {
    labels: operationsData.map(item => item.name),
    datasets: [
      {
        label: 'Completion Rate (%)',
        data: operationsData.map(item => item.completion),
        backgroundColor: '#3182ce',
        borderColor: '#2b6cb0',
        borderWidth: 1,
        borderRadius: 8,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: { enabled: true },
    },
    scales: {
      x: {
        ticks: { autoSkip: false, maxRotation: 45, minRotation: 45 },
      },
      y: {
        beginAtZero: true,
        max: 100,
        title: { display: true, text: 'Completion Rate (%)' },
      },
    },
  };

  return (
    <div className="shadow-xl hover:shadow-2xl transition-shadow duration-300">
      <h3 className="text-2xl font-bold mb-4">Completion Rates by Service</h3>
      <div style={{ height: '300px' }}>
        <Bar data={data} options={options} />
      </div>
    </div>
  );
}
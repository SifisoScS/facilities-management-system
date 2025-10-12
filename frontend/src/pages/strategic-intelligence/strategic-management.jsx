import { motion } from 'framer-motion';
import { TrendingUp } from 'lucide-react';
import Link from 'next/link';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

// Custom number formatting function to avoid hydration errors
const formatNumber = (value, unit) => {
  if (unit === 'R') {
    return `R ${Math.round(value).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}`;
  }
  return `${value}${unit}`;
};

// Mock data for dashboard features
const strategicData = [
  { name: 'FM Strategic Goals Tracker', value: 92, unit: '%', description: 'AI maps maintenance to corporate objectives', change: '+5% alignment' },
  { name: 'Capital Project Forecasting', value: 500000, unit: 'R', description: 'Predictive analytics for upgrades', change: '3 projects planned' },
  { name: 'Sustainability Index', value: 85, unit: '/100', description: 'Energy efficiency and waste reduction KPIs', change: '+10 points' },
  { name: 'Budget Utilization & Forecast', value: 750000, unit: 'R', description: 'AI predicts budget overruns', change: '-5% overrun risk' },
  { name: 'Workforce Development Metrics', value: 78, unit: '%', description: 'Training progress and skill gaps', change: '+12% certified' },
];

// Mock data for charts
const barChartData = [
  { name: 'Jan', value: 80 }, { name: 'Feb', value: 85 }, { name: 'Mar', value: 90 }, { name: 'Apr', value: 92 },
];
const lineChartData = [
  { name: 'Jan', value: 700000 }, { name: 'Feb', value: 720000 }, { name: 'Mar', value: 740000 }, { name: 'Apr', value: 750000 },
];

export default function StrategicManagement() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <header className="bg-slate-900 text-white py-6 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <TrendingUp className="w-8 h-8 text-green-400" />
            <h1 className="text-3xl font-bold">Strategic Management Dashboard</h1>
          </div>
          <Link href="/" className="text-blue-300 hover:text-blue-100 transition-colors">
            Back to Home
          </Link>
        </div>
      </header>
      <main className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold text-slate-800 mb-6">Align Operations with Organizational Goals</h2>
            <p className="text-lg text-slate-600 mb-8">
              A strategic dashboard aligning facility operations with ISO 41001 standards and corporate objectives.
            </p>

            {/* Strategic Features */}
            <section className="mb-12">
              <h3 className="text-2xl font-semibold text-slate-800 mb-6">Strategic Management Features</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {strategicData.map((item, index) => (
                  <motion.div
                    key={index}
                    className="bg-white shadow-lg rounded-lg p-6 border-l-4 border-green-500"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <h4 className="text-lg font-semibold text-slate-800 mb-2">{item.name}</h4>
                    <p className="text-2xl font-bold text-slate-800">{formatNumber(item.value, item.unit)}</p>
                    <p className="text-sm text-slate-600 mb-2">{item.description}</p>
                    <p className="text-sm text-slate-500">{item.change}</p>
                    <ResponsiveContainer width="100%" height={100}>
                      <BarChart data={barChartData}>
                        <XAxis dataKey="name" />
                        <YAxis hide />
                        <Tooltip />
                        <Bar dataKey="value" fill="#10b981" />
                      </BarChart>
                    </ResponsiveContainer>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* AI Integration */}
            <section>
              <h3 className="text-2xl font-semibold text-slate-800 mb-6">AI-Powered Strategic Insights</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                  className="bg-white shadow-lg rounded-lg p-6 border-l-4 border-green-500"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <h4 className="text-lg font-semibold text-slate-800 mb-2">What-If Scenarios</h4>
                  <p className="text-sm text-slate-600">
                    Simulate scenarios like a 10% maintenance budget cut. <br />
                    <span className="italic">Example: Impact on system uptime: -3%</span>
                  </p>
                  <ResponsiveContainer width="100%" height={200}>
                    <LineChart data={lineChartData}>
                      <XAxis dataKey="name" />
                      <YAxis unit="R" />
                      <Tooltip />
                      <Line type="monotone" dataKey="value" stroke="#10b981" />
                    </LineChart>
                  </ResponsiveContainer>
                </motion.div>
                <motion.div
                  className="bg-white shadow-lg rounded-lg p-6 border-l-4 border-green-500"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <h4 className="text-lg font-semibold text-slate-800 mb-2">Natural Language Query</h4>
                  <p className="text-sm text-slate-600">
                    Ask: “What assets need replacement next quarter?” <br />
                    <span className="italic">AI Response: 5 HVAC units, estimated cost R 250 000</span>
                  </p>
                  <button
                    className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                    onClick={() => alert('Query: What assets need replacement next quarter?')}
                  >
                    Try Query
                  </button>
                </motion.div>
              </div>
            </section>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
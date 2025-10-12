import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import Link from 'next/link';
import { BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

// Custom number formatting function to ensure consistent rendering
const formatNumber = (value, unit) => {
  if (unit === 'R') {
    return `R ${Math.round(value).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}`;
  }
  return `${value}${unit}`;
};

// Mock data for KPIs
const kpiData = [
  { name: 'Operational Efficiency', value: 94.7, change: '+5.2%', target: 95, unit: '%' },
  { name: 'Cost Management', value: 2400000, change: '12% savings', target: 2800000, unit: 'R', savings: 'R 320 000' },
  { name: 'Asset Reliability', value: 96.2, change: '+2.1% uptime', target: 98, unit: '%' },
  { name: 'Team Performance', value: 87, change: '+8% improvement', target: 90, unit: '%' },
  { name: 'Sustainability Index', value: 78, change: '+15 points YoY', target: 85, unit: '/100' },
  { name: 'Customer Satisfaction', value: 92, change: '+6% satisfaction', target: 96, unit: '%', rating: '4.6/5' },
];

// Mock data for Bar Charts
const barChartData = [
  { name: 'Jan', value: 80 }, { name: 'Feb', value: 85 }, { name: 'Mar', value: 90 }, { name: 'Apr', value: 94.7 },
];

// Mock data for Pie Charts
const pieChartData = [
  { name: 'Current', value: 78 }, { name: 'Remaining', value: 22 },
];

const COLORS = ['#10b981', '#e5e7eb'];

export default function KPIDashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <header className="bg-slate-900 text-white py-6 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Award className="w-8 h-8 text-yellow-400" />
            <h1 className="text-3xl font-bold">KPI & Legacy Dashboard</h1>
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
            <h2 className="text-4xl font-bold text-slate-800 mb-6">Performance & Legacy Impact</h2>
            <p className="text-lg text-slate-600 mb-8">
              Visualize KPIs across all facility management roles to track contributions to organizational success.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {kpiData.map((kpi, index) => (
                <motion.div
                  key={index}
                  className="bg-white shadow-lg rounded-lg p-6 border-l-4 border-yellow-500"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">{kpi.name}</h3>
                  <p className="text-2xl font-bold text-slate-800">
                    {formatNumber(kpi.value, kpi.unit)}
                    {kpi.rating && ` (${kpi.rating})`}
                  </p>
                  <p className="text-sm text-slate-500">{kpi.change}</p>
                  <p className="text-sm text-slate-600">Target: {formatNumber(kpi.target, kpi.unit)}</p>
                  {kpi.savings && <p className="text-sm text-slate-600">Savings: {kpi.savings}</p>}
                  <div className="mt-4">
                    {['Sustainability Index', 'Customer Satisfaction'].includes(kpi.name) ? (
                      <ResponsiveContainer width="100%" height={150}>
                        <PieChart>
                          <Pie
                            data={[{ name: 'Current', value: kpi.value }, { name: 'Remaining', value: 100 - kpi.value }]}
                            dataKey="value"
                            nameKey="name"
                            cx="50%"
                            cy="50%"
                            outerRadius={60}
                          >
                            {pieChartData.map((_, i) => (
                              <Cell key={`cell-${i}`} fill={COLORS[i % COLORS.length]} />
                            ))}
                          </Pie>
                          <Tooltip />
                        </PieChart>
                      </ResponsiveContainer>
                    ) : (
                      <ResponsiveContainer width="100%" height={150}>
                        <BarChart data={barChartData}>
                          <XAxis dataKey="name" />
                          <YAxis unit={kpi.unit} />
                          <Tooltip />
                          <Bar dataKey="value" fill="#3b82f6" />
                        </BarChart>
                      </ResponsiveContainer>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
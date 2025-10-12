import { motion } from 'framer-motion';
import { BarChart3 } from 'lucide-react';
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
const metricsData = [
  { name: 'Real-Time Performance Analytics', value: 95, unit: '%', description: 'Asset uptime and MTTR', change: '+2% uptime' },
  { name: 'Occupancy & Space Utilization', value: 82, unit: '%', description: 'Smart sensor data for space optimization', change: '+5% efficiency' },
  { name: 'Energy & Resource Monitoring', value: 12000, unit: ' kWh', description: 'AI forecasts energy anomalies', change: '-10% waste' },
  { name: 'Health, Safety & Compliance Alerts', value: 98, unit: '%', description: 'Audit readiness tracking', change: '100% compliant' },
  { name: 'Work Order Efficiency Metrics', value: 85, unit: '%', description: 'AI identifies workflow bottlenecks', change: '-15% repeat requests' },
];

// Mock data for charts
const barChartData = [
  { name: 'Jan', value: 90 }, { name: 'Feb', value: 92 }, { name: 'Mar', value: 94 }, { name: 'Apr', value: 95 },
];
const lineChartData = [
  { name: 'Jan', value: 11000 }, { name: 'Feb', value: 11500 }, { name: 'Mar', value: 11800 }, { name: 'Apr', value: 12000 },
];

export default function IntelligenceMetrics() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <header className="bg-slate-900 text-white py-6 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <BarChart3 className="w-8 h-8 text-blue-400" />
            <h1 className="text-3xl font-bold">Intelligence Metrics Dashboard</h1>
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
            <h2 className="text-4xl font-bold text-slate-800 mb-6">Real-Time Operational Visibility</h2>
            <p className="text-lg text-slate-600 mb-8">
              Real-time metrics and AI-driven insights for ISO 41001-compliant performance evaluation.
            </p>

            {/* Metrics Features */}
            <section className="mb-12">
              <h3 className="text-2xl font-semibold text-slate-800 mb-6">Performance Metrics</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {metricsData.map((item, index) => (
                  <motion.div
                    key={index}
                    className="bg-white shadow-lg rounded-lg p-6 border-l-4 border-blue-500"
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
                        <Bar dataKey="value" fill="#3b82f6" />
                      </BarChart>
                    </ResponsiveContainer>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* AI Integration */}
            <section>
              <h3 className="text-2xl font-semibold text-slate-800 mb-6">AI-Powered Insights</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                  className="bg-white shadow-lg rounded-lg p-6 border-l-4 border-blue-500"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <h4 className="text-lg font-semibold text-slate-800 mb-2">Predictive Maintenance</h4>
                  <p className="text-sm text-slate-600">
                    AI forecasts asset failures. <br />
                    <span className="italic">Example: 2 pumps at risk next month</span>
                  </p>
                  <ResponsiveContainer width="100%" height={200}>
                    <LineChart data={lineChartData}>
                      <XAxis dataKey="name" />
                      <YAxis unit="kWh" />
                      <Tooltip />
                      <Line type="monotone" dataKey="value" stroke="#3b82f6" />
                    </LineChart>
                  </ResponsiveContainer>
                </motion.div>
                <motion.div
                  className="bg-white shadow-lg rounded-lg p-6 border-l-4 border-blue-500"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <h4 className="text-lg font-semibold text-slate-800 mb-2">Chatbot Interface</h4>
                  <p className="text-sm text-slate-600">
                    Query: “Show energy usage anomalies.” <br />
                    <span className="italic">AI Response: Spike detected in HVAC, 15% above norm</span>
                  </p>
                  <button
                    className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    onClick={() => alert('Query: Show energy usage anomalies')}
                  >
                    Try Chatbot
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
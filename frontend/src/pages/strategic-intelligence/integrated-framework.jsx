import { motion } from 'framer-motion';
import { Database } from 'lucide-react';
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
const frameworkData = [
  { name: 'Unified Data Management', value: 100, unit: '%', description: 'Links HR, finance, and operations', change: 'Full integration' },
  { name: 'Centralized Document Control', value: 250, unit: ' docs', description: 'ISO-compliant procedures and audits', change: '+50 docs' },
  { name: 'Knowledge Graph of Assets', value: 300, unit: ' assets', description: 'AI maps asset relationships', change: '+20 assets' },
  { name: 'Smart Alerts & Decision Support', value: 90, unit: '%', description: 'Context-aware recommendations', change: '5 alerts resolved' },
  { name: 'Cross-System Analytics', value: 95, unit: '%', description: 'Correlates cost vs. uptime', change: '+3% correlation' },
];

// Mock data for charts
const barChartData = [
  { name: 'Jan', value: 90 }, { name: 'Feb', value: 92 }, { name: 'Mar', value: 94 }, { name: 'Apr', value: 95 },
];
const lineChartData = [
  { name: 'Jan', value: 280 }, { name: 'Feb', value: 290 }, { name: 'Mar', value: 295 }, { name: 'Apr', value: 300 },
];

export default function IntegratedFramework() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <header className="bg-slate-900 text-white py-6 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Database className="w-8 h-8 text-purple-400" />
            <h1 className="text-3xl font-bold">Integrated Intelligence Framework Dashboard</h1>
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
            <h2 className="text-4xl font-bold text-slate-800 mb-6">Central Hub for Data Unification</h2>
            <p className="text-lg text-slate-600 mb-8">
              A unified framework for ISO 41001-compliant data management and AI-assisted decisions.
            </p>

            {/* Framework Features */}
            <section className="mb-12">
              <h3 className="text-2xl font-semibold text-slate-800 mb-6">Integrated Framework Features</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {frameworkData.map((item, index) => (
                  <motion.div
                    key={index}
                    className="bg-white shadow-lg rounded-lg p-6 border-l-4 border-purple-500"
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
                        <Bar dataKey="value" fill="#8b5cf6" />
                      </BarChart>
                    </ResponsiveContainer>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* AI Integration */}
            <section>
              <h3 className="text-2xl font-semibold text-slate-800 mb-6">AI-Powered Framework</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                  className="bg-white shadow-lg rounded-lg p-6 border-l-4 border-purple-500"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <h4 className="text-lg font-semibold text-slate-800 mb-2">Cognitive Layer</h4>
                  <p className="text-sm text-slate-600">
                    NLP and ML synthesize cross-department insights. <br />
                    <span className="italic">Example: Maintenance cost vs. uptime correlation</span>
                  </p>
                  <ResponsiveContainer width="100%" height={200}>
                    <LineChart data={lineChartData}>
                      <XAxis dataKey="name" />
                      <YAxis unit="assets" />
                      <Tooltip />
                      <Line type="monotone" dataKey="value" stroke="#8b5cf6" />
                    </LineChart>
                  </ResponsiveContainer>
                </motion.div>
                <motion.div
                  className="bg-white shadow-lg rounded-lg p-6 border-l-4 border-purple-500"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <h4 className="text-lg font-semibold text-slate-800 mb-2">AI Reporting Assistant</h4>
                  <p className="text-sm text-slate-600">
                    Auto-generates ISO-compliant reports. <br />
                    <span className="italic">Example: Q1 audit summary ready</span>
                  </p>
                  <button
                    className="mt-4 bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600"
                    onClick={() => alert('Generate Q1 audit summary')}
                  >
                    Generate Report
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
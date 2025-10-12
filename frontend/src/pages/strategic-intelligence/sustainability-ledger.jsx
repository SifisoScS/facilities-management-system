import { motion } from 'framer-motion';
import { Leaf } from 'lucide-react';
import Link from 'next/link';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

// Mock data for Environmental Metrics
const metricsData = [
  { name: 'Jan', energy: 1200, water: 800, waste: 60, carbon: 500, solar: 150, greenScore: 75 },
  { name: 'Feb', energy: 1100, water: 750, waste: 65, carbon: 480, solar: 160, greenScore: 78 },
  { name: 'Mar', energy: 1150, water: 780, waste: 70, carbon: 490, solar: 155, greenScore: 80 },
  { name: 'Apr', energy: 1000, water: 700, waste: 68, carbon: 470, solar: 170, greenScore: 82 },
];

// Mock data for Sustainability Initiatives
const initiatives = [
  { title: 'Solar Panel Installation', status: 'Active', target: '30% energy offset by Q2 2025', metrics: '156 kWh/day, saving R 2,400/month' },
  { title: 'Green Roof Garden', status: 'Planning', target: 'Improve air quality, reduce cooling costs by 15%', metrics: 'Planned for Q1 2026' },
  { title: 'Smart Recycling Program', status: 'Active', target: '80% diversion rate', metrics: '78% achieved, 1.2 tons/month reduction' },
  { title: 'Energy Storage System', status: 'Planning', target: 'Optimize solar energy usage', metrics: 'Planned for Q3 2026' },
  { title: 'Water Conservation System', status: 'Active', target: '15% water savings', metrics: '12% achieved, R 850/month saved' },
  { title: 'EV Charging Stations', status: 'Active', target: 'Support employee EVs', metrics: '4 stations installed' },
];

// Mock data for Environmental Trends
const monthlyUsageData = [
  { name: 'Jan', energy: 1200, water: 800 }, { name: 'Feb', energy: 1100, water: 750 },
  { name: 'Mar', energy: 1150, water: 780 }, { name: 'Apr', energy: 1000, water: 700 },
];
const wasteBreakdownData = [
  { name: 'Recyclable', value: 50 }, { name: 'Compostable', value: 28 }, { name: 'Landfill', value: 22 },
];
const COLORS = ['#10b981', '#3b82f6', '#ef4444'];

export default function SustainabilityLedger() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <header className="bg-slate-900 text-white py-6 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Leaf className="w-8 h-8 text-green-400" />
            <h1 className="text-3xl font-bold">Sustainability Ledger</h1>
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
            <h2 className="text-4xl font-bold text-slate-800 mb-6">Environmental Tracking & Sustainability</h2>
            <p className="text-lg text-slate-600 mb-8">
              Monitor energy, water, waste, and carbon initiatives to drive green facility management.
            </p>

            {/* Environmental Metrics Dashboard */}
            <section className="mb-12">
              <h3 className="text-2xl font-semibold text-slate-800 mb-6">Environmental Metrics Dashboard</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { title: 'Energy Consumption', key: 'energy', unit: 'kWh' },
                  { title: 'Water Usage', key: 'water', unit: 'Liters' },
                  { title: 'Waste Diversion', key: 'waste', unit: '%' },
                  { title: 'Carbon Emissions', key: 'carbon', unit: 'kg CO2' },
                  { title: 'Solar Generation', key: 'solar', unit: 'kWh' },
                  { title: 'Green Building Score', key: 'greenScore', unit: '%' },
                ].map(metric => (
                  <div key={metric.key} className="bg-white shadow-lg rounded-lg p-6">
                    <h4 className="text-lg font-semibold text-slate-800 mb-4">{metric.title}</h4>
                    <ResponsiveContainer width="100%" height={150}>
                      <LineChart data={metricsData}>
                        <XAxis dataKey="name" />
                        <YAxis unit={metric.unit} />
                        <Tooltip />
                        <Line type="monotone" dataKey={metric.key} stroke="#10b981" />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                ))}
              </div>
            </section>

            {/* Sustainability Initiatives */}
            <section className="mb-12">
              <h3 className="text-2xl font-semibold text-slate-800 mb-6">Sustainability Initiatives</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {initiatives.map((initiative, index) => (
                  <motion.div
                    key={index}
                    className={`bg-white shadow-lg rounded-lg p-6 border-l-4 ${initiative.status === 'Active' ? 'border-green-500' : 'border-yellow-500'}`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <h4 className="text-lg font-semibold text-slate-800">{initiative.title}</h4>
                    <p className="text-sm text-slate-500">Status: {initiative.status}</p>
                    <p className="text-slate-600 mt-2">Target: {initiative.target}</p>
                    <p className="text-slate-600">Metrics: {initiative.metrics}</p>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Environmental Trends */}
            <section>
              <h3 className="text-2xl font-semibold text-slate-800 mb-6">Environmental Trends</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white shadow-lg rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-slate-800 mb-4">Monthly Energy & Water Usage</h4>
                  <ResponsiveContainer width="100%" height={200}>
                    <LineChart data={monthlyUsageData}>
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Line type="monotone" dataKey="energy" stroke="#3b82f6" name="Energy (kWh)" />
                      <Line type="monotone" dataKey="water" stroke="#10b981" name="Water (Liters)" />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
                <div className="bg-white shadow-lg rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-slate-800 mb-4">Waste Management Breakdown</h4>
                  <ResponsiveContainer width="100%" height={200}>
                    <PieChart>
                      <Pie data={wasteBreakdownData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80}>
                        {wasteBreakdownData.map((_, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </section>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
import { motion } from 'framer-motion';
import { BarChart3 } from 'lucide-react';
import Link from 'next/link';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

// Mock data for placeholders
const marketData = [
  { name: 'Q1', trend: 65, adoption: 40 }, { name: 'Q2', trend: 70, adoption: 45 },
  { name: 'Q3', trend: 75, adoption: 50 }, { name: 'Q4', trend: 80, adoption: 55 },
];

export default function IntelligenceOverview() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <header className="bg-slate-900 text-white py-6 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <BarChart3 className="w-8 h-8 text-blue-400" />
            <h1 className="text-3xl font-bold">Intelligence Overview</h1>
          </div>
          <Link href="/strategic-intelligence/global-fm-intelligence" className="text-blue-300 hover:text-blue-100 transition-colors">
            Back to Global FM Dashboard
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
            <h2 className="text-4xl font-bold text-slate-800 mb-6">Real-Time Market Intelligence</h2>
            <p className="text-lg text-slate-600 mb-8">
              Monitor global FM industry trends, technology adoption, and competitive insights.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white shadow-lg rounded-lg p-6">
                <h3 className="text-xl font-semibold text-slate-800 mb-4">Industry Trends (Placeholder)</h3>
                <ResponsiveContainer width="100%" height={200}>
                  <LineChart data={marketData}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="trend" stroke="#3b82f6" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <div className="bg-white shadow-lg rounded-lg p-6">
                <h3 className="text-xl font-semibold text-slate-800 mb-4">Technology Adoption (Placeholder)</h3>
                <ResponsiveContainer width="100%" height={200}>
                  <LineChart data={marketData}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="adoption" stroke="#10b981" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-semibold text-slate-800 mb-4">Competitive Intelligence (Placeholder)</h3>
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-slate-100">
                    <th className="p-3">Competitor</th>
                    <th className="p-3">Market Share</th>
                    <th className="p-3">Key Strategy</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-3">Competitor A</td>
                    <td className="p-3">25%</td>
                    <td className="p-3">Automation</td>
                  </tr>
                  <tr>
                    <td className="p-3">Competitor B</td>
                    <td className="p-3">20%</td>
                    <td className="p-3">Sustainability</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
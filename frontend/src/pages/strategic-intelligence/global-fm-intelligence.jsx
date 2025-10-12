import { motion } from 'framer-motion';
import { Building2 } from 'lucide-react';
import Link from 'next/link';
import { BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const subDashboards = [
  { title: 'Intelligence Overview', description: 'Real-time monitoring of global FM trends and market shifts', link: '/strategic-intelligence/global-fm-intelligence/overview', icon: 'BarChart3' },
  { title: 'Best Practices Repository', description: 'Curated collection of proven FM practices', link: '/strategic-intelligence/global-fm-intelligence/best-practices', icon: 'BookOpen' },
  { title: 'Risk Intelligence', description: 'Proactive risk identification and assessment', link: '/strategic-intelligence/global-fm-intelligence/risk-intelligence', icon: 'AlertTriangle' },
  { title: 'Innovation Tracker', description: 'Monitoring emerging FM technologies', link: '/strategic-intelligence/global-fm-intelligence/innovation-tracker', icon: 'Zap' },
];

// Mock data for placeholders
const trendData = [
  { name: 'Jan', value: 400 }, { name: 'Feb', value: 300 }, { name: 'Mar', value: 500 }, { name: 'Apr', value: 280 },
];
const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444'];

export default function GlobalFMIntelligence() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <header className="bg-slate-900 text-white py-6 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Building2 className="w-8 h-8 text-blue-400" />
            <h1 className="text-3xl font-bold">Global FM Intelligence Dashboard</h1>
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
            <h2 className="text-4xl font-bold text-slate-800 mb-6">Comprehensive FM Insights</h2>
            <p className="text-lg text-slate-600 mb-8">
              Strategic intelligence gathering and analysis for data-driven facility management decisions.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {subDashboards.map((dashboard, index) => {
                const Icon = require('lucide-react')[dashboard.icon];
                return (
                  <Link key={index} href={dashboard.link}>
                    <motion.div
                      className="bg-white/10 backdrop-blur-md rounded-lg p-6 shadow-lg border border-slate-200 hover:border-blue-400 transition-all"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Icon className="w-10 h-10 text-blue-400 mb-4" />
                      <h3 className="text-xl font-semibold text-slate-800">{dashboard.title}</h3>
                      <p className="text-slate-600">{dashboard.description}</p>
                    </motion.div>
                  </Link>
                );
              })}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white shadow-lg rounded-lg p-6">
                <h3 className="text-xl font-semibold text-slate-800 mb-4">Market Trends (Placeholder)</h3>
                <ResponsiveContainer width="100%" height={200}>
                  <BarChart data={trendData}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="value" fill="#3b82f6" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <div className="bg-white shadow-lg rounded-lg p-6">
                <h3 className="text-xl font-semibold text-slate-800 mb-4">Technology Adoption (Placeholder)</h3>
                <ResponsiveContainer width="100%" height={200}>
                  <PieChart>
                    <Pie data={trendData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80}>
                      {trendData.map((_, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
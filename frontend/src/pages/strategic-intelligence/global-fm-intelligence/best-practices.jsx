import { motion } from 'framer-motion';
import { BookOpen } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

// Mock data for placeholders
const bestPractices = [
  { id: 1, title: 'Energy Optimization', organization: 'Org A', metric: '30% energy reduction', guide: 'Implement IoT sensors' },
  { id: 2, title: 'Predictive Maintenance', organization: 'Org B', metric: '20% downtime reduction', guide: 'Use AI analytics' },
];

export default function BestPracticesRepository() {
  const [search, setSearch] = useState('');

  const filteredPractices = bestPractices.filter(practice =>
    practice.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <header className="bg-slate-900 text-white py-6 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <BookOpen className="w-8 h-8 text-blue-400" />
            <h1 className="text-3xl font-bold">Best Practices Repository</h1>
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
            <h2 className="text-4xl font-bold text-slate-800 mb-6">Curated FM Best Practices</h2>
            <p className="text-lg text-slate-600 mb-8">
              Explore proven facility management practices from leading organizations.
            </p>
            <div className="mb-8">
              <input
                type="text"
                placeholder="Search best practices..."
                className="w-full max-w-md p-3 rounded-lg border border-slate-300 focus:border-blue-400"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-semibold text-slate-800 mb-4">Case Studies (Placeholder)</h3>
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-slate-100">
                    <th className="p-3">Practice</th>
                    <th className="p-3">Organization</th>
                    <th className="p-3">Metric</th>
                    <th className="p-3">Guide</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredPractices.map(practice => (
                    <tr key={practice.id}>
                      <td className="p-3">{practice.title}</td>
                      <td className="p-3">{practice.organization}</td>
                      <td className="p-3">{practice.metric}</td>
                      <td className="p-3">{practice.guide}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
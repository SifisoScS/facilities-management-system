import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';
import Link from 'next/link';

// Mock data for placeholders
const innovations = [
  { id: 1, tech: 'IoT Sensors', description: 'Smart building monitoring', status: 'Pilot', roi: '15%' },
  { id: 2, tech: 'AI Analytics', description: 'Predictive maintenance', status: 'Testing', roi: '20%' },
];

export default function InnovationTracker() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <header className="bg-slate-900 text-white py-6 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Zap className="w-8 h-8 text-blue-400" />
            <h1 className="text-3xl font-bold">Innovation Tracker</h1>
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
            <h2 className="text-4xl font-bold text-slate-800 mb-6">Emerging FM Technologies</h2>
            <p className="text-lg text-slate-600 mb-8">
              Track innovative solutions and methodologies in facility management.
            </p>
            <div className="bg-white shadow-lg rounded-lg p-6 mb-12">
              <h3 className="text-xl font-semibold text-slate-800 mb-4">Innovation Timeline (Placeholder)</h3>
              <div className="h-64 bg-slate-100 flex items-center justify-center">
                <p className="text-slate-600">Timeline visualization coming soon...</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {innovations.map(innovation => (
                <div key={innovation.id} className="bg-white shadow-lg rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-slate-800">{innovation.tech}</h3>
                  <p className="text-slate-600">{innovation.description}</p>
                  <p className="text-sm text-slate-500">Status: {innovation.status} | ROI: {innovation.roi}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
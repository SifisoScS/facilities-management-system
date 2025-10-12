import { motion } from 'framer-motion';
import { AlertTriangle } from 'lucide-react';
import Link from 'next/link';

// Mock data for placeholders
const risks = [
  { id: 1, type: 'Regulatory', description: 'New compliance law in EU', severity: 'High', date: '2025-10-01' },
  { id: 2, type: 'Supply Chain', description: 'Supplier delay in Asia', severity: 'Medium', date: '2025-09-15' },
];

export default function RiskIntelligence() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <header className="bg-slate-900 text-white py-6 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <AlertTriangle className="w-8 h-8 text-blue-400" />
            <h1 className="text-3xl font-bold">Risk Intelligence</h1>
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
            <h2 className="text-4xl font-bold text-slate-800 mb-6">Proactive Risk Assessment</h2>
            <p className="text-lg text-slate-600 mb-8">
              Identify and monitor risks affecting facility operations.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {risks.map(risk => (
                <div key={risk.id} className={`bg-white shadow-lg rounded-lg p-6 border-l-4 ${risk.severity === 'High' ? 'border-red-500' : 'border-yellow-500'}`}>
                  <h3 className="text-lg font-semibold text-slate-800">{risk.type}</h3>
                  <p className="text-slate-600">{risk.description}</p>
                  <p className="text-sm text-slate-500">Severity: {risk.severity} | Date: {risk.date}</p>
                </div>
              ))}
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-semibold text-slate-800 mb-4">Risk Matrix (Placeholder)</h3>
              <div className="h-64 bg-slate-100 flex items-center justify-center">
                <p className="text-slate-600">Risk matrix visualization coming soon...</p>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
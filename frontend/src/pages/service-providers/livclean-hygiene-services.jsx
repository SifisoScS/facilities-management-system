import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';
import Link from 'next/link';

export default function LivCleanHygieneServices() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <header className="bg-#8b5cf6 text-white py-6 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Shield className="w-8 h-8 text-8b5cf6" />
            <h1 className="text-3xl font-bold">LivClean Hygiene Services Dashboard</h1>
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
            <h2 className="text-4xl font-bold text-slate-800 mb-6">Cleaning and sanitation</h2>
            <p className="text-lg text-slate-600 mb-8">
              Placeholder for LivClean Hygiene Services dashboard. This page will display cleaning and sanitation.
            </p>
            <div className="bg-white shadow-lg rounded-lg p-8">
              <p className="text-slate-600">Content coming soon...</p>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}

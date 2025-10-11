import { motion } from 'framer-motion';
import Link from 'next/link';

const dashboards = [
  { title: 'Strategic Management', path: '/strategic-intelligence/strategic-management', description: 'Long-term planning and goal tracking' },
  { title: 'Intelligence Metrics', path: '/strategic-intelligence/intelligence-metrics', description: 'Real-time performance analytics' },
  { title: 'Integrated Framework', path: '/strategic-intelligence/integrated-framework', description: 'Unified data management system' },
  { title: 'Global FM Intelligence', path: '/strategic-intelligence/global-intelligence', description: 'Worldwide facilities insights' },
  { title: 'KPI Dashboard', path: '/strategic-intelligence/kpi-dashboard', description: 'Key performance indicators monitoring' },
  { title: 'Procurement Intelligence', path: '/strategic-intelligence/procurement-intelligence', description: 'Smart purchasing analytics' },
  { title: 'Sustainability Ledger', path: '/strategic-intelligence/sustainability-ledger', description: 'Environmental impact tracking' },
  { title: 'Stewardship Charter', path: '/strategic-intelligence/stewardship-charter', description: 'Governance and compliance' },
  { title: 'Training Module', path: '/strategic-intelligence/training-module', description: 'Staff development programs' },
];

export default function StrategicIntelligence() {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-blue-900 to-slate-800 text-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4">Strategic Facilities Intelligence</h2>
          <p className="text-2xl mb-2">Data-Driven Excellence in Facilities Management</p>
          <p className="text-xl italic opacity-90">"Intelligence without action is meaningless..."</p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-6">
          {dashboards.map((dashboard, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <Link href={dashboard.path}>
                <div className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all duration-300 cursor-pointer p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-white">{dashboard.title}</h3>
                  <p className="text-blue-100 text-sm mt-2">{dashboard.description}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
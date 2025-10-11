import { motion } from 'framer-motion';
import Link from 'next/link';

const dashboards = [
  { title: 'Administration Portal', path: '/derivco-facilities/administration-portal', description: 'Central management hub' },
  { title: 'Smart Insights', path: '/derivco-facilities/smart-insights', description: 'AI-powered analytics' },
  { title: 'Inventory System', path: '/derivco-facilities/inventory-system', description: 'Stock and supplies management' },
  { title: 'Equipment Tracking', path: '/derivco-facilities/equipment-tracking', description: 'Asset lifecycle monitoring' },
  { title: 'Performance KPIs', path: '/derivco-facilities/performance-kpis', description: 'Operational metrics' },
  { title: 'Medical Services', path: '/derivco-facilities/medical-services', description: 'Health and safety management' },
  { title: 'Concierge Services', path: '/derivco-facilities/concierge-services', description: 'Guest and tenant support' },
  { title: 'News & Training', path: '/derivco-facilities/news-training', description: 'Updates and learning resources' },
  { title: 'Sifiso Methodology', path: '/derivco-facilities/sifiso-methodology', description: 'Best practices framework' },
  { title: 'Isle of Man Workspace', path: '/derivco-facilities/management-workspaces/isle-of-man', description: 'Dedicated management workspace' },
  { title: 'Durban Operations', path: '/derivco-facilities/management-workspaces/durban-operations', description: 'Dedicated management workspace' },
];

export default function DerivcoFacilities() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 text-slate-800">Facilities Management Dashboards</h2>
          <p className="text-xl text-slate-600">Comprehensive operational control and monitoring</p>
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
                <div className="shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer border-2 border-slate-200 hover:border-blue-400 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-slate-800">{dashboard.title}</h3>
                  <p className="text-slate-600 text-sm mt-2">{dashboard.description}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
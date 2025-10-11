import { motion } from 'framer-motion';
import Link from 'next/link';

const providers = [
  {
    name: 'Leitch Landscape',
    path: '/service-providers/leitch-landscape',
    service: 'Professional landscaping services',
    color: '#10b981',
  },
  {
    name: 'Sabeliwe Garden Services',
    path: '/service-providers/sabeliwe-garden',
    service: 'Garden maintenance and design',
    color: '#3b82f6',
  },
  {
    name: 'CSG Foods',
    path: '/service-providers/csg-foods',
    service: 'Catering and food services',
    color: '#f59e0b',
  },
  {
    name: 'LivClean Hygiene Services',
    path: '/service-providers/livclean-hygiene',
    service: 'Cleaning and sanitation',
    color: '#8b5cf6',
  },
  {
    name: 'MVULA Security',
    path: '/service-providers/mvula-security',
    service: 'Security and surveillance',
    color: '#ef4444',
  },
];

export default function ServiceProviders() {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-slate-100 to-slate-200">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 text-slate-800">Service Providers</h2>
          <p className="text-2xl italic text-slate-600">"Trusted Partners in Facility Excellence"</p>
          <p className="text-lg mt-4 text-slate-700">5 provider dashboards with specialized services</p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {providers.map((provider, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <Link href={provider.path}>
                <div
                  className="shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer border-t-4 p-6 rounded-lg"
                  style={{ borderTopColor: provider.color }}
                >
                  <h3 className="text-2xl font-bold text-slate-800">{provider.name}</h3>
                  <p className="text-slate-600 text-base mt-2">{provider.service}</p>
                  <div className="h-2 rounded-full mt-4" style={{ backgroundColor: provider.color, opacity: 0.3 }}></div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../../components/ui/card';
import Link from 'next/link';

// Service Providers
const serviceProviders = [
  { name: 'Leitch Landscape', service: 'Professional landscaping services', color: '#10b981', link: '/service-providers/leitch-landscape' },
  { name: 'Sabeliwe Garden Services', service: 'Garden maintenance and design', color: '#3b82f6', link: '/service-providers/sabeliwe-garden-services' },
  { name: 'CSG Foods', service: 'Catering and food services', color: '#f59e0b', link: '/service-providers/csg-foods' },
  { name: 'LivClean Hygiene Services', service: 'Cleaning and sanitation', color: '#8b5cf6', link: '/service-providers/livclean-hygiene-services' },
  { name: 'MVULA Security', service: 'Security and surveillance', color: '#ef4444', link: '/service-providers/mvula-security' },
];

export default function ServiceProvidersDashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-4 text-slate-800">Service Providers</h1>
          <p className="text-xl text-slate-600">Trusted Partners in Facility Excellence</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceProviders.map((provider, index) => (
            <Link
              key={index}
              href={provider.link}
              className="block"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer border-t-4" style={{ borderTopColor: provider.color }}>
                  <CardHeader>
                    <CardTitle className="text-slate-800 text-2xl">{provider.name}</CardTitle>
                    <CardDescription className="text-slate-600 text-base">{provider.service}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-2 rounded-full" style={{ backgroundColor: provider.color, opacity: 0.3 }}></div>
                  </CardContent>
                </Card>
              </motion.div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/" className="text-blue-600 hover:underline text-lg">
            Back to Main Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}
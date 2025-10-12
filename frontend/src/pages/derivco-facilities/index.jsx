import { motion } from 'framer-motion';
import { TrendingUp, Database, Wrench, BarChart3, Shield, Building2, Award } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription } from '../../components/ui/card';
import Link from 'next/link';

// Facilities Management Dashboards
const facilitiesDashboards = [
  { icon: TrendingUp, title: 'Smart Insights', description: 'AI-powered analytics', link: '/derivco-facilities/smart-insights' },
  { icon: Database, title: 'Inventory System', description: 'Stock and supplies management', link: '/derivco-facilities/inventory-system' },
  { icon: Wrench, title: 'Equipment Tracking', description: 'Asset lifecycle monitoring', link: '/derivco-facilities/equipment-tracking' },
  { icon: BarChart3, title: 'Performance KPIs', description: 'Operational metrics', link: '/derivco-facilities/performance-kpis' },
  { icon: Shield, title: 'Medical Services', description: 'Health and safety management', link: '/derivco-facilities/medical-services' },
  { icon: Building2, title: 'Concierge Services', description: 'Guest and tenant support', link: '/derivco-facilities/concierge-services' },
  { icon: Award, title: 'News & Training', description: 'Updates and learning resources', link: '/derivco-facilities/news-training' },
  { icon: TrendingUp, title: 'Sifiso Methodology', description: 'Best practices framework', link: '/derivco-facilities/sifiso-methodology' },
];

export default function FacilitiesDashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-4 text-slate-800">FACILITIES Dashboards</h1>
          <p className="text-xl text-slate-600">Comprehensive operational control and monitoring</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {facilitiesDashboards.map((dashboard, index) => (
            <Link key={index} href={dashboard.link}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <Card className="shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer border-2 border-slate-200 hover:border-blue-400">
                  <CardHeader>
                    <dashboard.icon className="w-12 h-12 mb-4 text-blue-600" />
                    <CardTitle className="text-slate-800 text-xl">{dashboard.title}</CardTitle>
                    <CardDescription className="text-slate-600">{dashboard.description}</CardDescription>
                  </CardHeader>
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
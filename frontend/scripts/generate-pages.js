const fs = require('fs');
const path = require('path');

const strategicDashboards = [
  { icon: 'TrendingUp', title: 'Strategic Management', description: 'Long-term planning and goal tracking', link: '/strategic-intelligence/strategic-management' },
  { icon: 'BarChart3', title: 'Intelligence Metrics', description: 'Real-time performance analytics', link: '/strategic-intelligence/intelligence-metrics' },
  { icon: 'Database', title: 'Integrated Framework', description: 'Unified data management system', link: '/strategic-intelligence/integrated-framework' },
  { icon: 'Building2', title: 'Global FM Intelligence', description: 'Worldwide facilities insights', link: '/strategic-intelligence/global-fm-intelligence' },
  { icon: 'Award', title: 'KPI Dashboard', description: 'Key performance indicators monitoring', link: '/strategic-intelligence/kpi-dashboard' },
  { icon: 'TrendingUp', title: 'Procurement Intelligence', description: 'Smart purchasing analytics', link: '/strategic-intelligence/procurement-intelligence' },
  { icon: 'Leaf', title: 'Sustainability Ledger', description: 'Environmental impact tracking', link: '/strategic-intelligence/sustainability-ledger' },
  { icon: 'Shield', title: 'Stewardship Charter', description: 'Governance and compliance', link: '/strategic-intelligence/stewardship-charter' },
  { icon: 'Users', title: 'Training Module', description: 'Staff development programs', link: '/strategic-intelligence/training-module' },
];

const facilitiesDashboards = [
  { icon: 'Users', title: 'Administration Portal', description: 'Central management hub', link: '/derivco-facilities/administration-portal' },
  { icon: 'TrendingUp', title: 'Smart Insights', description: 'AI-powered analytics', link: '/derivco-facilities/smart-insights' },
  { icon: 'Database', title: 'Inventory System', description: 'Stock and supplies management', link: '/derivco-facilities/inventory-system' },
  { icon: 'Wrench', title: 'Equipment Tracking', description: 'Asset lifecycle monitoring', link: '/derivco-facilities/equipment-tracking' },
  { icon: 'BarChart3', title: 'Performance KPIs', description: 'Operational metrics', link: '/derivco-facilities/performance-kpis' },
  { icon: 'Shield', title: 'Medical Services', description: 'Health and safety management', link: '/derivco-facilities/medical-services' },
  { icon: 'Building2', title: 'Concierge Services', description: 'Guest and tenant support', link: '/derivco-facilities/concierge-services' },
  { icon: 'Award', title: 'News & Training', description: 'Updates and learning resources', link: '/derivco-facilities/news-training' },
  { icon: 'TrendingUp', title: 'Sifiso Methodology', description: 'Best practices framework', link: '/derivco-facilities/sifiso-methodology' },
];

const serviceProviders = [
  { name: 'Leitch Landscape', service: 'Professional landscaping services', color: '#10b981', link: '/service-providers/leitch-landscape', icon: 'Leaf' },
  { name: 'Sabeliwe Garden Services', service: 'Garden maintenance and design', color: '#3b82f6', link: '/service-providers/sabeliwe-garden-services', icon: 'Leaf' },
  { name: 'CSG Foods', service: 'Catering and food services', color: '#f59e0b', link: '/service-providers/csg-foods', icon: 'Award' },
  { name: 'LivClean Hygiene Services', service: 'Cleaning and sanitation', color: '#8b5cf6', link: '/service-providers/livclean-hygiene-services', icon: 'Shield' },
  { name: 'MVULA Security', service: 'Security and surveillance', color: '#ef4444', link: '/service-providers/mvula-security', icon: 'Shield' },
];

const template = (title, description, icon, color = 'slate-900') => `import { motion } from 'framer-motion';
import { ${icon} } from 'lucide-react';
import Link from 'next/link';

export default function ${title.replace(/[^a-zA-Z0-9]/g, '')}() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <header className="bg-${color} text-white py-6 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <${icon} className="w-8 h-8 text-${color === 'slate-900' ? 'blue-400' : color.replace('#', '')}" />
            <h1 className="text-3xl font-bold">${title} Dashboard</h1>
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
            <h2 className="text-4xl font-bold text-slate-800 mb-6">${description}</h2>
            <p className="text-lg text-slate-600 mb-8">
              Placeholder for ${title} dashboard. This page will display ${description.toLowerCase()}.
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
`;

const generatePages = (items, dir) => {
  const dirPath = path.join(__dirname, '../src/pages', dir);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
  items.forEach(item => {
    const fileName = item.link.split('/').pop() + '.jsx';
    const filePath = path.join(dirPath, fileName);
    const color = item.color || 'slate-900';
    const content = template(item.title || item.name, item.service || item.description, item.icon, color);
    fs.writeFileSync(filePath, content);
    console.log(`Generated: ${filePath}`);
  });
};

generatePages(strategicDashboards, 'strategic-intelligence');
generatePages(facilitiesDashboards, 'derivco-facilities');
generatePages(serviceProviders, 'service-providers');
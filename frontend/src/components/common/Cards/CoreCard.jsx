import { motion } from 'framer-motion';
import { Building2, TrendingUp, Users } from 'lucide-react';

const icons = {
  'Strategic Facilities Intelligence': TrendingUp,
  'Derivco Facilities-Management System': Building2,
  'Service Providers': Users,
};

export default function CoreCard({ title, subtitle, slogan }) {
  const Icon = icons[title] || Building2;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      whileHover={{ scale: 1.05, y: -5 }}
    >
      <div className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all duration-300 cursor-pointer p-6 rounded-lg shadow-lg">
        <Icon className="w-12 h-12 mb-4 text-blue-300" />
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <p className="text-blue-100 text-sm mt-2">{subtitle}</p>
        <p className="text-blue-200 text-sm italic mt-2">{slogan}</p>
      </div>
    </motion.div>
  );
}
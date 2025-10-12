import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';
import Link from 'next/link';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

// Custom number formatting function to avoid hydration errors
const formatNumber = (value, unit) => {
  if (unit === 'R') {
    return `R ${Math.round(value).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}`;
  }
  return `${value}${unit}`;
};

// Mock data for Core Stewardship Principles
const principles = [
  {
    title: 'Responsibility & Ownership',
    description: 'Taking full accountability for all facility management decisions, actions, and outcomes with transparent reporting and continuous improvement.',
    items: ['Personal accountability for decisions', 'Transparent reporting mechanisms', 'Continuous improvement mindset', 'Proactive problem resolution'],
  },
  {
    title: 'Sustainability Focus',
    description: 'Prioritizing long-term sustainability over short-term gains, ensuring resources are managed responsibly for future generations.',
    items: ['Environmental impact assessment', 'Resource conservation strategies', 'Waste reduction programs', 'Energy efficiency initiatives'],
  },
  {
    title: 'Stakeholder Engagement',
    description: 'Active collaboration with all stakeholders to understand needs, communicate effectively, and build lasting partnerships.',
    items: ['Regular stakeholder meetings', 'Feedback collection systems', 'Collaborative decision making', 'Partnership development'],
  },
  {
    title: 'Innovation & Excellence',
    description: 'Pursuing innovative solutions and maintaining the highest standards of excellence in all facility management practices.',
    items: ['Technology adoption', 'Best practice implementation', 'Quality assurance programs', 'Performance optimization'],
  },
  {
    title: 'Knowledge Sharing',
    description: 'Creating and maintaining systems for knowledge transfer, ensuring continuity and building organizational capability.',
    items: ['Documentation systems', 'Training programs', 'Mentorship initiatives', 'Legacy planning'],
  },
  {
    title: 'Ethical Leadership',
    description: 'Demonstrating integrity, fairness, and ethical behavior in all interactions and decisions, setting the standard for others.',
    items: ['Ethical decision framework', 'Fair treatment policies', 'Transparency standards', 'Integrity measures'],
  },
];

// Mock data for Accountability Framework
const framework = [
  { title: 'Performance Tracking', description: 'Comprehensive KPI monitoring and regular performance reviews with clear metrics and targets.', icon: '📊' },
  { title: 'Goal Setting', description: 'SMART objectives aligned with organizational strategy and measurable outcomes.', icon: '🎯' },
  { title: 'Regular Reporting', description: 'Structured reporting cycles with transparent communication of progress and challenges.', icon: '📝' },
  { title: 'Continuous Improvement', description: 'Systematic approach to identifying opportunities and implementing improvements.', icon: '🔄' },
  { title: 'Peer Review', description: 'Regular peer assessments and collaborative evaluation of performance and practices.', icon: '👥' },
  { title: 'Recognition System', description: 'Acknowledgment and reward systems for exceptional stewardship and leadership.', icon: '🏆' },
];

// Mock data for Legacy Impact Metrics
const metrics = [
  { name: 'Stakeholder Satisfaction', value: 94, change: '+12% from last quarter', unit: '%' },
  { name: 'Improvement Initiatives', value: 87, change: '+23 new this month', unit: '' },
  { name: 'Knowledge Articles', value: 156, change: 'Growing repository', unit: '' },
  { name: 'Compliance Rate', value: 92, change: '+8% improvement', unit: '%' },
  { name: 'Team Members Trained', value: 43, change: '+15 this quarter', unit: '' },
];

// Mock data for Bar Charts
const barChartData = [
  { name: 'Jan', value: 80 }, { name: 'Feb', value: 85 }, { name: 'Mar', value: 90 }, { name: 'Apr', value: 94 },
];

export default function StewardshipCharter() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <header className="bg-slate-900 text-white py-6 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Shield className="w-8 h-8 text-blue-400" />
            <h1 className="text-3xl font-bold">Stewardship Charter</h1>
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
            <h2 className="text-4xl font-bold text-slate-800 mb-6">Accountability & Legacy Leadership Framework</h2>
            <p className="text-lg text-slate-600 mb-8">
              A comprehensive framework for accountability and legacy leadership in facility management.
            </p>
            <div className="bg-white shadow-lg rounded-lg p-6 mb-12 border-l-4 border-blue-500">
              <p className="text-xl italic text-slate-700">
                &quot;Stewardship in facility management ensures sustainable spaces, aligning resources with purpose.&quot;
              </p>
              <p className="text-sm text-slate-600 mt-2">— Sifiso Shezi, Facilities Assistant Level 1</p>
            </div>

            {/* Core Stewardship Principles */}
            <section className="mb-12">
              <h3 className="text-2xl font-semibold text-slate-800 mb-6">Core Stewardship Principles</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {principles.map((principle, index) => (
                  <motion.div
                    key={index}
                    className="bg-white shadow-lg rounded-lg p-6 border-l-4 border-blue-500"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <h4 className="text-lg font-semibold text-slate-800 mb-2">{`${index + 1}. ${principle.title}`}</h4>
                    <p className="text-sm text-slate-600 mb-4">{principle.description}</p>
                    <ul className="list-disc list-inside text-sm text-slate-600">
                      {principle.items.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Accountability Framework */}
            <section className="mb-12">
              <h3 className="text-2xl font-semibold text-slate-800 mb-6">Accountability Framework</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {framework.map((item, index) => (
                  <motion.div
                    key={index}
                    className="bg-white shadow-lg rounded-lg p-6 border-l-4 border-blue-500"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-2xl">{item.icon}</span>
                      <h4 className="text-lg font-semibold text-slate-800">{item.title}</h4>
                    </div>
                    <p className="text-sm text-slate-600">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Legacy Impact Metrics */}
            <section>
              <h3 className="text-2xl font-semibold text-slate-800 mb-6">Legacy Impact Metrics</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {metrics.map((metric, index) => (
                  <motion.div
                    key={index}
                    className="bg-white shadow-lg rounded-lg p-6 border-l-4 border-blue-500"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <h4 className="text-lg font-semibold text-slate-800 mb-2">{metric.name}</h4>
                    <p className="text-2xl font-bold text-slate-800">{formatNumber(metric.value, metric.unit)}</p>
                    <p className="text-sm text-slate-500">{metric.change}</p>
                    <ResponsiveContainer width="100%" height={100}>
                      <BarChart data={barChartData}>
                        <XAxis dataKey="name" />
                        <YAxis hide />
                        <Tooltip />
                        <Bar dataKey="value" fill="#3b82f6" />
                      </BarChart>
                    </ResponsiveContainer>
                  </motion.div>
                ))}
              </div>
            </section>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
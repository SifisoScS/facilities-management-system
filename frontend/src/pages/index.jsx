import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Building2, TrendingUp, Users, Shield, Leaf, Wrench, BarChart3, Database, Award } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Bar, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';
import Link from 'next/link';
import ProgressBar from '../components/common/ProgressBar';

// Data for Today's Operations Overview
const operationsData = [
  { name: 'Maintenance', completion: 85 },
  { name: 'Cleaning', completion: 92 },
  { name: 'Security', completion: 88 },
  { name: 'Landscaping', completion: 78 },
  { name: 'Catering', completion: 95 },
  { name: 'Admin', completion: 90 },
];

// Data for Performance Metrics
const performanceData = [
  { name: 'On Track', value: 72, color: '#3182ce' },
  { name: 'Needs Attention', value: 18, color: '#f59e0b' },
  { name: 'At Risk', value: 10, color: '#ef4444' },
];

// Strategic Intelligence Dashboards
const strategicDashboards = [
  { icon: TrendingUp, title: 'Strategic Management', description: 'Long-term planning and goal tracking', link: '/strategic-intelligence/strategic-management' },
  { icon: BarChart3, title: 'Intelligence Metrics', description: 'Real-time performance analytics', link: '/strategic-intelligence/intelligence-metrics' },
  { icon: Database, title: 'Integrated Framework', description: 'Unified data management system', link: '/strategic-intelligence/integrated-framework' },
  { icon: Building2, title: 'Global FM Intelligence', description: 'Worldwide facilities insights', link: '/strategic-intelligence/global-fm-intelligence' },
  { icon: Award, title: 'KPI Dashboard', description: 'Key performance indicators monitoring', link: '/strategic-intelligence/kpi-dashboard' },
  { icon: TrendingUp, title: 'Procurement Intelligence', description: 'Smart purchasing analytics', link: '/strategic-intelligence/procurement-intelligence' },
  { icon: Leaf, title: 'Sustainability Ledger', description: 'Environmental impact tracking', link: '/strategic-intelligence/sustainability-ledger' },
  { icon: Shield, title: 'Stewardship Charter', description: 'Governance and compliance', link: '/strategic-intelligence/stewardship-charter' },
  { icon: Users, title: 'Training Module', description: 'Staff development programs', link: '/strategic-intelligence/training-module' },
];

// Facilities Management Dashboards
const facilitiesDashboards = [
  { icon: Users, title: 'Administration Portal', description: 'Central management hub', link: '/derivco-facilities/administration-portal' },
  { icon: TrendingUp, title: 'Smart Insights', description: 'AI-powered analytics', link: '/derivco-facilities/smart-insights' },
  { icon: Database, title: 'Inventory System', description: 'Stock and supplies management', link: '/derivco-facilities/inventory-system' },
  { icon: Wrench, title: 'Equipment Tracking', description: 'Asset lifecycle monitoring', link: '/derivco-facilities/equipment-tracking' },
  { icon: BarChart3, title: 'Performance KPIs', description: 'Operational metrics', link: '/derivco-facilities/performance-kpis' },
  { icon: Shield, title: 'Medical Services', description: 'Health and safety management', link: '/derivco-facilities/medical-services' },
  { icon: Building2, title: 'Concierge Services', description: 'Guest and tenant support', link: '/derivco-facilities/concierge-services' },
  { icon: Award, title: 'News & Training', description: 'Updates and learning resources', link: '/derivco-facilities/news-training' },
  { icon: TrendingUp, title: 'Sifiso Methodology', description: 'Best practices framework', link: '/derivco-facilities/sifiso-methodology' },
];

// Service Providers
const serviceProviders = [
  { name: 'Leitch Landscape', service: 'Professional landscaping services', color: '#10b981', link: '/service-providers/leitch-landscape' },
  { name: 'Sabeliwe Garden Services', service: 'Garden maintenance and design', color: '#3b82f6', link: '/service-providers/sabeliwe-garden-services' },
  { name: 'CSG Foods', service: 'Catering and food services', color: '#f59e0b', link: '/service-providers/csg-foods' },
  { name: 'LivClean Hygiene Services', service: 'Cleaning and sanitation', color: '#8b5cf6', link: '/service-providers/livclean-hygiene-services' },
  { name: 'MVULA Security', service: 'Security and surveillance', color: '#ef4444', link: '/service-providers/mvula-security' },
];

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <ProgressBar />
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `linear-gradient(rgba(26, 54, 93, 0.85), rgba(45, 55, 72, 0.85)), url(https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center text-white px-6 max-w-5xl"
        >
          <h1 className="text-6xl md:text-7xl font-bold mb-6 tracking-tight">
            FACILITIES MANAGEMENT SYSTEM
          </h1>
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-8 mt-8 border border-white/20">
            <p className="text-xl md:text-2xl italic leading-relaxed">
              "Stewardship in facility management ensures sustainable spaces, aligning resources with purpose."
            </p>
            <p className="text-lg mt-4 font-semibold">
              — Sifiso Cyprian Shezi, Facilities Assistant Level 1
            </p>
          </div>
        </motion.div>
      </section>

      {/* Charts Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-center mb-16 text-slate-800"
          >
            Today's Operations Overview
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-12">
            {/* Bar Chart */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card className="shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl">Completion Rates by Service</CardTitle>
                  <CardDescription>Daily performance across all departments</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={operationsData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" angle={-45} textAnchor="end" height={100} />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="completion" fill="#3182ce" radius={[8, 8, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </motion.div>

            {/* Pie Chart */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card className="shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl">Performance Metrics</CardTitle>
                  <CardDescription>Overall project health status</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={performanceData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ name, value }) => `${name}: ${value}%`}
                        outerRadius={100}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {performanceData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Strategic Facilities Intelligence Section */}
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
            <div className="mt-8">
              <h3 className="text-3xl font-bold tracking-wide">DERIVCO FACILITIES-MANAGEMENT SYSTEM</h3>
              <p className="text-lg mt-4">Features 9 dashboards + dedicated management workspaces</p>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {strategicDashboards.map((dashboard, index) => (
              <Link key={index} href={dashboard.link}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all duration-300 cursor-pointer">
                    <CardHeader>
                      <dashboard.icon className="w-12 h-12 mb-4 text-blue-300" />
                      <CardTitle className="text-white text-xl">{dashboard.title}</CardTitle>
                      <CardDescription className="text-blue-100">{dashboard.description}</CardDescription>
                    </CardHeader>
                  </Card>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Management Dashboards Section */}
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
            {facilitiesDashboards.map((dashboard, index) => (
              <Link key={index} href={dashboard.link}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
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
        </div>
      </section>

      {/* Service Providers Section */}
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
            <p className="text-lg mt-4 text-slate-700">4 provider dashboards with specialized services</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceProviders.map((provider, index) => (
              <Link key={index} href={provider.link}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
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
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Derivco Facilities Management System</h3>
          <p className="text-slate-400 mb-2">Stewardship in facility management ensures sustainable spaces</p>
          <p className="text-slate-500 text-sm">© 2025 Derivco. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
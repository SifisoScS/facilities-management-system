import { motion } from 'framer-motion';
import { TrendingUp, Star } from 'lucide-react';
import Link from 'next/link';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

// Custom number formatting function to avoid hydration errors
const formatNumber = (value, unit) => {
  if (unit === 'R') {
    return `R ${Math.round(value).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}`;
  }
  return `${value}${unit}`;
};

// Mock data for Cost Savings Dashboard
const costSavingsData = [
  { name: 'YTD Savings', value: 1200000, change: '+18% vs last year', unit: 'R' },
  { name: 'Cost Reduction', value: 15.3, change: '+3.2% improvement', unit: '%' },
  { name: 'Active Contracts', value: 47, change: '12 renewed', unit: '' },
  { name: 'Procurement Cycle Time', value: 5.2, change: '-2.1 days faster', unit: ' days' },
];

// Mock data for Bar Charts
const barChartData = [
  { name: 'Jan', value: 100000 }, { name: 'Feb', value: 150000 }, { name: 'Mar', value: 200000 }, { name: 'Apr', value: 250000 },
];

// Mock data for Supplier Performance
const supplierData = [
  {
    name: 'TechSupply Solutions',
    rating: 4.8,
    stars: 5,
    onTimeDelivery: '98%',
    contractValue: 456000,
    costSavings: '12%',
    qualityScore: '94%',
  },
  {
    name: 'MaintainPro Services',
    rating: 4.2,
    stars: 4,
    onTimeDelivery: '92%',
    contractValue: 287000,
    costSavings: '8%',
    qualityScore: '89%',
  },
];

// Mock data for Procurement Analytics
const monthlySavingsData = [
  { name: 'Jan', savings: 100000 }, { name: 'Feb', savings: 120000 }, { name: 'Mar', savings: 150000 }, { name: 'Apr', savings: 180000 },
];
const spendingCategoryData = [
  { name: 'Office Supplies', value: 40 }, { name: 'Maintenance', value: 30 }, { name: 'Equipment', value: 20 }, { name: 'Other', value: 10 },
];
const COLORS = ['#10b981', '#3b82f6', '#f59e0b', '#ef4444'];

// Mock data for Optimization Recommendations
const recommendations = [
  { title: 'Consolidate Office Supply Vendors', description: 'Reduce vendors from 5 to 2 for bulk discounts', savings: 'R 45 000/year' },
  { title: 'Negotiate Long-term Contracts', description: 'Convert short-term maintenance contracts to 3-year agreements', savings: 'R 78 000/year' },
  { title: 'Optimize Delivery Schedules', description: 'Coordinate schedules to reduce freight costs', savings: 'R 23 000/year' },
  { title: 'Implement Competitive Bidding', description: 'Introduce bidding for contracts over R 50,000', savings: 'R 156 000/year' },
];

export default function ProcurementIntelligence() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <header className="bg-slate-900 text-white py-6 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <TrendingUp className="w-8 h-8 text-green-400" />
            <h1 className="text-3xl font-bold">Procurement Intelligence</h1>
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
            <h2 className="text-4xl font-bold text-slate-800 mb-6">Track Savings & Optimize Purchasing</h2>
            <p className="text-lg text-slate-600 mb-8">
              Advanced analytics to track cost savings, supplier performance, and optimize purchasing decisions.
            </p>

            {/* Cost Savings Dashboard */}
            <section className="mb-12">
              <h3 className="text-2xl font-semibold text-slate-800 mb-6">Cost Savings Dashboard</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {costSavingsData.map((item, index) => (
                  <motion.div
                    key={index}
                    className="bg-white shadow-lg rounded-lg p-6 border-l-4 border-green-500"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <h4 className="text-lg font-semibold text-slate-800 mb-2">{item.name}</h4>
                    <p className="text-2xl font-bold text-slate-800">{formatNumber(item.value, item.unit)}</p>
                    <p className="text-sm text-slate-500">{item.change}</p>
                    <ResponsiveContainer width="100%" height={100}>
                      <BarChart data={barChartData}>
                        <XAxis dataKey="name" />
                        <YAxis hide />
                        <Tooltip />
                        <Bar dataKey="value" fill="#10b981" />
                      </BarChart>
                    </ResponsiveContainer>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Supplier Performance Analytics */}
            <section className="mb-12">
              <h3 className="text-2xl font-semibold text-slate-800 mb-6">Supplier Performance Analytics</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {supplierData.map((supplier, index) => (
                  <motion.div
                    key={index}
                    className="bg-white shadow-lg rounded-lg p-6 border-l-4 border-green-500"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <h4 className="text-lg font-semibold text-slate-800 mb-2">{supplier.name}</h4>
                    <div className="flex items-center mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-5 h-5 ${i < supplier.stars ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                        />
                      ))}
                      <span className="ml-2 text-sm text-slate-600">{supplier.rating}</span>
                    </div>
                    <p className="text-sm text-slate-600">On-time Delivery: {supplier.onTimeDelivery}</p>
                    <p className="text-sm text-slate-600">Contract Value: {formatNumber(supplier.contractValue, 'R')}</p>
                    <p className="text-sm text-slate-600">Cost Savings: {supplier.costSavings}</p>
                    <p className="text-sm text-slate-600">Quality Score: {supplier.qualityScore}</p>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Procurement Analytics */}
            <section className="mb-12">
              <h3 className="text-2xl font-semibold text-slate-800 mb-6">Procurement Analytics</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white shadow-lg rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-slate-800 mb-4">Monthly Savings Trend</h4>
                  <ResponsiveContainer width="100%" height={200}>
                    <LineChart data={monthlySavingsData}>
                      <XAxis dataKey="name" />
                      <YAxis unit="R" />
                      <Tooltip />
                      <Line type="monotone" dataKey="savings" stroke="#3b82f6" />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
                <div className="bg-white shadow-lg rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-slate-800 mb-4">Spending by Category</h4>
                  <ResponsiveContainer width="100%" height={200}>
                    <PieChart>
                      <Pie data={spendingCategoryData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80}>
                        {spendingCategoryData.map((_, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </section>

            {/* Optimization Recommendations */}
            <section>
              <h3 className="text-2xl font-semibold text-slate-800 mb-6">Optimization Recommendations</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {recommendations.map((rec, index) => (
                  <motion.div
                    key={index}
                    className="bg-white shadow-lg rounded-lg p-4 border-l-4 border-green-500 cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => alert(`Clicked: ${rec.title}`)} // Placeholder for click action
                  >
                    <h4 className="text-md font-semibold text-slate-800 mb-2">{rec.title}</h4>
                    <p className="text-sm text-slate-600 mb-2">{rec.description}</p>
                    <p className="text-sm text-slate-500">Potential Savings: {rec.savings}</p>
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
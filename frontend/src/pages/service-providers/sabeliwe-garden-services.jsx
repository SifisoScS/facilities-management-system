import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../../../components/ui/card';
import { Leaf } from 'lucide-react';
import Link from 'next/link';

export default function SabeliweGardenServicesDashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-4 text-slate-800">Sabeliwe Garden Services Dashboard</h1>
          <p className="text-xl text-slate-600">Garden maintenance and design</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
          >
            <Card className="shadow-xl border-t-4 border-t-blue-500">
              <CardHeader>
                <CardTitle className="text-slate-800 text-2xl">Service Overview</CardTitle>
                <CardDescription className="text-slate-600">Garden maintenance and design</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center mb-4">
                  <Leaf className="w-8 h-8 text-blue-500 mr-2" />
                  <p className="text-slate-800">Specializing in garden aesthetics and sustainability</p>
                </div>
                <p className="text-slate-600">Contract Value: R 120 000</p>
                <p className="text-slate-600">Service Rating: 4.5/5</p>
                <p className="text-slate-600">Projects Completed: 10</p>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <Card className="shadow-xl border-t-4 border-t-blue-500">
              <CardHeader>
                <CardTitle className="text-slate-800 text-2xl">Performance Metrics</CardTitle>
                <CardDescription className="text-slate-600">Key indicators for service quality</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">On-time Delivery: 90%</p>
                <p className="text-slate-600">Customer Satisfaction: 88%</p>
                <p className="text-slate-600">Sustainability Score: 85/100</p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <div className="mt-12 text-center">
          <Link href="/service-providers" className="text-blue-600 hover:underline text-lg">
            Back to Service Providers
          </Link>
        </div>
      </div>
    </div>
  );
}
import { motion } from 'framer-motion';
import OperationsChart from './OperationsChart';
import PerformanceChart from './PerformanceChart';

export default function ChartContainer() {
  return (
    <div className="grid md:grid-cols-2 gap-12">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <OperationsChart />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <PerformanceChart />
      </motion.div>
    </div>
  );
}
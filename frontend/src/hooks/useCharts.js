import { useApi } from './useApi';

// Mock data for development (to be replaced by backend API)
const mockOperationsData = [
  { name: 'Maintenance', completion: 85 },
  { name: 'Cleaning', completion: 92 },
  { name: 'Security', completion: 88 },
  { name: 'Landscaping', completion: 78 },
  { name: 'Catering', completion: 95 },
  { name: 'Admin', completion: 90 },
];

const mockPerformanceData = [
  { name: 'On Track', value: 72, color: '#3182ce' },
  { name: 'Needs Attention', value: 18, color: '#f59e0b' },
  { name: 'At Risk', value: 10, color: '#ef4444' },
];

export const useCharts = () => {
  const { data: operationsData, isLoading: operationsLoading } = useApi('/api/operations');
  const { data: performanceData, isLoading: performanceLoading } = useApi('/api/performance');

  return {
    operationsData: operationsData || mockOperationsData,
    performanceData: performanceData || mockPerformanceData,
    isLoading: operationsLoading || performanceLoading,
  };
};
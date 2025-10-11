import { render, screen } from '@testing-library/react';
import OperationsChart from '../../../src/components/common/Charts/OperationsChart';
import PerformanceChart from '../../../src/components/common/Charts/PerformanceChart';
import { useCharts } from '../../../src/hooks/useCharts';

jest.mock('../../../src/hooks/useCharts');

describe('Charts', () => {
  it('renders OperationsChart with data', () => {
    useCharts.mockReturnValue({
      operationsData: [{ name: 'Maintenance', completion: 85 }],
      isLoading: false,
    });
    render(<OperationsChart />);
    expect(screen.getByText('Completion Rates by Service')).toBeInTheDocument();
  });

  it('renders PerformanceChart with data', () => {
    useCharts.mockReturnValue({
      performanceData: [{ name: 'On Track', value: 72, color: '#3182ce' }],
      isLoading: false,
    });
    render(<PerformanceChart />);
    expect(screen.getByText('Performance Metrics')).toBeInTheDocument();
  });
});
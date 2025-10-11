import { render, screen } from '@testing-library/react';
import ProgressBar from '../../src/components/common/ProgressBar';
import '@testing-library/jest-dom';

describe('ProgressBar', () => {
  it('renders progress bar with correct classes', () => {
    render(<ProgressBar />);
    expect(screen.getByTestId('bprogress')).toHaveClass('bprogress');
    expect(screen.getByTestId('bprogress')).toHaveClass('bar');
    expect(screen.getByTestId('bprogress')).toHaveClass('spinner');
    expect(screen.getByTestId('bprogress')).toHaveClass('indeterminate');
  });

  it('hides progress bar after loading', async () => {
    render(<ProgressBar />);
    expect(screen.getByTestId('bprogress')).toBeInTheDocument();
    // Wait for 3 seconds (simulated loading)
    await new Promise((resolve) => setTimeout(resolve, 3000));
    expect(screen.queryByTestId('bprogress')).not.toBeInTheDocument();
  });
});
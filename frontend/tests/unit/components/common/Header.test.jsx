import { render, screen } from '@testing-library/react';
import Header from '../../../src/components/common/Header';
import { useRouter } from 'next/router';

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

describe('Header', () => {
  it('renders header with title and navigation', () => {
    useRouter.mockReturnValue({ pathname: '/' });
    render(<Header />);
    expect(screen.getByText('Derivco Facilities')).toBeInTheDocument();
    expect(screen.getByText('Strategic Intelligence')).toBeInTheDocument();
  });
});
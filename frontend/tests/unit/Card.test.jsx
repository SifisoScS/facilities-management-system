import { render, screen } from '@testing-library/react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../../src/components/ui/card';
import '@testing-library/jest-dom';

describe('Card Components', () => {
  it('renders Card with correct styles', () => {
    render(<Card>Content</Card>);
    const card = screen.getByText('Content');
    expect(card).toHaveClass('rounded-lg');
    expect(card).toHaveClass('bg-white');
    expect(card).toHaveClass('shadow-sm');
  });

  it('renders CardHeader, CardTitle, CardDescription, and CardContent', () => {
    render(
      <Card>
        <CardHeader>
          <CardTitle>Title</CardTitle>
          <CardDescription>Description</CardDescription>
        </CardHeader>
        <CardContent>Content</CardContent>
      </Card>
    );
    expect(screen.getByText('Title')).toHaveClass('text-lg');
    expect(screen.getByText('Description')).toHaveClass('text-sm');
    expect(screen.getByText('Content')).toBeInTheDocument();
  });
});
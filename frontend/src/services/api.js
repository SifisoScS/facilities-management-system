export const get = async (endpoint) => {
  if (endpoint === '/api/operations') {
    return [
      { name: 'Maintenance', completion: 85 },
      { name: 'Cleaning', completion: 92 },
      { name: 'Security', completion: 88 },
      { name: 'Landscaping', completion: 78 },
      { name: 'Catering', completion: 95 },
      { name: 'Admin', completion: 90 },
    ];
  }
  if (endpoint === '/api/performance') {
    return [
      { name: 'On Track', value: 72, color: '#3182ce' },
      { name: 'Needs Attention', value: 18, color: '#f59e0b' },
      { name: 'At Risk', value: 10, color: '#ef4444' },
    ];
  }
  throw new Error('Endpoint not found');
};

export const post = async (endpoint, body) => {
  // Implement POST requests when backend is ready
  throw new Error('POST not implemented');
};
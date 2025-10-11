import { renderHook, act } from '@testing-library/react-hooks';
import { useApi } from '../../../src/hooks/useApi';
import * as api from '../../../src/services/api';

jest.mock('../../../src/services/api');

describe('useApi', () => {
  it('fetches data successfully', async () => {
    api.get.mockResolvedValue([{ name: 'Test', value: 100 }]);
    const { result, waitForNextUpdate } = renderHook(() => useApi('/api/test'));

    expect(result.current.isLoading).toBe(true);
    await waitForNextUpdate();
    expect(result.current.data).toEqual([{ name: 'Test', value: 100 }]);
    expect(result.current.isLoading).toBe(false);
    expect(result.current.error).toBe(null);
  });
});
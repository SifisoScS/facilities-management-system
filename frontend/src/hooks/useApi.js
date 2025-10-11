import { useState, useEffect } from 'react';
import * as api from '../services/api';

export const useApi = (endpoint, method = 'GET', body = null) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        let response;
        switch (method.toUpperCase()) {
          case 'GET':
            response = await api.get(endpoint);
            break;
          case 'POST':
            response = await api.post(endpoint, body);
            break;
          default:
            throw new Error('Unsupported HTTP method');
        }
        setData(response);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [endpoint, method, body]);

  return { data, isLoading, error };
};
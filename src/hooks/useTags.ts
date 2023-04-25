import { useState, useEffect } from 'react';
import { ITagsList } from '../types/types';
import axios, { AxiosError } from 'axios';

export function useTags() {
  const [tags, setTags] = useState<ITagsList[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const API = 'https://api.quotable.io';

  async function getTags() {
    try {
      setError('');
      setLoading(true);
      const response = await axios.get<ITagsList[]>(`${API}/tags`);
      setTags(response.data);
      setLoading(false);
    } catch (e: unknown) {
      const error = e as AxiosError;
      setLoading(false);
      setError(error.message);
    }
  }

  useEffect(() => {
    getTags();
  }, [])

  return { tags, loading, error }
}

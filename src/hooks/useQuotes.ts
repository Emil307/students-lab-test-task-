import { useState, useEffect } from 'react';
import { IQuotesList } from '../types/types';
import axios, { AxiosError } from 'axios';

export function useQuotes() {
  const [quotes, setQuotes] = useState<IQuotesList[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const API = 'https://api.quotable.io';
  const tag = localStorage.getItem('tag');

  async function getQuotes() {
    try {
      if (!tag) {
        setError('');
        setLoading(true);
        const response = await axios.get<IQuotesList[]>(`${API}/quotes`);
        setQuotes(response.data.results);
        setLoading(false);
      }
      if (tag) {
        setError('');
        setLoading(true);
        const response = await axios.get<IQuotesList[]>(`${API}/quotes?tags=${tag}`);
        setQuotes(response.data.results);
        setLoading(false);
      }
    } catch (e: unknown) {
      const error = e as AxiosError;
      setLoading(false);
      setError(error.message);
    }
  }

  useEffect(() => {
    getQuotes();
  }, [])

  return { quotes, loading, error }
}
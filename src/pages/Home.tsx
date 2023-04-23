import React, { useState, useEffect } from 'react';
import { IQuotesList } from '../types/types';
import axios from 'axios';
import Header from '../components/Header';
import QuotesList from '../components/QuotesList';

const Home: React.FC = () => {
  const [quotes, setQuotes] = useState<IQuotesList[]>([]);

  const API = 'https://api.quotable.io';

  useEffect(() => {
    getQuotes();
  }, [])

  async function getQuotes() {
    try {
      const response = await axios.get<IQuotesList[]>(`${API}/quotes`);
      setQuotes(response.data.results);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <>
      <Header/>
      <QuotesList quotes={quotes}/>
    </>
  )
}

export default Home;
import React from 'react';
import { useQuotes } from '../hooks/useQuotes';
import Header from '../components/Header';
import QuotesList from '../components/QuotesList';

const Home: React.FC = () => {
  const {quotes, loading, error} = useQuotes();

  return (
    <>
      <Header/>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <QuotesList quotes={quotes}/>
    </>
  )
}

export default Home;
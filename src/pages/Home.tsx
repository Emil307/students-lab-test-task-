import React from 'react';
import { useQuotes } from '../hooks/useQuotes';
import Header from '../components/Header';
import QuotesList from '../components/QuotesList';
import LikeList from '../components/LikeList';

const Home: React.FC = () => {
  const {quotes, loading, error} = useQuotes();

  return (
    <>
      <Header/>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <QuotesList quotes={quotes}/>
      <LikeList/>
    </>
  )
}

export default Home;
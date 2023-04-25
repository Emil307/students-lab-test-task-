import React from 'react';
import styled from 'styled-components';
import { useQuotes } from '../hooks/useQuotes';
import Header from '../components/Header';
import QuotesList from '../components/QuotesList';
import TagsList from '../components/TagsList';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1170px;
  margin: 0 auto;
`

const Left = styled.div`
  height: 100%;
`

const Home: React.FC = () => {
  const {quotes, loading, error} = useQuotes();

  return (
    <>
      <Header/>
      <Container>
        <Left>
          {loading && <p>Loading...</p>}
          {error && <p>{error}</p>}
          <QuotesList quotes={quotes}/>
        </Left>
        <TagsList/>
      </Container>
    </>
  )
}

export default Home;
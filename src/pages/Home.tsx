import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import QuotesList from '../components/QuotesList';
import TagsList from '../components/TagsList';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1285px;
  margin: 0 auto;
`

const Home: React.FC = () => {
  return (
    <>
      <Container>
        <Header/>
        <QuotesList/>
        <TagsList/>
      </Container>
    </>
  )
}

export default Home;
import React from 'react';
import Header from '../components/Header';
import QuotesList from '../components/QuotesList';
import TagsList from '../components/TagsList';

import styled from 'styled-components';
import { devices } from '../app/styles/constants';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1285px;
  margin: 0 auto;

  @media (${devices.xl}) {
    max-width: 1078px;
  }

  @media (${devices.lg}) {
    max-width: 1008px;
  }

  @media (${devices.md}) {
    max-width: 670px;
  }
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
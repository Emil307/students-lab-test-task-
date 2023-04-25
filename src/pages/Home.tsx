import React from 'react';
import styled from 'styled-components';
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
  return (
    <>
      <Header/>
      <Container>
        <Left>
          <QuotesList/>
        </Left>
        <TagsList/>
      </Container>
    </>
  )
}

export default Home;
import React from 'react';
import styled from 'styled-components';
import { useQuotes } from '../hooks/useQuotes';
import Quote from './Quote';

const Container = styled.div`
  padding-top: 40px;
  padding-right: 40px;
`

const QuotesList: React.FC = () => {
  const {quotes, loading, error} = useQuotes();

  return (
    <Container>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {quotes.map(quote => 
        <Quote _id={quote._id} author={quote.author} content={quote.content} key={quote._id}/>
      )}
    </Container>
  )
}

export default QuotesList;
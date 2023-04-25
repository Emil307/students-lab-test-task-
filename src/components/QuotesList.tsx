import React from 'react';
import styled from 'styled-components';
import { IQuotesList } from '../types/types';
import Quote from './Quote';

interface QuotesListProps {
  quotes: IQuotesList[],
}

const Container = styled.div`
  padding-top: 40px;
  padding-right: 40px;
`

const QuotesList: React.FC<QuotesListProps> = ({quotes}) => {

  return (
    <Container>
      {quotes.map(quote => 
        <Quote _id={quote._id} author={quote.author} content={quote.content} key={quote._id}/>
      )}
    </Container>
  )
}

export default QuotesList;
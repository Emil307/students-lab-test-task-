import React from 'react';
import { IQuotesList } from '../types/types';

interface QuotesListProps {
  quotes: IQuotesList[],
}

const QuotesList: React.FC<QuotesListProps> = ({quotes}) => {
  return (
    <>
      {quotes.map(quote => 
        <div key={quote._id}>{quote.content}</div> 
      )}
    </>
  )
}

export default QuotesList
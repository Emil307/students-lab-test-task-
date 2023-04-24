import React from 'react';
import { IQuotesList } from '../types/types';
import Quote from './Quote';

interface QuotesListProps {
  quotes: IQuotesList[],
}

const QuotesList: React.FC<QuotesListProps> = ({quotes}) => {

  return (
    <>
      {quotes.map(quote => 
        <Quote _id={quote._id} author={quote.author} content={quote.content} key={quote._id}/>
      )}
    </>
  )
}

export default QuotesList;
import React from 'react';
import { useQuotes } from '../hooks/useQuotes';
import styled from 'styled-components';
import Quote from './Quote';

const Container = styled.div`
  width: 566px;
  padding: 14px 16px 0;
  border-right: 1px rgb(239, 243, 244) solid;
  border-left: 1px rgb(239, 243, 244) solid;
`

const QuotesList: React.FC = () => {
  const {quotes, loading, error} = useQuotes();

  return (
    <Container>
      {/* {loading && <p>Loading...</p>}
      {quotes.length > 0 ?
        <>
          {error && <p>{error}</p>}
          {quotes.map(quote => 
            <Quote _id={quote._id} author={quote.author} content={quote.content} key={quote._id}/>
          )}
        </>
        :
        <p>цитат по вашему запросу не найдено</p>
      } */}
      {loading ? <p>Loading...</p>
      :
      <>
        {quotes.length > 0 ?
          <>
            {error && <p>{error}</p>}
            {quotes.map(quote => 
              <Quote _id={quote._id} author={quote.author} content={quote.content} key={quote._id}/>
            )}
          </>
          :
          <p>цитат по вашему запросу не найдено</p>
        }
      </>
      }
    </Container>
  )
}

export default QuotesList;
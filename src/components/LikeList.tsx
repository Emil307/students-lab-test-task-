import React from 'react';
import styled from 'styled-components';
import Quote from './Quote';
import { IQuotesList } from '../types/types';

const Container = styled.div`
  width: 914px;
  padding: 14px 16px 0;
  border-left: 1px rgb(239, 243, 244) solid;
`

interface LikesListProps {
  likes: IQuotesList[],
}

const LikeList: React.FC<LikesListProps> = ({likes}) => {
  return (
    <Container>
      {likes.length > 0 ?
        <>
          {likes.map(quote => 
            <Quote _id={quote._id} author={quote.author} content={quote.content} key={quote._id}/>
          )}
        </>
        :
        <p>вы пока не добавили цитат</p>
      }
    </Container>
  )
}

export default LikeList;
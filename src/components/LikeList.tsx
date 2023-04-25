import React from 'react';
import Quote from './Quote';
import { IQuotesList } from '../types/types';

interface LikesListProps {
  likes: IQuotesList[],
}

const LikeList: React.FC<LikesListProps> = ({likes}) => {
  return (
    <>
      {likes.length > 0 ?
        <>
          {likes.map(quote => 
            <Quote _id={quote._id} author={quote.author} content={quote.content} key={quote._id}/>
          )}
        </>
        :
        <p>вы пока не добавили цитат</p>
      }
    </>
  )
}

export default LikeList;
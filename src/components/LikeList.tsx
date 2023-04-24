import React from 'react';
import { useTypesSelector } from '../hooks/useTypedSelector';
import Quote from './Quote';

const LikeList: React.FC = () => {
  const {likes} = useTypesSelector(state => state.like);
  console.log(likes);
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
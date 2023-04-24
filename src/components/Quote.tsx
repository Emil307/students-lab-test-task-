import React from 'react';
import styled from 'styled-components';
import likeIcon from '../icons/like-icon.svg';
import { useTypesDispatch } from '../hooks/useTypedDispatch';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: calc(100% - 40px - 4px);
  height: calc(100% - 40px);
  padding: 20px 20px;
  border: 2px #ddd solid;
  border-radius: 20px;
`

interface QuoteProps {
  _id: string,
  author: string,
  content: string,
}

const Quote: React.FC<QuoteProps> = ({_id, author, content}) => {
  const dispatch = useTypesDispatch();

  function addLikedQuote() {
    const quote = {
      _id,
      author,
      content,
    }
    dispatch({type: "ADD_LIKED_QUOTE", payload: quote})
    console.log(quote);
  }

  return (
    <Container>
      <div>
        <span>{_id}</span>
        <h1>{author}</h1>
        <p>{content}</p>
      </div>
      <button onClick={addLikedQuote}><img src={likeIcon} alt="like" /></button>
    </Container>
  )
}

export default Quote
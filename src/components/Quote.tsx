import React from 'react';
import styled from 'styled-components';
import likeIcon from '../icons/like-icon.svg';
import { IQuotesList } from '../types/types';

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

const Quote: React.FC<QuoteProps> = ({_id, author, content, }) => {
  let likes: QuoteProps[] = [];

  function addLike(quote: QuoteProps) {
    localStorage.setItem('likes', JSON.stringify([...likes, quote]));
  }

  function removeLike(quote: QuoteProps) {
    likes = likes.filter((item) => {
      return item._id != quote._id;
    });
    localStorage.setItem('likes', JSON.stringify(likes));
    location.reload();
  }

  function updateLikesList() {
    likes = JSON.parse(localStorage.getItem('likes')!);
    const quote: IQuotesList = {
      _id,
      author,
      content,
      authorSlug: '',
      length: 1,
      tags: [],
    }

    const currentQuote = likes.some(item => {
      return item._id === quote._id;
    })
    
    if (currentQuote) {
      removeLike(quote);
    } else {
      addLike(quote);
    }
  }

  return (
    <Container>
      <div>
        <span>{_id}</span>
        <h1>{author}</h1>
        <p>{content}</p>
      </div>
      <button onClick={updateLikesList}><img src={likeIcon} alt="like" /></button>
    </Container>
  )
}

export default Quote
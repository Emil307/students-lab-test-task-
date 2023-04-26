import React from 'react';
import styled from 'styled-components';
import likeIcon from '../icons/like-icon.svg';
import likedIcon from '../icons/liked-icon.svg';
import { IQuotesList } from '../types/types';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: calc(100% - 40px - 4px);
  height: calc(100% - 40px);
  padding: 20px 20px;
  border: 2px #ddd solid;
  border-radius: 20px;
  margin-bottom: 20px;
`

interface QuoteProps {
  _id: string,
  author: string,
  content: string,
}

const Quote: React.FC<QuoteProps> = ({_id, author, content, }) => {

  let likes: QuoteProps[] = [];
  likes = JSON.parse(localStorage.getItem('likes')!);

  const liked = likes !== null ? likes.some(item => {
    return item._id === _id;
  }) : false;

  function addLike(quote: QuoteProps) {
    likes = JSON.parse(localStorage.getItem('likes')!);
    localStorage.setItem('likes', JSON.stringify([...likes, quote]));
    location.reload();
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

    const currentQuote = likes !== null ? likes.some(item => {
      return item._id === quote._id;
    }) : false;
    
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
      <button onClick={updateLikesList}>
        {liked ? <img src={likedIcon} alt="liked" /> : <img src={likeIcon} alt="like" />}
      </button>
    </Container>
  )
}

export default Quote;
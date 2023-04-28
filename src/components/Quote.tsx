import React from 'react';
import styled from 'styled-components';
import likeIcon from '../icons/like-icon.svg';
import likedIcon from '../icons/liked-icon.svg';
import { IQuotesList } from '../types/types';

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 12px 0;
`

const Content = styled.div``

const Title = styled.h2`
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.2;

  color: #0f0f0f;
  margin-bottom: 10px;
`

const Text = styled.p`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 15px;

  color: #606060;
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
      <Content>
        <Title>{author}</Title>
        <Text>{content}</Text>
      </Content>
      <button onClick={updateLikesList}>
        {liked ? <img src={likedIcon} alt="liked" /> : <img src={likeIcon} alt="like" />}
      </button>
    </Container>
  )
}

export default Quote;
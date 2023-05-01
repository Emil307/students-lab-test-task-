import React from 'react';
import styled from 'styled-components';
import likedIcon from '../icons/liked-icon.svg';
import { IQuotesList } from '../types/types';

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 12px 0;
`

const Content = styled.div`
  width: calc(100% - 50px);
`

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

const LikePath = styled.path``

const LikeButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  transition: all .2s ease;
  &: hover {
    background: rgba(249, 24, 128, .2);
    ${LikePath} {
      fill: rgb(249, 24, 128);
    }
  }
`

interface QuoteProps {
  _id: string,
  author: string,
  content: string,
}

const Quote: React.FC<QuoteProps> = ({_id, author, content, }) => {

  let likes: QuoteProps[] = [];
  likes = JSON.parse(localStorage.getItem('likes')!);
  if (likes === null) {
    localStorage.setItem('likes', JSON.stringify([]));
  }

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
      <LikeButton onClick={updateLikesList}>
        {liked ? 
          <img src={likedIcon} alt="liked" /> 
        : 
          <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <LikePath d="M5.234 0C2.582 0 0 1.829 0 5.177C0 8.902 4.345 12.904 9.303 17.717C9.497 17.906 9.749 18 10 18C10.251 18 10.503 17.906 10.697 17.717C15.674 12.886 20 8.903 20 5.177C20 1.824 17.42 0.00900006 14.771 0.00900006C12.935 0.00900006 11.125 0.875 10 2.563C8.87 0.867 7.065 0 5.234 0ZM5.234 1.5C7.224 1.501 8.436 2.853 9.389 4.2C9.529 4.398 9.757 4.516 10 4.517C10.243 4.517 10.471 4.4 10.612 4.203C11.567 2.864 12.802 1.509 14.771 1.509C16.567 1.509 18.5 2.657 18.5 5.177C18.5 7.848 15.619 10.85 10 16.304C4.546 11.019 1.5 7.915 1.5 5.177C1.5 4.052 1.889 3.108 2.624 2.45C3.297 1.846 4.249 1.5 5.234 1.5Z" fill="#536471"/>
          </svg>
        }
      </LikeButton>
    </Container>
  )
}

export default Quote;
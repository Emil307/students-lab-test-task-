import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import LikeList from '../components/LikeList';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1285px;
  margin: 0 auto;
`

const Profile: React.FC = () => {

  const likes = JSON.parse(localStorage.getItem('likes')!)

  return (
    <Container>
      <Header/>
      <LikeList likes={likes}/>
    </Container>
  )
}

export default Profile;
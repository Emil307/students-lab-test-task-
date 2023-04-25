import React from 'react';
import Header from '../components/Header';
import LikeList from '../components/LikeList';

const Profile: React.FC = () => {

  const likes = JSON.parse(localStorage.getItem('likes')!)

  return (
    <>
      <Header/>
      <LikeList likes={likes}/>
    </>
  )
}

export default Profile;
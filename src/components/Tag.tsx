import React, { useState } from 'react';
import styled, { css } from 'styled-components';

const buttonStyles = css`
  font-family: 'Roboto', sans-serif;
  padding: 10px 15px;
  border-radius: 6px;
  transition: background-color 0.5s cubic-bezier(0.05,0,0,1); 
`

const Button = styled.button`
  background: rgba(0, 0, 0, 0.05);
  color: #0f0f0f;
  &:hover {
    background: rgba(0, 0, 0, 0.1);
  } 
  ${buttonStyles}
`

const ActiveButton = styled.button`
  background: #0f0f0f;
  color: #fff;
  ${buttonStyles}
`

interface TagProps {
  name: string,
  _id: string
}

const Tag: React.FC<TagProps> = ({ _id, name }) => {
  const [active, setActive] = useState(localStorage.getItem('tag'));

  function addTag() {
    localStorage.setItem('tag', name);
    location.reload();
  }

  function removeTag() {
    localStorage.removeItem('tag');
    location.reload();
  }

  function updateTag() {
    if (active == name) {
      removeTag();
    }
    if (active != name) {
      addTag();
    }
  }

  return (
    <>
      {active == name ?
        <ActiveButton onClick={updateTag}>{name}</ActiveButton>
        :
        <Button onClick={updateTag}>{name}</Button>
      }
    </>
  )
}

export default Tag;
import React, { useState } from 'react';
import styled from 'styled-components';

const Button = styled.button`
  font-family: 'Roboto', sans-serif;
  padding: 10px 15px;
  border-radius: 6px;
  background: rgba(0, 0, 0, 0.05);
  color: #0f0f0f;
  transition: background-color 0.5s cubic-bezier(0.05,0,0,1);
  &:hover {
    background: rgba(0, 0, 0, 0.1);
  }
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
    <Button onClick={updateTag}>{name}</Button>
  )
}

export default Tag;
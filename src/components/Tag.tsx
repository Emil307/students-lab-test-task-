import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  border: 1px #ddd solid;
  padding: 10px 15px;
  border-radius: 6px;
  transition: all .2s ease;
  &:hover {
    background: #000;
    color: #fff;
  }
`

interface TagProps {
  name: string,
  _id: string
}

const Tag: React.FC<TagProps> = ({ _id, name }) => {
  function addTag() {
    localStorage.setItem('tag', name);
    console.log(localStorage.getItem('tag'));
  }

  return (
    <Button onClick={addTag}>{name}</Button>
  )
}

export default Tag;
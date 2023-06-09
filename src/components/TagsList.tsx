import React from 'react';
import { useTags } from '../hooks/useTags';
import Tag from './Tag';

import styled from 'styled-components';
import { devices } from '../app/styles/constants';

const Container = styled.div`
  width: 338px;
  padding-left: 10px;
  padding-top: 26px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(23, 32px);
  gap: 10px 10px;

  @media (${devices.lg}) {
    grid-template-columns: repeat(2, 1fr);
    width: 290px;
  }

  @media (${devices.md}) {
    display: none;
  }
`

const TagsList: React.FC = () => {
  const { tags, loading, error } = useTags();

  return (
    <Container>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {tags.map(tag => 
        <Tag _id={tag._id} name={tag.name} key={tag._id}/>
      )}
    </Container>
  )
}

export default TagsList
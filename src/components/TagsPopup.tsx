import React from 'react';
import { useTags } from '../hooks/useTags';
import Tag from './Tag';

import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(23, 32px);
  gap: 10px 10px;
`

const TagsPopup: React.FC = () => {
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

export default TagsPopup;
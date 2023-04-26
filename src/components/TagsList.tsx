import React from 'react';
import { useTags } from '../hooks/useTags';
import Tag from './Tag';
import styled from 'styled-components'; 

const Container = styled.div`
  max-width: 490px;
  border-left: 1px #ddd solid;
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
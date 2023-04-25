import React from 'react';
import { useTags } from '../hooks/useTags';
import styled from 'styled-components'; 

const Container = styled.div`
  max-width: 490px;
  border-left: 1px #ddd solid;
`

const TagsList: React.FC = () => {
  const { tags, loading, error } = useTags();
  console.log(tags);
  return (
    <Container>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {tags.map(tag => 
        <div key={tag._id}>{tag.name}</div>
      )}
    </Container>
  )
}

export default TagsList
import React from 'react';

import styled from 'styled-components';

const Container = styled.div`
  width: 72px;
  height: 100px;
  padding: 0 8px;

  display: flex;
  justify-content: center;
  align-items: center;
`

const Sidebar: React.FC = () => {
  return (
    <Container>
      <a href='/'>home</a>
    </Container>
  )
}

export default Sidebar
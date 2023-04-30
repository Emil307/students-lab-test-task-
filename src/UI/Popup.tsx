import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, .4);

  display: flex;
  justify-content: center;
`

const Content = styled.div`
  margin: 20px 0;
  padding: 10px;
  width: 260px;
  background-color: #fff;
  border-radius: 10px;
  overflow: auto;
`

interface PopupProps {
  active: boolean,
  children?: React.ReactNode,
}

const Popup: React.FC<PopupProps> = ({ active, children }) => {
  return (
    <div>
      {active ?
        <Container>
          <Content>
            {children}
          </Content>
        </Container>
        : <></>
      }      
    </div>
  )
}

export default Popup
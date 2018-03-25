import * as React from 'react';
import Sidebar from './Sidebar';
import styled from 'styled-components';
import './index.css';

const Container = styled.div`
  background-color: #2a3742;
  height: 100vh;
`;

class Home extends React.Component<{}, {}> {
  public render() {
    return (
      <Container className="Home  pt-dark">
        <Sidebar />
      </Container>
    );
  }
}

export default Home;

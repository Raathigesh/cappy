import * as React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 13px !important;
  margin-bottom: 6px;
`;

interface ComponentProps {
  component: {
    name: string;
    path: string;
  };
}

export default function Component({ component }: ComponentProps) {
  return (
    <Container className="pt-card pt-interactive">
      <h5>
        <a>{component.name}</a>
      </h5>
      <p>{component.path}</p>
    </Container>
  );
}

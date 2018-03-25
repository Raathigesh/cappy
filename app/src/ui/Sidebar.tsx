import * as React from 'react';
import QuickImport from '../extensions/quick-import/ui';
import styled from 'styled-components';

const Container = styled.div`
  padding: 3px;
`;

export default function Sidebar() {
  return (
    <Container>
      <QuickImport />
    </Container>
  );
}

import * as React from 'react';
import styled from 'styled-components';
import { Button } from '@blueprintjs/core';
import { observer } from 'mobx-react';

const Container = styled.div`
  padding: 10px;
  font-size: 16px;
  border-radius: 20px;
  font-weight: 600;
  background-color: #deeede;
`;

const AddButton = styled(Button)`
  margin-left: 10px;
  border-radius: 50px !important;
`;

interface Props {
  path: string;
  setBookmark: (path: string) => void;
}

function AvtiveEditor({ path, setBookmark }: Props) {
  if (!path) {
    return null;
  }

  return (
    <Container>
      {path}
      <AddButton
        rightIcon="arrow-right"
        intent="success"
        onClick={() => {
          setBookmark(path);
        }}
      />
    </Container>
  );
}

export default observer(AvtiveEditor);

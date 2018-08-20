import * as React from 'react';
import styled from 'styled-components';
import { Button } from '@blueprintjs/core';
import { observer } from 'mobx-react';

const Container = styled.div``;

interface Props {
  path: string;
  setBookmark: (path: string) => void;
}

function AvtiveEditor({ path, setBookmark }: Props) {
  return (
    <Container>
      {path}
      <Button
        rightIcon="arrow-right"
        intent="success"
        text="Next step"
        onClick={() => {
          setBookmark(path);
        }}
      />
    </Container>
  );
}

export default observer(AvtiveEditor);

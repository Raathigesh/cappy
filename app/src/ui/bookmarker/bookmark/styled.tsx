import styled from 'styled-components';
import { Card, EditableText } from '@blueprintjs/core';

const Container = styled(Card)`
  width: 300px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px;
`;

const Header = styled.div`
  font-family: Roboto;
  font-size: 14px;
  color: #000000;
`;

const FilePath = styled.div`
  font-family: Roboto;
  font-size: 12px;
  color: #6e6e6e;
  margin-top: 5px;
`;

const Comment = styled.div`
  font-family: Roboto;
  font-size: 12px;
  color: #6e6e6e;
  margin-top: 5px;
`;

const EditableComment = styled(EditableText as any)`
  font-size: 15px;
  margin-top: 5px;
  background-color: #f0f0ff;
  padding: 4px;
  border-radius: 3px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  word-break: break-all;
`;

export { Container, Header, FilePath, Comment, Content, EditableComment };

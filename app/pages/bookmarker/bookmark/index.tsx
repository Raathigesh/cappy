import React from "react";
import Draggale from "react-draggable";
import { Emoji, Picker } from "emoji-mart";
import { Elevation } from "@blueprintjs/core";
import {
  Container,
  Header,
  FilePath,
  Comment,
  Content,
  EditableComment
} from "./styled";
import BookmarkStore from "../store/bookmark";

import "emoji-mart/css/emoji-mart.css";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import { observer } from "mobx-react";

interface Props {
  item: BookmarkStore;
  openInEditor: (path: string) => void;
}

@observer
export default class Bookmark extends React.Component<Props> {
  state = {
    isPickerOpen: false,
    emoji: "santa"
  };

  openPicker = () => {
    this.setState({
      isPickerOpen: true
    });
  };

  render() {
    const {
      item: { title, path, comment },
      openInEditor
    } = this.props;
    return (
      <Draggale cancel=".not-draggable">
        <Container
          elevation={Elevation.THREE}
          interactive
          onClick={() => {
            openInEditor(path);
          }}
        >
          {this.state.isPickerOpen && (
            <Picker
              set="emojione"
              onSelect={e =>
                this.setState({
                  emoji: e.id,
                  isPickerOpen: false
                })
              }
              style={{ position: "absolute" }}
            />
          )}
          <Emoji
            emoji={{ id: this.state.emoji, skin: 3 }}
            size={28}
            onClick={this.openPicker}
          />
          <Content>
            <Header>{title}</Header>
            <FilePath>{path}</FilePath>
            <Comment>
              <EditableComment
                className="not-draggable"
                value={comment}
                onChange={(value: string) => {
                  this.props.item.setComment(value);
                }}
              />
            </Comment>
          </Content>
        </Container>
      </Draggale>
    );
  }
}

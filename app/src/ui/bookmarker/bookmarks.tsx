import * as React from 'react';
import Bookmark from './bookmark';
import BookmarkType from './store/bookmark';
import { IObservableArray } from 'mobx';
import { observer } from 'mobx-react';
import ActiveEditor from './active-editor';

interface Props {
  currentPath: string;
  bookmarks: IObservableArray<BookmarkType>;
  openInEditor: (path: string) => void;
  setBookmark: (path: string) => void;
}

function Bookmarker({
  currentPath,
  bookmarks,
  openInEditor,
  setBookmark
}: Props) {
  return (
    <div>
      <ActiveEditor path={currentPath} setBookmark={setBookmark} />
      {bookmarks.map(bookmark => (
        <Bookmark item={bookmark} openInEditor={openInEditor} />
      ))}
    </div>
  );
}

export default observer(Bookmarker);

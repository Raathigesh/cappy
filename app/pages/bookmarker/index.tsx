import React from "react";
import BookmarksStore from "./store/bookmarks";
import Bookmarks from "./bookmarks";
import { observer } from "mobx-react";

const bookmarkStore = new BookmarksStore();

const BookmarksContainer = observer(() => (
  <Bookmarks
    bookmarks={bookmarkStore.bookmarks}
    openInEditor={bookmarkStore.openInEditor}
    setBookmark={bookmarkStore.setBookmark}
    currentPath={bookmarkStore.activeFile}
  />
));

export default BookmarksContainer;

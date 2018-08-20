import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Bookmarker from './ui/bookmarker';

const BookMarker = () => <Bookmarker />;

ReactDOM.render(<BookMarker />, document.getElementById('root') as HTMLElement);

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Bookmarker from './ui/bookmarker';
import 'typeface-roboto';

const BookMarker = () => <Bookmarker />;

ReactDOM.render(<BookMarker />, document.getElementById('root') as HTMLElement);

import * as React from 'react';
import { Provider } from 'unstated';
import Home from './Home';

import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';

const App = () => (
  <Provider>
    <Home />
  </Provider>
);

export default App;

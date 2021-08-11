import { render as Render } from 'react-dom';

import transitionPause from './utilities/transitionPause';

// COMPONENTS //
import App from './App';

Render(<App />, document.getElementById('app'));

// TRANSITION PAUSE //
transitionPause();

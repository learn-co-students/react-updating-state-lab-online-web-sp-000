import React from 'react';
import ReactDOM from 'react-dom';

import DigitalClicker from './components/DigitalClicker.js';
import YouTubeDebugger from './components/YouTubeDebugger.js';

ReactDOM.render(
  <div>
    <DigitalClicker />
    <YouTubeDebugger />
  </div>,
  document.getElementById('global')
);

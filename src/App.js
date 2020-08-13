import React from 'react';
import AnalogClock from './features/clock/AnalogClock';
import DigitalClock from './features/clock/DigitalClock';
import './App.css';
import { Typography } from '@material-ui/core';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Typography variant="h3">Welcome</Typography>
        <AnalogClock />
        <DigitalClock />
      </div>
    </div>
  );
}

export default App;

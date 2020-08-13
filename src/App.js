import React from 'react';
import AnalogClock from './features/clock/AnalogClock';
import DigitalClock from './features/clock/DigitalClock';
import { Typography } from '@material-ui/core';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App-body">
        <Typography variant="h3">Clock Synchronization Challenge</Typography>
        <Typography variant="h5">
          Update the time using a 24-hour clock. Seconds are in real time.
        </Typography>
        <AnalogClock />
        <DigitalClock />
      </div>
    </div>
  );
}

export default App;

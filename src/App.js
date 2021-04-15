import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react'
import Track from './components/Track'

function App() {

  let patternLen = 16
  let bpm = 250
  let clockSpd = Math.round(((60 * 1000) / bpm) / 4)
  let playing = true

  let [activeStep, setStep] = useState(0);


  // TODO: Move to higher level
  useEffect(() => {
    // console.log('use effect called');
    if (playing) {
      const interval = setInterval(() => {
        // console.log(activeStep);
        setStep(activeStep < patternLen - 1 ? activeStep += 1 : activeStep = 0);
      }, clockSpd);
      return () => {
        clearInterval(interval);
      };
    }
  });

  return (
    <div className="App">
      <Track
        patternLen={patternLen}
        activeStep={activeStep}
      />
    </div>
  );
}

export default App;

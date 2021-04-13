import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react'
import Track from './components/Track'

function App() {

  let patternLen = 16
  let bpm = 128
  let clockSpd = Math.round(((60 * 1000) / bpm) / 4)
  let playing = true

  let [step, setStep] = useState(0);

  useEffect(() => {
    if (playing) {
      const interval = setInterval(() => {
        setStep(step < patternLen ? step += 1 : step = 1);
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
        step={step}
      />
    </div>
  );
}

export default App;

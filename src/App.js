import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react'
import Track from './components/Track'

function App() {

  let patternLen = 16
  let bpm = 160
  let clockSpd = Math.round(((60 * 1000) / bpm) / 4)
  let playing = true
  let [playPosition, setPlayPosition] = useState(0);

  // TODO: Move to higher level
  useEffect(() => {
    
    if (playing) {
      const interval = setInterval(() => {
        
        setPlayPosition(playPosition < patternLen - 1 ? playPosition += 1 : playPosition = 0);
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
        playPosition={playPosition}
      />
    </div>
  );
}

export default App;

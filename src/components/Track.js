import React, { useState } from 'react'
import './Track.css';
import Step from './Step';

function Track(props) {

  const [pattern, setStep] = useState(new Array(props.patternLen).fill(false))
  
  const steps = pattern.map((step, index) => {
    return <Step
      stepIndex={index}
      pattern={pattern}
      playPosition={props.playPosition}
      setStep={setStep}
    />
  })

  return (
    <div>
      {steps}
    </div>
  )
}

export default Track;

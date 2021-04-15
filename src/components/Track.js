import React, { useState } from 'react'
import './Track.css';
import Step from './Step';

function Track(props) {

  // console.log('track active step:', props.activeStep);

  const [pattern, setPattern] = useState(new Array(props.patternLen).fill(0))

  const steps = pattern.map((step, index) => {
    return <Step stepIndex={index} activeStep={props.activeStep} />
  })

  return (
    <div>
      <div className='step-row'>
        {steps}
      </div>
    </div>
  )
}

export default Track;

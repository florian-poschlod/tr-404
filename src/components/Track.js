import React from 'react';
import './Track.css';
import Step from './Step';

function Track(props) {
  const pattern = new Array(props.patternLen).fill(0)

  const steps = pattern.map((step, index) => {
    return <Step step={index} activeStep={props.step} />
  })

  return (
    <div>
      <h1>Track</h1>
      <h1>Step: {props.step}</h1>
      <div className='step-row'>
        {steps}
      </div>
    </div>
  )
}

export default Track;

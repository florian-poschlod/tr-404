import React, { useState, useEffect } from 'react'
import './Step.css';


function Step(props) {

  // console.log('step props active step', props.activeStep);
  // const [activeStep, setActiveStep] = useState(props.activeStep)


  if (props.stepIndex === props.activeStep) {
    return (
      <div key={props.stepIndex} className='step-active'>
      </div>
    )
  }

  else {
    return (
      <div key={props.stepIndex} className='step-default'>
        <p>{props.stepIndex + 1}</p>
      </div>
    )
  }
}

export default Step;

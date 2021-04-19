import React, { useState } from 'react'
import './Step.css';


function Step(props) {

  const changePattern = () => {
    let pattern = [...props.pattern]
    pattern[props.stepIndex] = !pattern[props.stepIndex]
    return pattern
  }

  const playing = props.stepIndex === props.playPosition

  return (
    <div key={props.stepIndex} className={playing ? 'step-playing' : 'step-default'}>

        <button
        onClick={() => props.setStep(changePattern())}
        className={props.pattern[props.stepIndex] ? 'active' : 'default'}
        >
        {props.stepIndex +1}
        </button>

      </div>
    )
}

export default Step;

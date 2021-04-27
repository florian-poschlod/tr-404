import React, { useState } from 'react'
import './Step.css';

function Step(props) {
    // console.log('step called');
    // console.log('step play pos', props.playPosition);

    const handleStepToggle = () => {
        let pattern = [...props.pattern]
        pattern[props.stepIndex] = !pattern[props.stepIndex]
        return pattern
    }

    const playing = props.stepIndex === props.playPosition

    return (
        <div key={props.stepIndex} className={playing ? 'step-playing' : 'step-default'}>
            <button
                onClick={() => props.setPattern(handleStepToggle())}
                className={'step', props.pattern[props.stepIndex] ? 'active' : 'default'}
        >
            {props.stepIndex + 1}
        </button>

      </div >
    )
}

export default Step;

import React from 'react'

function Step(props) {

  return (
    <div>
      <p>{props.step}</p>
      <p>{props.activeStep}</p>
    </div>
  )
}

export default Step;

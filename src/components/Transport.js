import React, { useState } from 'react'

function Transport(props) {
    return (
        <div>
            {/* <button onClick={() => props.toggleStartStop()}>
                {props.isPlaying ? 'Stop' : 'Start'}
            </button> */}
            <input
                type="range"
                id="bpm"
                name="bpm"
                value={props.bpm}
                min="1"
                max="250"
                step="1"
                onChange={event => props.setBpm(event.target.value)}
            />
            <h2>{props.bpm} BPM</h2>
        </div>
    )
}

export default Transport;

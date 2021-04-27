import React, { useState, useEffect } from 'react'
import './Track.css';
import Step from './Step';

function Track(props) {
    // console.log('track called');
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    const audioCtx = new AudioContext()

    const [pattern, setPattern] = useState(new Array(props.patternLength).fill(false))
    // let sample
    const [sample, setSample] = useState(null)

    // console.log(sample);

    useEffect(() => {
        if (pattern[props.playPosition]) {
            loadSample()
            playSample()
            console.log('booom!');
        }
    })

    async function loadSample() {
        console.log('load sample called');
        const sampleData = await fetch('./kick-909.wav')
        const buffer = await sampleData.arrayBuffer()
        const decodedSample = await audioCtx.decodeAudioData(buffer)
        setSample(decodedSample)
    }

    function playSample() {
        console.log('play sample called');
        // console.log(sample);
        const samplePlayer = audioCtx.createBufferSource()
        samplePlayer.playbackRate.value = 1
        samplePlayer.buffer = sample
        samplePlayer.connect(audioCtx.destination)
        samplePlayer.start(0)
    }


    // if (pattern[props.playPosition]) {
    //     console.log('booom!');
    //     playSample()
    // }

    const steps = pattern.map((step, index) => {
        return <Step
            stepIndex={index}
            pattern={pattern}
            playPosition={props.playPosition}
            setPattern={setPattern}
        />
    })

    return (
        <div>
            {steps}
        </div>
    )
}

export default Track;

import React, {useState} from 'react'

export default function TriggerInterval() {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    const audioCtx = new AudioContext()
    let sample
    let clock
    // let isPlaying = false
    const [isPlaying, setIsPlaying] = useState(false)


    async function loadSample() {
        const sampleData = await fetch('./kick-909.wav')
        const buffer = await sampleData.arrayBuffer()
        const decodedSample = await audioCtx.decodeAudioData(buffer)
        sample = decodedSample
    }

    function playSample() {
        console.log('playSample called');
        console.log('sample', sample);
        const samplePlayer = audioCtx.createBufferSource()
        samplePlayer.playbackRate.value = 1
        samplePlayer.buffer = sample
        console.log(samplePlayer.buffer);
        samplePlayer.connect(audioCtx.destination)
        samplePlayer.start(0)
        console.log('boooom!');
    }

    function setClock() {
        clock = setInterval(() => {
            console.log('tick')
            playSample()
        }, 1000)
    }

    function toggleStartStop() {
        if(isPlaying) {
            clearInterval(clock)
            setIsPlaying(false)
            // isPlaying = !isPlaying
        } else {
            setClock()
            setIsPlaying(true)
            // isPlaying = !isPlaying
        }
    }

    loadSample().catch(error => console.log(error))

    return (
        <div className="container">
            <button onClick={() => toggleStartStop()}>Start Interval</button>
            <h2>Trigger Interval</h2>
        </div>
    )
}

import './App.css';
import React, { useEffect, useState, useRef } from 'react'
import Track from './components/Track'
import Transport from './components/Transport'
import TriggerInterval from './components/TriggerInterval.js'

function App() {
    // console.log('app called');
    // const AudioContext = window.AudioContext || window.webkitAudioContext;
    // const audioCtx = new AudioContext()

    const [clockSpeed, setClockSpeed] = useState((60 * 1000) / 128)
    const [patternLength, setPatternLength] = useState(16)
    const [isRunning, setIsRunning] = useState(false)
    const [playPosition, setPlayPosition] = useState(0)

    // let playPosition = 0

    let sample
    let clock

    // useEffect(() => {
    //     let clock
    //     if (isRunning) {
    //         clock = setInterval(() => {
    //             playSample()
    //             console.log(playPosition);
    //             if (playPosition < patternLength) {
    //                 playPosition = playPosition + 1
    //             }
    //             if (playPosition === patternLength) {
    //                 playPosition = 0
    //             }
    //         }, 1000);
    //     }
    //     return () => clearInterval(clock);
    // },);

    useInterval(() => {
        // playSample()
        // console.log(playPosition);
        if (playPosition < patternLength) {
            setPlayPosition(playPosition + 1)
        }
        if (playPosition === patternLength) {
            setPlayPosition(0)
        }
    }, isRunning ? clockSpeed : null);


    function useInterval(callback, delay) {
        const savedCallback = useRef();
        // Remember the latest callback.
        useEffect(() => {
            savedCallback.current = callback;
        }, [callback]);
        // Set up the interval.
        useEffect(() => {
            function tick() {
                savedCallback.current();
            }
            if (delay !== null) {
                let id = setInterval(tick, delay);
                return () => clearInterval(id);
            }
        }, [delay]);
    }

    function toggleStartStop() {
        if (isRunning) {
            setIsRunning(false)
        } else {
            setIsRunning(true)
        }
    }

    // async function loadSample() {
    //     console.log('load sample called');
    //     const sampleData = await fetch('./kick-909.wav')
    //     const buffer = await sampleData.arrayBuffer()
    //     const decodedSample = await audioCtx.decodeAudioData(buffer)
    //     sample = decodedSample
    // }

    // function playSample() {
    //     console.log('play sample called');
    //     const samplePlayer = audioCtx.createBufferSource()
    //     samplePlayer.playbackRate.value = 1
    //     samplePlayer.buffer = sample
    //     samplePlayer.connect(audioCtx.destination)
    //     samplePlayer.start(0)
    // }

    // loadSample().catch(error => console.log(error))

    return (
        <div className="App">
            <div className="Main">
                <button onClick={() => toggleStartStop()}>Click me!</button>
                <Track
                    playPosition={playPosition}
                    patternLength={patternLength}
                />
            </div>
        </div>
    );
}

export default App;

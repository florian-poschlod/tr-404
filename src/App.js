import logo from './logo.svg';
import './App.css';

function App() {

  let patternLen = 16
  let step = 0
  let bpm = 128
  let clockSpd = Math.round(((60 * 1000) / bpm) / 4)
  let playing = true

  const transport = () => {
    console.log('transport called');
    if (playing) {
      setInterval(() => {
        (step === 1 || step % 4 === 0) ? console.log('bam!') : console.log(step)
        step < patternLen ? step++ : step = 1
      }, clockSpd);
    }
  }

  transport()

  return (
    <div className="App">
      <h1>Hello!</h1>
    </div>
  );
}

export default App;

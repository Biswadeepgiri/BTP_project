import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import AudioRecorder from './components/AudioRecorder';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />

        <AudioRecorder />
      </header>
    </div>
  );
}

export default App;

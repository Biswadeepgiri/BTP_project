import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import AudioRecorder from './components/AudioRecorder';
import LyricsComponent from './components/Lyrics';

function App() {
  return (
    <div className="App min-h-screen bg-gray-900 text-white">
      <header className="App-header p-4 sm:p-6 lg:p-8">
        <Header />

        <div className="flex flex-col lg:flex-row gap-6 mt-6 lg:mt-8 items-center justify-center">
          {/* Audio Recorder Component */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <AudioRecorder />
          </div>

          {/* Lyrics Component */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <LyricsComponent />
          </div>
        </div>
      </header>
    </div>
  );

}

export default App;

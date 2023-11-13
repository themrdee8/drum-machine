import './App.css'
import { DrumSounds } from './type'
import Drum from './Drum'

const drumSounds: DrumSounds[] = [
  {
    keyTrigger: "Q",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
    description: "Heater 1"
  },
  {
    keyTrigger: "W",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
    description: "Heater 2"
  },
  {
    keyTrigger: "E",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
    description: "Heater 3"
  },
  {
    keyTrigger: "A",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
    description: "Heater 4"
  },
  {
    keyTrigger: "S",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
    description: "Clap"
  },
  {
    keyTrigger: "D",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
    description: "Open-HH"
  },
  {
    keyTrigger: "Z",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
    description: "Kick-n'-Hat"
  },
  {
    keyTrigger: "X",
    url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
    description: "Kick"
  },
  {
    keyTrigger: "C",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
    description: "Close-HH"
  }
  
]
function App() {

  const playAudio = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const sound = drumSounds.find((sound) => sound.keyTrigger === e.key.toUpperCase());
    if(!sound) return;

    (document.getElementById(sound.keyTrigger) as HTMLAudioElement)
    .play()
    .catch(console.error);

  document.getElementById("drum-" + sound.keyTrigger)?.focus();
  document.getElementById("display")!.innerText = sound.description;
} 

  return (
    <div id="drum-machine" onKeyDown={playAudio}>
      <h1>Surround Sounds</h1>
      <div className="base-drum">
        {drumSounds.map((sound) =>
        <Drum drumSound={sound} key={sound.keyTrigger}/>
        )}
      </div>
      <div id="display"></div>
    </div>
  )
}

export default App

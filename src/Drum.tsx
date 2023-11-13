import { DrumSounds } from "./type"

interface DrumPads {
    drumSound: DrumSounds;
}

const Drum = ({drumSound}: DrumPads) => {

    const playSound = (sound: DrumSounds) => {
        (document.getElementById(sound.keyTrigger) as HTMLAudioElement)
        .play()
        .catch(console.error);
        document.getElementById("display")!.innerText = sound.description;
    } 

    return (
        <button 
            className="drum-pad"
            id={`drum-${drumSound.keyTrigger}`}
            onClick={() => playSound(drumSound)}
        >
            <audio src={drumSound.url} className="clip" id={drumSound.keyTrigger}></audio>
            {drumSound.keyTrigger}
        </button>
    )
}

export default Drum
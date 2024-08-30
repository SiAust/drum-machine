import DrumPad from "./DrumPad";
import "../styles/DrumMachine.css"
import {AUDIO_CLIPS} from "./AudioClips";

import {useState} from "react";

function DrumMachine() {

    const [lastPlayed, setLastPlayed] = useState("Quiet");

    const [volume, setVolume] = useState(50);

    function handleClick(audioClip) {
        console.debug(audioClip.element);
        const audioElement = document.getElementById(audioClip.keyBinding);  // audioClip.element is a React Element

        playSound(audioElement);
    }

    document.addEventListener('keydown', handleKeyDown);

    function handleKeyDown(e) {
        e.preventDefault();
        const KEY = e.code.replace("Key", "");
        let element;
        switch (KEY) {

            case 'Q':
            case 'W':
            case 'E':
            case 'A':
            case 'S':
            case 'D':
            case 'Z':
            case 'X':
            case 'C':
                console.log(`${KEY} pressed`);
                element = document.getElementById(KEY);
                break;
            case 'Equal':
                // volume up
                setVolume(prevState => prevState < 100 ? prevState + 1 : prevState)
                return;
            case 'Minus':
                // volume down
                setVolume(prevState => prevState < 1 ? prevState : prevState - 1)
                return;
            default:
                console.log(e.code);
                return;
        }

        playSound(element);
    }

    function playSound(element) {
        // if (HTMLMediaAPI.playing)
        try {
            element.volume = volume / 100;
            console.info(`Volume set: ${element.volume}`);
        } catch (err) {
            console.error(err);
        }

        element.play()
            .then((resolved) => {
                console.info(`${element.name} played`);
                setLastPlayed(element.dataset.name);
            })
            .catch((err) => {
                console.error(err);
            })
            .finally(() => console.info(`${element.name} finished playing`));
    }

    return (
        <div id='drum-machine'>
            <div id="display">

                <p>{lastPlayed}</p>
                <div id="volume-group">
                    <input id={"volume"}
                           name={"volume"}
                           min={0}
                           max={100}
                           value={volume}
                           onChange={(e) => {
                               setVolume(Number(e.target.value));
                           }}
                           type="range"/>
                    <span id={"volume-value"}>{volume}</span>
                </div>

            </div>
            <div id={"drums"}>
                {AUDIO_CLIPS.map((audioClip) =>
                    <DrumPad key={audioClip.id}
                             audioClip={audioClip}
                             handleClick={handleClick}/>
                )}
            </div>

        </div>
    );
}

export default DrumMachine;
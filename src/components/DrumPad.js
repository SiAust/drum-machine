import "../styles/DrumPad.css"

import {faPlay, faPause} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function DrumPad({audioClip, handleClick}) {

    // const audioClip = useRef(null)

    // const DRUM_TITLE = path.match(/^.+\/\w+\/(.+)\.mp3$/)[1]; // FIXME null check
    console.info(audioClip);
    //console.log(`audioClip.playing: ${audioClip.playing}`) // TODO here
    return (
        <div onClick={() => handleClick(audioClip)}
                 id={audioClip.name}
                 className='drum-pad'>
        <p>{audioClip.keyBinding}</p>
        { <FontAwesomeIcon icon={audioClip.element.playing ? faPause : faPlay} /> }
        {audioClip.element}
        {/*<audio ref={audioClip} id={audioObj.keyBinding} src={audioObj} />*/}
    </div>)
}

export default DrumPad;
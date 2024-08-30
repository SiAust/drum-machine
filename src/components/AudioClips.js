import cevH2 from "../audio_clips/Cev_H2.mp3"
import dscOh from "../audio_clips/Dsc_Oh.mp3"
import heater1 from "../audio_clips/Heater-1.mp3"
import heater2 from "../audio_clips/Heater-2.mp3"
import heater3 from "../audio_clips/Heater-3.mp3"
import heater4 from "../audio_clips/Heater-4_1.mp3"
import heater6 from "../audio_clips/Heater-6.mp3"
import kickNHat from "../audio_clips/Kick_n_Hat.mp3"
import rp4Kick from "../audio_clips/RP4_KICK_1.mp3"

const KEY_BINDINGS = [
    'Q', 'W', 'E',
    'A', 'S', 'D',
    'Z', 'X', 'C'
];

export function AudioClip(clip, id) {
    this.clip = clip;
    this.id = id;
}

AudioClip.prototype = {
    get keyBinding() {
        return KEY_BINDINGS[this.id];
    },

    get name() {
        return this.clip.match(/^.+\/\w+\/(.+)\..+\.mp3$/)[1];
    },

    get path() {
        return this.clip;
    },

    get element() {
        return <audio
            id={this.keyBinding}
            className={"clip"}
            src={this.clip}
            data-name={this.name}></audio>; // Tests require ID to be used for KeyBinding ref, workaround
    }
}

export const AUDIO_CLIPS = [
    new AudioClip(cevH2, 0),
    new AudioClip(dscOh, 1),
    new AudioClip(heater1, 2),
    new AudioClip(heater2, 3),
    new AudioClip(heater3, 4),
    new AudioClip(heater4, 5),
    new AudioClip(heater6, 6),
    new AudioClip(kickNHat, 7),
    new AudioClip(rp4Kick, 8),
];


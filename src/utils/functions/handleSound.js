
import handleButtonColor from "./handleButtonColor"

export default function handleSound(e, power, setCurrentSound, currentVolume,) {
    
    
    const eventData = e.key ? e.key.toLowerCase() : e;
    
    const sound = document.querySelector(`audio[data-key="${eventData}"]`)

    if (!sound || !power) return;


    setCurrentSound(eventData);

    sound.volume = currentVolume;
    console.log(sound.volume)
    sound.currentTime = 0;
    sound.play()
    handleButtonColor(e);
}



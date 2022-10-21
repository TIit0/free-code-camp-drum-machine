
import handleButtonColor from "./handleButtonColor"

export default function handleSound(e, power) {
    console.log(power)
    const event = e.key ? e.key.toLowerCase() : e;
    const sound = document.querySelector(`audio[data-key="${event}"]`)

    if (!sound || !power) return;



    sound.currentTime = 0;
    sound.play()
    handleButtonColor(e);
}



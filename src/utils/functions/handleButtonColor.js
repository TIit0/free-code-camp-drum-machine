


export default function handleButtonColor(e, sound) {

    const event = e.key ? e.key.toLowerCase() : e;

    
    const stroke = document.querySelector(`.button[data-key="${event}"]`);
    
    stroke.classList.add("playing");

    function removeClass() {
        stroke.classList.remove("playing")
    }


    stroke.addEventListener("transitionend", removeClass);
    sound.addEventListener("ended", removeClass)
}
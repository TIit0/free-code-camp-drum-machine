


export default function handleButtonColor(e) {

    const event = e.key ? e.key.toLowerCase() : e;

    
    const stroke = document.querySelector(`.button[data-key="${event}"]`);
    
    stroke.classList.add("playing");
    stroke.addEventListener("transitionend", () => stroke.classList.remove("playing"));

    
}
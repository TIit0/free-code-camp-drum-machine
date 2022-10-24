import "./Buttons.css"
import letters from "../../utils/letters.json";
import handleSound from "../../utils/functions/handleSound";

export default function Buttons({power, setCurrentSound, currentVolume}) {


    return (
        <div className="left-panel">

            {letters.map(key => {
                return (
                    <button
                    key={key}
                    className="button"
                    data-key={key}
                    onClick={() => handleSound(key, power, setCurrentSound, currentVolume)}>
                        {key.toUpperCase()}
                    </button>
                )
            })}
        </div>
    )
}
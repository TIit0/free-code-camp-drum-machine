import "./Panel.css"
import Buttons from "../Buttons/Buttons"
import Controls from "../Controls/Controls"

export default function Panel({power, setIsPowerOn, currentSound, setCurrentSound, currentVolume, setCurrentVolume}) {
    return (
        <div className="panel">
            <Buttons power={power}
            setCurrentSound={setCurrentSound}
            currentVolume={currentVolume}/>

            <Controls power={power}
            setIsPowerOn={setIsPowerOn}
            currentSound={currentSound}
            currentVolume={currentVolume}
            setCurrentVolume={setCurrentVolume}/>
        </div>
    )
}
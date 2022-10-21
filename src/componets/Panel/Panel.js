import "./Panel.css"
import Buttons from "../Buttons/Buttons"
import Controls from "../Controls/Controls"

export default function Panel({power, setIsPowerOn}) {
    return (
        <div className="panel">
            <Buttons power={power}></Buttons>
            <Controls power={power} setIsPowerOn={setIsPowerOn}></Controls>
        </div>
    )
}
import "./Controls.css"
import SoundDisplay from "../SoundDisplay/SoundDisplay"

export default function Controls({ power, setIsPowerOn, currentSound,
    setCurrentVolume, currentVolume}) {

    const styles = (power ?
        { justifyContent: "end" }
        :
        { justifyContent: "start" }
    )

    return (
        <div className="controls">
            <p className="controls__text">POWER</p>
            <div className="controls__power" style={styles}>
                <button
                    className="controls__power--button"
                    onClick={() => setIsPowerOn(prevPower => !prevPower)}>
                    {power ? "ON" : "OFF"}
                </button>
            </div>
            <SoundDisplay currentSound={currentSound} />

            <input 
            className="slider"
            type="range" 
            min={0} max={1} step={.20} value={currentVolume} 
            onChange={
                (e) => setCurrentVolume(power ? parseFloat(e.target.value) : 0)
                } />
        </div>
    )
}
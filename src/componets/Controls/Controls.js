import "./Controls.css"

export default function Controls({power, setIsPowerOn}) {
    return (
        <div className="controls">
            <button onClick={() => {setIsPowerOn(!power)}}>OFF</button>
        </div>
    )
}
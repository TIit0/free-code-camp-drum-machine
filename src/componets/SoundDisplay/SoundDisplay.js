import "./SoundDisplay.css";

export default function SoundDisplay({currentSound}) {

    const soundFormat = {
        q: "Clap",
        w: "Closed HH",
        e: "Open HH",
        a: "Heater 1",
        s: "Heater 2",
        d: "Heater 3",
        z: "Heater 4",
        x: "Kick n Hat",
        c: "Kick",
    }

    return (
        
            <p className="display-wrapper">
                {soundFormat[currentSound]}
            </p>
        
    )

}
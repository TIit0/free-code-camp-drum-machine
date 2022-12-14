import './App.css';
import {useState, useEffect, useCallback} from "react"
import Panel from "../componets/Panel/Panel"
import letters from "../utils/letters.json"
import handleSound from "../utils/functions/handleSound"






function App() {

  const [isPowerOn, setIsPowerOn] = useState(true);
  const [currentSound, setCurrentSound] = useState(null);
  const [currentVolume, setCurrentVolume] = useState(.5);



  const handleEvent = useCallback((e) =>  {
    
    return handleSound(e, isPowerOn, setCurrentSound, currentVolume)
  }, [currentVolume, isPowerOn] ) 

    useEffect( () => {
      if (!isPowerOn) return
        console.log("on");
        window.document.addEventListener("keydown", handleEvent);
              
        return ()=>window.document.removeEventListener("keydown", handleEvent);
    
    }, [currentVolume, isPowerOn, handleEvent])


  return (
    <div className="App">

      <Panel power={isPowerOn}
      setIsPowerOn={setIsPowerOn}
      setCurrentSound={setCurrentSound}
      currentSound={currentSound}
      currentVolume={currentVolume}
      setCurrentVolume={setCurrentVolume}
      />

      {letters.map((key, index) => {
        return (
          <audio
          key={`sound${index}`}
          data-key={key}
          src={`./sounds/sound${index}.mp3`}/>
        )
      })}
      
    </div>
  );
}

export default App;

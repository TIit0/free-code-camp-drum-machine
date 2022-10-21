import './App.css';
import {useState, useEffect} from "react"
import Panel from "../componets/Panel/Panel"
import letters from "../utils/letters.json"
import handleSound from "../utils/functions/handleSound"






function App() {

  const [isPowerOn, setIsPowerOn] = useState(true)

  function handleEvent(e) {
    handleSound(e, isPowerOn)
  }

    if (isPowerOn === true) {
      window.document.addEventListener("keydown", handleEvent)
    } else if (isPowerOn === false) {
      window.document.removeEventListener("keydown", handleEvent)
    }


  return (
    <div className="App">
      <Panel power={isPowerOn} setIsPowerOn={setIsPowerOn}></Panel>

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

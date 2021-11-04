import React, { useState } from "react";
import { setLight } from "./api/requests";
import { off, setToColor } from "./api/states";
import { CompactPicker } from "react-color";

const App = () => {
  const [tran, setTran] = useState(0)
  const [time, setTime] = useState(0)
  const [brightness, setBrightness] = useState(254)
  const [timestamps, setTimestamps] = useState([])
  const [colors, setColors] = useState([])
  const [transitions, setTransitions] = useState([])
  const [brightnessArr, setBrightnessArr] = useState([])

  const startTimer = () => {
    for (let i = 0; i < timestamps.length; i++) {
      setLight(off, 10) // Start in off position
      setTimeout(() => {
        setLight(setToColor(colors[i], transitions[i], brightnessArr[i]), 10)
        console.log(`Set light (ID:10) to (${colors[i].r}, ${colors[i].g}, ${colors[i].b}).`)
      }, timestamps[i]*1000)
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    setTransitions([...transitions, tran])
    setTimestamps([...timestamps, time])
    setBrightnessArr([...brightnessArr, brightness])
    setTran(0)
    setTime(0)
    setBrightness(254)
  }

  const handleColorChange = (color) => {
    setColors([...colors, color.rgb])
  }

  return (
    <div className="App">
      <form>
        <label>
          Color for timestamp {timestamps.length+1}:
          <br />
          <CompactPicker onChangeComplete={handleColorChange}/>
        </label>
      </form>
      <br />
      <form>
        <label>
          Timestamp {timestamps.length+1} (in seconds):
          <input type="number" value={time} onChange={(e) => setTime(e.target.value)} />
        </label>
      </form>
      <form>
        <label>
          Timestamp {timestamps.length+1} brightness (0-254):
          <input type="number" value={brightness} onChange={(e) => setBrightness(e.target.value)} />
        </label>
      </form>
      <form>
        <label>
          Timestamp {timestamps.length+1} transition time (in seconds):
          <input type="number" value={tran} onChange={(e) => setTran(e.target.value)} />
        </label>
        <input type="submit" value="Submit" onClick={handleSubmit} />
      </form>

      <button onClick={startTimer}>Start Timer</button>

    </div>
  );
};

export default App;

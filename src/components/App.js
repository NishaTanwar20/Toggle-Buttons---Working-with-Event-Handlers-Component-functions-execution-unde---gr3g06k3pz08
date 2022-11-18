import React, {useState} from 'react'
import '../styles/App.css';
const App = () => {
//code here 
  const [text , setText] = useState(false);
const handleClick = () => {
  setText(!text);
}
  
  return (
    <div className="App">
      <button id="btn1" onClick={handleClick}>
      {/* assign value for button 1 */}
      {text ? "OFF" : "ON"}
      </button>
      <br />
      <br />
      <button id="btn2" onClick={handleClick}>
        {/* assign value for button 2 */}
        {text ? "ON" : "OFF"}
      </button>
    </div>
  );
}


export default App;

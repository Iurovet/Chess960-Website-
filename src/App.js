import './App.css';
import WhiteOrientation from './Fragments/WhiteOrientation';
import BlackOrientation from './Fragments/BlackOrientation';
import { useState } from 'react';

function App() {
  const [orientation, setOrientation] = useState("White");
  let pieces = ["rook", "knight", "bishop", "queen", "king", "bishop", "knight", "rook"];

  const handleBoardFlip = (event) => {
    if (orientation === "White") {
      setOrientation("Black");
    }
    else if (orientation === "Black") {
      setOrientation("White");
    }
  }
  
  return (
    <>
      <div style={{position: "absolute", left: "850px", /*border: "5px solid black"*/}}>
        <button onClick={handleBoardFlip}>Flip Board</button>
      </div>

      {orientation === "White" && <WhiteOrientation pieces={pieces}/>}
      {orientation === "Black" && <BlackOrientation pieces={pieces}/>}
    </>
  );
}

export default App;

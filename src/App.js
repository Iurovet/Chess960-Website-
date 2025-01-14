import './App.css';
import WhiteOrientation from './Fragments/WhiteOrientation';
import BlackOrientation from './Fragments/BlackOrientation';
import { useState } from 'react';

function App() {
  const [orientation, setOrientation] = useState("White");
  let pieces = ["rook", "knight", "bishop", "queen", "king", "bishop", "knight", "rook"];

  const handleSubmit = (event) => {
    event.preventDefault();
    
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
        <form onSubmit={handleSubmit}>
          <input type="submit" value="Flip board" />
        </form>
      </div>

      {orientation === "White" && <WhiteOrientation pieces={pieces}/>}
      {orientation === "Black" && <BlackOrientation pieces={pieces}/>}
    </>
  );
}

export default App;

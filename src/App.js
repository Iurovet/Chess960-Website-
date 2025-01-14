import './App.css';
import WhiteOrientation from './Fragments/WhiteOrientation';
import BlackOrientation from './Fragments/BlackOrientation';
import { useState } from 'react';

function App() {
  const [orientation, setOrientation] = useState("White");
  const [pieces, setPieces] = useState(["rook", "knight", "bishop", "queen", "king", "bishop", "knight", "rook"]);
  const [view, setView] = useState({ pawns: true, emptyRows: true });

  const dummyArray = [0, 1, 2, 3, 4, 5, 6, 7]; // For the swap buttons;

  const handleBoardFlip = (event) => {
    event.preventDefault();
    
    if (orientation === "White") {
      setOrientation("Black");
    }
    else if (orientation === "Black") {
      setOrientation("White");
    }
  }

  const handleSwapLeft = (event) => {
    let number = event.target.name;
    let currPieces = { ...pieces };
    
    if (orientation === "White") {
      swap(number, number - 1, currPieces);
    }
    else if (orientation === "Black") {
      swap(7 - number, 7 - (number - 1), currPieces);
    }

    setPieces(currPieces);
  }

  const handleSwapRight = (event) => {
    let number = parseInt(event.target.name);
    let currPieces = { ...pieces };

    if (orientation === "White") {
      swap(number, number + 1, currPieces);
    }
    else if (orientation === "Black") {
      swap(7 - number, 7 - (number + 1), currPieces);
    }
    
    setPieces(currPieces);
  }

  function swap(a, b, currPieces) {
    let temp = currPieces[a];
    currPieces[a] = currPieces[b];
    currPieces[b] = temp;
  }

  // Update className so that the number of grid rows adjusts. This keeps the swap buttons compact.
  function checkView() {
    let currView = { ...view };

    if (currView.pawns && currView.emptyRows) {
      return "board-full";
    }
    else if (currView.emptyRows) {
      return "board-no-pawns";
    }
    else if (currView.pawns) {
      return "board-no-empty-rows";
    }
    else {
      return "board-no-empty-rows-or-pawns";
    }
  }

  const handleBoardView = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    
    // Copy fields.
    const temp = { ...view };
    
    // Update field and state.
    temp[name] = (value === "false");
    setView(temp);
  }
  
  return (
    <>
      <div style={{position: "absolute", left: "850px", /*border: "5px solid black"*/}}>
        <form>
          <button onClick={handleBoardFlip}>Flip Board</button>
          
          <input type="checkbox" id="pawns" name="pawns" defaultValue={view.pawns} onChange={handleBoardView}/>
          <label htmlFor="pawns"> Show pawns</label>
          
          <input type="checkbox" id="emptyRows" name="emptyRows" defaultValue={view.emptyRows} onChange={handleBoardView}/>
          <label htmlFor="emptyRows"> Show empty rows</label>
        </form>
      </div>

      <div className={checkView()}>
        {console.log(view)}
        {orientation === "White" && <WhiteOrientation pieces={pieces} view={view}/>}
        {orientation === "Black" && <BlackOrientation pieces={pieces} view={view}/>}

        {dummyArray.map((number) => 
          <div key={number}>
            {number > 0 && <button name={number} onClick={handleSwapLeft}>&lt;</button>}
            {number < 7 && <button name={number} onClick={handleSwapRight}>&gt;</button>}
          </div>
        )}
      </div>
    </>
  );
}

export default App;
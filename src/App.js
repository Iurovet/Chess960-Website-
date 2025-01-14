import './App.css';
import { useState } from 'react';

import BlackOrientation from './Fragments/BlackOrientation';
import WhiteOrientation from './Fragments/WhiteOrientation';
import { numToPos } from './Utilities';

function App() {
  const dummyArray = [0, 1, 2, 3, 4, 5, 6, 7]; // For the swap buttons;
  const [orientation, setOrientation] = useState("White");
  const [pieces, setPieces] = useState(["rook", "knight", "bishop", "queen", "king", "bishop", "knight", "rook"]);
  
  const [posNo, setPosNo] = useState(0);
  const [view, setView] = useState({ pawns: true, emptyRows: true });
  const [rules, setRules] = useState({ bishops: true, kingRooks: true });

  const handleBoardFlip = (event) => {
    event.preventDefault();
    
    if (orientation === "White") {
      setOrientation("Black");
    }
    else if (orientation === "Black") {
      setOrientation("White");
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

  const handleSwapLeft = (event) => {
    let number = event.target.name;
    let currPieces = pieces;
    
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
    let currPieces = pieces;

    if (orientation === "White") {
      swap(number, number + 1, currPieces);
    }
    else if (orientation === "Black") {
      swap(7 - number, 7 - (number + 1), currPieces);
    }
    
    setPieces(currPieces);
  }

  const handlePosNoChange = (event) => {
    event.preventDefault();
    const value = event.target.value;
    setPosNo(value);
  }
  
  const handlePosNoSubmit = (event) => {
    event.preventDefault();
    setPieces(numToPos(posNo));
    setRules({ bishops: true, kingRooks: true }); // Retrieved position will always be valid.
  }

  function swap(a, b, currPieces) {
    let temp = currPieces[a];
    currPieces[a] = currPieces[b];
    currPieces[b] = temp;
    
    // Check for rules after swapping.
    let currRules = { ...rules };
    currRules.bishops = (currPieces.indexOf("bishop") % 2) !== (currPieces.lastIndexOf("bishop") % 2);
    currRules.kingRooks = ((currPieces.indexOf("rook") < currPieces.indexOf("king"))
                        && (currPieces.indexOf("king") < currPieces.lastIndexOf("rook")))    
    setRules(currRules);
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
  
  return (
    <>
      <div style={{position: "absolute", left: "850px", border: "5px solid black"}}>
        <button onClick={handleBoardFlip}>Flip Board</button>
          
        <input type="checkbox" id="pawns" name="pawns" defaultValue={view.pawns} onChange={handleBoardView}/>
        <label htmlFor="pawns"> Hide pawns</label>
        
        <input type="checkbox" id="emptyRows" name="emptyRows" defaultValue={view.emptyRows} onChange={handleBoardView}/>
        <label htmlFor="emptyRows"> Hide empty rows</label> <br/>
        
        <form onSubmit={handlePosNoSubmit}>
          <input type="number" id="posNo" name="posNo" min="0" max="959" step="1"
            value={posNo || 0} onChange={handlePosNoChange}></input>
          <label htmlFor="posNo">Enter position number (0-959)</label>

          <input type="submit" value="Click to submit" />
        </form>
      </div>

      <div className={checkView()}>
        {orientation === "White" && <WhiteOrientation pieces={pieces} view={view}/>}
        {orientation === "Black" && <BlackOrientation pieces={pieces} view={view}/>}

        {dummyArray.map((number) => 
          <div key={number}>
            {number > 0 && <button name={number} onClick={handleSwapLeft}>&lt;</button>}
            {number < 7 && <button name={number} onClick={handleSwapRight}>&gt;</button>}
          </div>
        )}

        {/* Show error messages here */}
        <div>
          {!rules.bishops && "Error: Bishops must be on opposite-coloured squares"}
        </div>
        <div>
          {!rules.kingRooks && "Error: King must be in-between the rooks"}
        </div>
      </div>
    </>
  );
}

export default App;
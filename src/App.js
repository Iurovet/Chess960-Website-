import './App.css';
import WhiteOrientation from './Fragments/WhiteOrientation';
import BlackOrientation from './Fragments/BlackOrientation';
import { useState } from 'react';

function App() {
  const [orientation, setOrientation] = useState("White");
  const [view, setView] = useState({
    pawns: true,
    emptyRows: true
  });
  
  const [pieces, setPieces] = useState(["rook", "knight", "bishop", "queen", "king", "bishop", "knight", "rook"]);
  const dummyArray = [0, 1, 2, 3, 4, 5, 6]; // For the swap buttons;

  const handleBoardFlip = (event) => {
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
      <div style={{position: "absolute", left: "850px", /*border: "5px solid black"*/}}>
        <button onClick={handleBoardFlip}>Flip Board</button>
      </div>

      <div className={checkView()}>
        {orientation === "White" && <WhiteOrientation pieces={pieces} view={view}/>}
        {orientation === "Black" && <BlackOrientation pieces={pieces} view={view}/>}

        {dummyArray.map((number) => <div key={number}><button key={number} name={number} onClick={handleSwapRight}>&gt;</button></div>)}
        <div></div>

        <div></div>
        {dummyArray.map((number) => <div key={number}><button key={number} name={number + 1} onClick={handleSwapLeft}>&lt;</button></div>)}
      </div>
    </>
  );
}

export default App;
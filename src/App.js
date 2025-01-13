import './App.css';
import WhiteRow from './Fragments/WhiteRow';
import BlackRow from './Fragments/BlackRow';
import { useState } from 'react';

function App() {
  const [orientation, setOrientation] = useState("White");

  const handleSubmit = (event) => {
    event.preventDefault();
    
    if (orientation === "White") {
      setOrientation("Black");
    }
    if (orientation === "Black") {
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

      {orientation === "White" && <WhiteRow/>}
      {orientation === "Black" && <BlackRow/>}
    </>
  );
}

export default App;

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
      {orientation === "White" && <WhiteRow/>}
      {orientation === "Black" && <BlackRow/>}

      <form onSubmit={handleSubmit}>
        <input type="submit" value="Flip board" />
      </form>
    </>
  );
}

export default App;

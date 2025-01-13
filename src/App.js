import './App.css';
import WhiteRow from './Fragments/WhiteRow';
import BlackRow from './Fragments/BlackRow';
import { useState } from 'react';

function App() {
  const [orientation, setOrientation] = useState("White");
  
  return (
    <>
      {orientation === "White" && <WhiteRow/>}
      {orientation === "Black" && <BlackRow/>}
    </>
  );
}

export default App;

import React, {useState, useEffect} from 'react';
import './App.css';

let firstMount = false; 

function App() {

  const [age, setAge] = useState(0);

  // runs on mounting ONLY
  useEffect(() => {
    console.log("i am born")
  }, []);

  // runs on mounting and update
  useEffect(() => {
    if(firstMount) {
      console.log("learn");
    } else {
      console.log("first mount");
      firstMount = true; 
    }
  });


  function ageHandle() {
    setAge(age + 1)
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2> Use Effect </h2>
        <h3> Age: {age} </h3>
        <button onClick={ageHandle}> Learn and grow </button>
      </header>
    </div>
  );
}

export default App;

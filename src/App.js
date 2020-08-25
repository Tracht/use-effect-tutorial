import React, {useState, useEffect} from 'react';
import './App.css';

let born = false; 

function App() {

  const [age, setAge] = useState(0);
  const [title, setTitle] = useState(null);
  const [nirvana, setNirvana] = useState(false);

  // stops age increase
  // useEffect((title) => {
  //   if(born){
  //    setTitle("nirvana attained");
  //   } 
  // }, [nirvana])

  // runs on mounting ONLY -> because of empty array
  useEffect(() => {
    console.log("i am born")
  }, []);

  // runs on mounting and update
  useEffect(() => {

    // after being born, learn & make mistakes 
    if(born && age <= 70) {
      console.log("learn & make mistakes");
    } else {
      setAge(0); setTitle("");
      console.log("component is born");
      born = true; 
    }

    // after age 70, attain nirvana
    if (age === 70) { 
      setNirvana(true)
      setTitle("nirvana attained") 
    }

  });

  function ageHandle() {
    setAge(age + 10)
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2> Use Effect </h2>
        <h3> { title } </h3>
        <h3> Age: {age} </h3>
        <button onClick={ageHandle}> Learn and grow </button>
      </header>
    </div>
  );
}

export default App;

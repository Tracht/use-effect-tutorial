import React, {useState, useEffect, useMemo} from 'react';
import Child from './child';
import './App.css';

let born = false; 

function App() {

  const [goodDeeds, setGoodDeeds] = useState(0);
  const [age, setAge] = useState(0);
  const [title, setTitle] = useState(null);
  const [nirvana, setNirvana] = useState(false);

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

  function increaseGoodDeeds() {
    setGoodDeeds(goodDeeds + 1)
  }

  function decreaseGoodDeeds() {
    setGoodDeeds(goodDeeds - 1)
  }

  const memoChild = useMemo(() => {
    return <Child></Child>
  }, [goodDeeds])

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h2> Use Effect </h2>
          <h3> { title } </h3>
          <h3> Age: {age} </h3>
          <button onClick={ageHandle}> Learn and grow </button>
        </div>

        <div>
          <h2> Use Memo</h2>
          <h3> Good deeds counter: {goodDeeds} </h3>
          <button onClick={increaseGoodDeeds}> Do a good deed</button>
          <button onClick={decreaseGoodDeeds}> Do a bad deed</button>
          <h3> Normal render</h3>
          {/* <Child></Child> */}
          <h3>Memo child render</h3>
          <h4>{memoChild}</h4>
        </div>
       
      </header>
       
    </div>
  );
}

export default App;

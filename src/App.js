/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/
/*import { useEffect, useState } from "react";
//import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const fetchData = () => {
    fetch('/')
      .then((response) => response.json())
      .then((actualData) => {
        console.log(actualData);
        setData(actualData.Name);
        console.log(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <p> Text : {data.Message}</p>
      <p> Name : {data.Message}</p>
    </div>
  );
}
export default App;*/

/*import React, { useState, useEffect } from 'react';

function MyComponent() {
    const [data, setData] = useState({});

    useEffect(() => {
        fetch('/')
            .then(response => response.json())
            .then(data => setData(data));
    }, []);

    return (
        <div>
            <p>Name: {data.name}</p>
            <p>Age: {data.age}</p>
        </div>
    );
}

export default MyComponent;*/

/*import React, { useEffect, useState } from "react";

function LED() {

  const [count, setCount] = useState(1)
  const [backendData, setBackendData] = useState([{}]);

  function increment() {
    const newCount = count + 1;
    setCount(newCount);
  }

  function decrement() {
    const newCount = count - 1;
    setCount(newCount);
  }
  
  useEffect(() => {
    fetch('/led').then(
      response => response.json()
    ).then(data => setBackendData(data))
  }, []);

  useEffect(() => {
    fetch('/led', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({"count": count})
    }).then(() => {
        console.log("POST: " + count)
    })
  })
  
  return (
    <div className="container">
        <h1>LED Controller</h1>
        <p>Change the number of seconds between the LED turning on and off.</p>
        <h3>{count}</h3>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        <h1>Increment from backend:</h1>
        <h3>{backendData.backendCount}</h3>
    </div>
  );
}

export default LED;
*/


import "./App.css";
import React from "react";
import bg from "./back2.mp4";
import { useForm } from "react-hook-form";
import { useState } from "react";

export default function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();
  const onSubmit = (data) => console.log(data);
  const [choice, setChoice] = useState(" ");//Source City
  const [choice1, setChoice1] = useState(" ");//Destination City
  const [choice2, setChoice2] = useState(" ");//Airline
  const [choice3, setChoice3] = useState(" ");//Class
  const [choice4, setChoice4] = useState(" ");//Departure Time
  const [choice5, setChoice5] = useState(" ");//No of Stops
  const[choice6,setChoice6]=useState(" ");//Date of travel
  const [isShown, setIsShown] = useState(false);
  const[data,setData]=useState([{}])
  const shoot = (event) => {
    setIsShown((current) => !current);
    
      event.preventDefault();
      fetch('/convert', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({
          'setChoice':choice,
          'setChoice1' : choice1,
          'setChoice2' : choice2,
          'setChoice3' : choice3,
          'setChoice4' : choice4,
          'setChoice5' : choice5,
          'setChoice6':choice6,
        })
      })
      .then(response => response.json())
      .then(data=>{
        setData(data)
        console.log(data)
      })
      .catch(error => console.error(error));
    
  
  };
  return (
    <section>
      <div className="App">
        <video src={bg} autoPlay loop muted />

        <div className="content">
          <h1>Trip Estimation</h1>
          <span>Explore the world</span>

          <form id="form" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <div className="drop">
                <select onChange={(e) => setChoice(e.target.value)}>
                  <option value=" "> Source City</option>
                  <option value="Chennai">Chennai</option>
                  <option value="Mumbai">Mumbai</option>
                  <option value="Delhi">Delhi</option>
                  <option value="Kolkata">Kolkata</option>
                  <option value="Hyderabad">Hyderabad</option>
                </select>

                {choice}
              </div>
              <div className="drop">
                <select onChange={(b) => setChoice1(b.target.value)}>
                  <option value="Destination City"> Destination City</option>
                  <option value="Chennai">Chennai</option>
                  <option value="Mumbai">Mumbai</option>
                  <option value="Delhi">Delhi</option>
                  <option value="Kolkata">Kolkata</option>
                  <option value="Hyderabad">Hyderabad</option>
                </select>

                {choice1}
              </div>
              <div className="drop">
                <select onChange={(e) => setChoice2(e.target.value)}>
                  <option value=" "> Airlines</option>
                  <option value="Air_Asia">Air_Asia</option>
                  <option value="Air_India">Air_India</option>
                  <option value="Go_First">Go_First</option>
                  <option value="Space Jet">Space_Jet</option>
                  <option value="Indigo">Indigo</option>
                  <option value="Vistara">Vistara</option>

                </select>

                {choice2}
              </div>
              <div className="drop">
                <select onChange={(e) => setChoice3(e.target.value)}>
                  <option value=" "> Class</option>
                  <option value="Business">Business</option>
                  <option value="Economy">Economy</option>
                 
                </select>

                {choice3}
              </div>
              <div className="drop">
                <select onChange={(e) => setChoice4(e.target.value)}>
                  <option value="Departure Time"> Departure Time</option>
                  <option value="Early_Morning">Early_Morning</option>
                  <option value="Morning">Morning</option>
                  <option value="Afternoon">Afternoon</option>
                  <option value="Evening">Evening</option>
                  <option value="Night">Night</option>
                  <option value="Late_Night">Late_Night</option>
                </select>

                {choice4}
              </div>
              <div className="drop">
                <select onChange={(e) => setChoice5(e.target.value)}>
                  <option value=" "> Stops</option>
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                 
                </select>

                {choice5}
              </div>

              
            </div>
            <input
            
              type="date"
              {...register("confirmpwd")}
              placeholder="dd-mm-yyyy"
              onChange={(e)=>setChoice6(e.target.value)}
            />

            <button className="btn" onClick={shoot}>
              Estimate
            </button>
            {isShown && (
              <div className="side">
                <h4>Airfare-{data.prediction}</h4>
                <h4>Accomodation-3500</h4>
                <h4>Local Transport-5000</h4>
                <h4>Misc-2500</h4>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}



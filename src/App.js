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

import React, { useEffect, useState } from "react";

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




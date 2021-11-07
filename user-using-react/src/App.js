import './App.css';
import User from './user/User.js'
import {useEffect, useState} from 'react';
import React from "react";

function App() {
  let [data, setData] = useState(null);
  useEffect(() => {
    fetch('http://localhost:4000')
    .then( response => response.json())
      .then(jsonData => {setData(jsonData);})
      .catch(err => console.log(err));
    }
  ,[]
  );
  console.log(`after callback`);
  return (
    <div>
      {/* <h1>{data}</h1> */}
      {data && <User users = {data} />}
    </div>
  );
}

export default App;

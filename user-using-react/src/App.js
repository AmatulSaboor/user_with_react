import './App.css';
import User from './user/User.js'
import {useEffect, useState} from 'react';
import React from "react";

function App() {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState('is Loading....');
  let [data, setData] = useState(null);
  useEffect(() => {
    fetch('http://localhost:3000')
    .then( response => {
      if (!response.ok){
        console.log(`custom error`);
        throw new Error(`There is some error!!`);
      }
      return response.json()
    })
      .then(jsonData => {
        setData(jsonData)
        setIsLoading(null);
      })
      .catch(err => {
        setIsLoading(null);
        setError(err.message);
        console.log(err)
      });
    }
  ,[]
  );
  console.log(`after callback`);
  return (
    <div>
      {/* {errMessage && <div>{errMessage}</div>} */}
      {error && <div>{error}</div>}
      {isLoading && <div>{isLoading}</div>}
      {data && <User users = {data} setData={setData} />}
    </div>
  );
}

export default App;

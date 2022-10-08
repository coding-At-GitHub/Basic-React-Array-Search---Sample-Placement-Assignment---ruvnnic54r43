import React, { useState } from 'react'

import '../styles/App.css';


const searchArray = ["Newton", "School", "Newton School", "React", "Preact", "Node", "Mongoose", "Angular", "Vue", "Apple", "Microsoft", "Netflix", "Meta"]
const App = () => {
  const [change, setchange] = useState("");

  return (
    <div id="main">
      <p>Search</p>
      <input id="search-input" value={change} onChange={(e) => setchange(e.target.value)} />
      <p>Results</p>
      {

        searchArray.filter((val) => {
          if (change === "") {
            return null;
          } else if (val.toLowerCase().includes(change.toLowerCase())) {
            return val;
          }
        }).map((val, id) => {
          return (
            <ul key={id}  >
              <li>{val}</li>
            </ul>
          )
        })
      }
    </div>
  )
}


export default App;

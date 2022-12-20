import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('http://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      setData(data);
    }
    fetchData();
  }, []);

  return (
    <div classname="App">
      {data ? (
        <div>
          {data.map(item => (
            <ol >
             	Name: { item.name },
            	Email: { item.email }
             	</ol>
          ))}
        </div>
      ) : (
        'Loading...'
      )}
    </div>
  );
}

export default App;


// import React from "react";
// import './App.css';


// import { useState, useEffect } from 'react';

// function App() {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     async function fetchData() {
//       const response = await fetch('http://jsonplaceholder.typicode.com/users');
//       const data = await response.json();
//       setData(data);
//     }
//     fetchData();
//   }, []);



// 		return (
// 		<div className = "App">
// 			<h1> Fetch data from an api in react </h1> {
// 				data.map((item) => (
// 				<ol key = { item.id } >
// 					User_Name: { item.username },
// 					Full_Name: { item.name },
// 					User_Email: { item.email }
// 					</ol>
// 				))
// 			}
// 		</div>
// 	);
// }


// export default App;

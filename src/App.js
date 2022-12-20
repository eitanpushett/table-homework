import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://cors-anywhere.herokuapp.com/https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      setData(data);
    }
    fetchData();
  }, []);

  return (
    <div>
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



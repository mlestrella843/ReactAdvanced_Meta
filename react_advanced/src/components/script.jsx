import React, { useState } from "react";

function FetchData() {
  // State for store the data coming from API
  const [data, setData] = useState([]);

  const fetchData = () => {
    console.log("A new Client is coming");
    fetch("https://randomuser.me/api/")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error on the request: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("Data received:", data); 
        // Saving data into State.
        setData(data.results); // 'results' is the Key That contain the list of users from randomuser.me API.
      })
      .catch((error) => {
        console.error("Error loading data:", error);
      });

    console.log("Attending our valuable client");
  };

  return (
    <div>
      <h1>Fetching Data</h1>
      <button className="bg-slate-500 text-white" onClick={fetchData}>
        Fetch Data
      </button>
      {/* Rendering Data */}
        {data.map((user) => (
        <div key={user.login.uuid}>
            <h2>{user.name.first} {user.name.last}</h2>
            <p>{user.email}</p>
            <p>Cell Phone: {user.cell}</p>
        </div>
             ))
        }
    </div>
  );
}

export { FetchData };

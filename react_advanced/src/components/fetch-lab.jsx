import { useState, useEffect } from "react";

const FetchLab = () => {
  const [user, setUser] = useState({});

  const fetchData = () => {
    fetch("https://randomuser.me/api/?results=2")
    .then((response) => (response.json()))
    .then((data) => {console.log("Data:", data)
    setUser(data); 
    });   
  };

  useEffect(() => {
    fetchData();
  }, []);

  
  return Object.keys(user).length > 0 ? (
        <div>
          <h1>Customer data</h1>
          <h2>Name:{user.results[0].name.first}</h2>
          <img src={user.results[0].picture.large} alt="" /> 
        </div>
      ) : (
        <h1>Data Pending ...</h1>
      );

};
export { FetchLab };






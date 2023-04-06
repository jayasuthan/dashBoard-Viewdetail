import React from "react";
import axios from "axios";
import { useState, useEffect, createContext } from "react";
import { useNavigate } from "react-router-dom";
import View from "./view";

export const UserContext = createContext([]);

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [send, setSend] = useState(''); // for sending id

  

  const navigate = useNavigate();

  function catchingData() {
    axios
      .get("https://63144baffa82b738f745e9fa.mockapi.io/users/users", {})
      .then((res) => setUsers(res.data));
  }

  const deleteEmp = (id) => {
    const newList = users.filter((item) => item.id !== id);
    setUsers(newList);
  };

  useEffect(() => {
    catchingData();

    const timer = setTimeout(() => {
        console.log('after 2sec');
        console.log(users);
    }, 2000);
 
    return() => clearTimeout(timer)

  }, []);

  

  const viewdetail = (id) => {
    setSend(id);
   // console.log(`form dashboard ${id}`);
    navigate(`/view/${id}`);
  };
  
   

  return (
    <UserContext.Provider value={users}>
      <div>
        <h1> DASHBOARD PAGE -- {send} </h1>

        {users.map((user, i) => {
          return (
            <div key={i}>
              <h2 style={{ color: "blue" }}> Name : {user.name} </h2>
              {/* <h5 style={{ color: "red" }}> City : {user.city}</h5>  */}
              <button onClick={() => viewdetail(user.id)}> View Detail </button>
              <button onClick={() => deleteEmp(user.id)}>
                Delete-Employee
              </button>
              <hr></hr>
            </div>
          );
        })}
      </div>
    </UserContext.Provider>
  );
};

export default Dashboard;

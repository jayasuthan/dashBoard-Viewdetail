import React, { useContext, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import {UserContext} from "./dashboard";

const View = () => {
  const [data, setData] = useState();
  const [display, setDisplay] = useState([]);

        // const file = useContext(UserContext)
        console.log(data);

  const navigate = useNavigate();
  let { id } = useParams();

  const navi = () => {
    navigate("/dashboard");
  };

  /////      API TRY Method 

  const catchingData = async () => {
    await axios
      .get("https://63144baffa82b738f745e9fa.mockapi.io/users/users", {})
      .then((res) => setData(res.data));
  };
  
  // const vwvw = () => {

    const timer = setTimeout(() => {
      const tmp = data.filter((data) => data.id === id);
    setDisplay(tmp);
    console.log(display);
      
    }, 1500)
     

      // return() => clearTimeout(timer)

  // };

 
  useEffect(() => {
    catchingData();

    


  }, []);

 
  return (
    <>
      <button onClick={navi}>Back to DashBoard</button>

      {/* <button onClick={vwvw}>click me view</button> */}
       
      {  display.map((data, i) => {
        return (

          <div key={i}>
            <h1 style={{color: 'blue'}}>Name : {data.name}</h1>
            <h1 style={{color: 'pink'}}>Email : {data.email}</h1>
            <h1 style={{color: 'orange'}}>Mobile : {data.mobile}</h1>
            <h1 style={{color: 'skyblue'}}>Designation: {data.designation}</h1>
            <h1 style={{color: 'lightgreen'}}>Experience : {data.experience}</h1>
            <h1 style={{color: 'green'}}> City : {data.city}</h1>
            <h1 style={{color: 'violet'}}>Address : {data.address}</h1>
          </div>

        );
      })}


    </>
  );
};

export default View;

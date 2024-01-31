import { useEffect, useRef, useState } from "react"
import React from 'react'
import data from './Posts.json'
import "./userprofile.css"
export default function UserProfile() {
 // var userData =[];
      var dt =useRef([]);

    const [userData, setUser] = useState([]);
      useEffect (() =>{   
          const  fetchedUserData  = () =>{ 
            dt.current = data.map(user=>{
              return user.user;
            });
            try{
             setUser(dt.current);
            }
             catch(error){
            console.log("Error in user data loading", error);
        }
        }
        fetchedUserData();
    }, []);
    const str = " ";
  return (
    <div id="profile">

      <h1>UserProfile</h1>
            
      {userData.map(user=>(
                          <div key={user.id} className="profile">
                             <p>Name : {user.name} {" "}<br />email : { user.email}</p>
                          </div>))}
    </div>
  )
}

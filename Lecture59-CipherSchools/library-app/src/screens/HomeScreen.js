import React, { useEffect, useState } from 'react'
import { getLocalStorageUser, logoutUser } from '../utils/AuthUtil';
import LibrarianHomeScreen from './LibrarianHomeScreen';
import StudentHomeScreen from './StudentHomeScreen';
import { useNavigate } from 'react-router-dom';

function HomeScreen() {
    const [usertype, setUserTpe] = useState("");
    const naviagte = useNavigate();

    useEffect(()=>{
        const user = getLocalStorageUser();
        if(user){
        setUserTpe(user.type);
        }
    },[])
   if(!usertype.length){
    return <p>Loading...</p>
   }

   const getHomeScreen = ()=>{
    return usertype === "LIBRARIAN" ? <LibrarianHomeScreen/> : <StudentHomeScreen/>
   }
   return (
    <section className='app-section'>
    <button className="ui secondary button" onClick={
      async ()=>{
         await logoutUser();
         naviagte("/login");
        }
    }>Logout</button>
    {getHomeScreen()}
    </section>
   )

}

export default HomeScreen

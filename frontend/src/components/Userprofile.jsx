import React, { useContext, useEffect, useRef, useState } from 'react'
import Logout from './logout'

import profileContext from '../context/profileContext';

export default function Userprofile() {

let profileData =useContext(profileContext)
    let nameref =useRef("")
    let contactref = useRef("")
    let emailref = useRef("")
    useEffect(() => {
        let u = profileData.userProfileData[0];
        nameref.current.value=u.username;
        emailref.current.value=u.email;
        contactref.current.value=u.contact;

      }, []);
    
    
   

  return (
    < >
     <div className='flex flex-col w-1/2 mx-auto gap-5  border-4 p-5  '>
     
     <h1>UserProfile</h1>
     <p className='flex'>
     <span className='w-1/3 text-center'>Name :</span> <input type="text" ref={nameref} className="textbox border-2  w-1/2"/>
     </p>
     <p className='flex'>
     <span className='w-1/3 text-center'>email:</span> <input type="text" disabled ref={emailref} className="textbox border-2 w-1/2 "/>
     </p>
     <p className='flex'>
     <span className='w-1/3 text-center'>contact no : </span><input type="text" ref={contactref} className="textbox border-2 w-1/2 "/>
     </p>
    
     
    <Logout></Logout>
     
     </div>
     
    </>
  )
}

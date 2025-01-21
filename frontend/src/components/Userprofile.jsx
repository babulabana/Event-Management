// import React, { useContext, useEffect, useRef, useState } from 'react'
// import Logout from './logout'
// import userContext from '../context/userContext'
// import { useNavigate } from 'react-router'
// import profileContext from '../context/profileContext';
// import axios from 'axios';
// export default function Userprofile() {
//   const [msg,setmsg] =useState("")
 
// let profileData =useContext(profileContext)
    

//   let nameref =useRef("")
//     let contactref = useRef("")
//     let emailref = useRef("")

//     const navigate = useNavigate()
//     useEffect(() => {
//       if(profileData.userProfileData == undefined)
//         {
//           console.log("in if ")
//           navigate("/login")
//         }
//         else
//         {
//         let u = profileData.userProfileData[0];
//         nameref.current.value=u.username;
//         emailref.current.value=u.email;
//         contactref.current.value=u.contact;
       
//         }

//       }, []);

//     let changeprofile = async()=>{
//       let data = { id: profileData.userProfileData[0]._id,    
//         nameref:nameref.current.value,
//         contactref:contactref.current.value }
//         await axios.put("http://localhost:8080/user/updateprofile",data)
//                      .then((d)=>{
//                             if(d.data!= 0 )
//                             {
//                                 alert("profile updated successfully")
//                                 // user.setislogin(false)
//                                 navigate("/login");
//                                 return
//                             }
//                             else
//                             {
//                             setmsg("Password Not Updated");
//                             }
//                         })
//                      .catch((err)=>{console.log(err)})
//                 }
            
     
    
   

//   return (
//     < >
//      <div className='flex flex-col w-1/2 mx-auto gap-5  border-4 p-5  '>
     
//      <h1>UserProfile</h1>
//      <p className='flex'>
//      <span className='w-1/3 text-center'>Name :</span> 
//      <input type="text" ref={nameref} className="textbox border-2  w-1/2"/>
//      </p>
//      <p className='flex'>
//      <span className='w-1/3 text-center'>email:</span> 
//      <input type="text" disabled ref={emailref} className="textbox border-2 w-1/2 "/>
//      </p>
//      <p className='flex'>
//      <span className='w-1/3 text-center'>contact no : </span><input type="text" ref={contactref} className="textbox border-2 w-1/2 "/>
//      </p>
    
//      <div className='flex gap-2 w-1/2 mx-auto'>
//         <input type="button" className='bg-green-400 w-1/2 '
//         value="change profile" onClick={()=>changeprofile()} />  
//         <input type="button" value="Cancel" className='bg-red-400 w-1/2 ' />
        
//         </div>
//         {msg}
//     <Logout></Logout>
     
//      </div>
     
//     </>
//   )
// }


import React, { useContext, useEffect, useRef, useState } from "react";
import Logout from "./logout";
import { useNavigate } from "react-router";
import profileContext from "../context/profileContext";
import axios from "axios";

export default function UserProfile() {
  const [msg, setMsg] = useState(""); // State for feedback message
  const profileData = useContext(profileContext);

  // Using refs for form fields
  const nameRef = useRef("");
  const contactRef = useRef("");
  const emailRef = useRef("");

  const navigate = useNavigate();

  // Populate input fields with profile data on component load
  useEffect(() => {
    if (!profileData?.userProfileData) {
      console.log("Profile data not found. Redirecting to login...");
      navigate("/login");
    } else {
      const user = profileData.userProfileData[0];
      nameRef.current.value = user.username;
      emailRef.current.value = user.email;
      contactRef.current.value = user.contact;
    }
  }, [profileData, navigate]);

  // Function to handle profile updates
  const changeProfile = async () => {
    // Prepare the data to be sent
    const data = {
      id: profileData.userProfileData[0]._id,
      username: nameRef.current.value,
      contact: contactRef.current.value,
    };

    try {
      // Send PUT request to update profile
      const response = await axios.put(
        "http://localhost:8080/user/updateprofile",
        data
      );

      if (response.data !== 0) {
        alert("Profile updated successfully");
        navigate("/login"); // Redirect to login after updating
      } else {
        setMsg("Profile not updated. Please try again.");
      }
    } catch (error) {
      console.error("Error updating profile:", error);
      setMsg("An error occurred while updating the profile.");
    }
  };

  return (
    <div className="flex flex-col w-1/2 mx-auto gap-5 border-4 p-5">
      <h1>User Profile</h1>

      <p className="flex">
        <span className="w-1/3 text-center">Name:</span>
        <input
          type="text"
          ref={nameRef}
          className="textbox border-2 w-1/2"
        />
      </p>

      <p className="flex">
        <span className="w-1/3 text-center">Email:</span>
        <input
          type="text"
          ref={emailRef}
          disabled
          className="textbox border-2 w-1/2"
        />
      </p>

      <p className="flex">
        <span className="w-1/3 text-center">Contact No:</span>
        <input
          type="text"
          ref={contactRef}
          className="textbox border-2 w-1/2"
        />
      </p>

      <div className="flex gap-2 w-1/2 mx-auto">
        <input
          type="button"
          className="bg-green-400 w-1/2"
          value="Change Profile"
          onClick={changeProfile}
        />
        <input
          type="button"
          value="Cancel"
          className="bg-red-400 w-1/2"
          onClick={() => navigate("/")} // Redirect to home page or another route
        />
      </div>

      {/* Feedback Message */}
      {msg && <p className="text-red-500 text-center">{msg}</p>}

      <Logout />
    </div>
  );
}

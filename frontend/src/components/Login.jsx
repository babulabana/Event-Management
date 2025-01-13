import React, { useContext, useRef, useState } from 'react'
import userContext from "../context/userContext"
import axios from 'axios';
import profileContext from '../context/profileContext';
export default function Login() {

    let emailref = useRef("");
    let pwdref = useRef("");
    let user = useContext(userContext);
    let profileData =useContext(profileContext)

    const [msg,setmsg] = useState("");
    let loginuser=()=>{
        let data ={
            email:emailref.current.value,pwd:pwdref.current.value
        }
        axios.post("http://localhost:8080/user/login", data)
        .then((d) => {
           if(d.data)
           {console.log(d.data)
            profileData.setUserProfileData(d.data)
            user.setislogin(true)
           }
           else
           {
             setmsg("invalid user")
           }
        })
        .catch((e)=> console.log(e))
    }
  return (
    <div className='flex flex-col w-1/2 mx-auto gap-5  border-4 p-5  '>
      <p className='flex'>
      <span className='w-1/3 text-center'>Enter Email:  </span> <input type="text"  ref={emailref} className="textbox border-2  w-1/2" />
      </p>
      <p className='flex'> <span className='w-1/3 text-center'>
        Enter password :</span> <input type="password" ref={pwdref} className="textbox border-2  w-1/2"/>
      </p>
      <input type="button" value="login" className='bg-green-400 w-1/3  mx-auto
      ' onClick={()=>loginuser()} />
      <h1>{msg}</h1>
    </div>
  )
}

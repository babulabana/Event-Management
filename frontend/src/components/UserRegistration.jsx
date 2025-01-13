import React, { useContext, useEffect, useRef ,useState } from 'react'
import axios from 'axios'
import userContext from '../context/userContext';
import { useNavigate } from 'react-router-dom';
export default function UserRegistration() {
    const [msg,setmsg]=useState("");
    let nameref =useRef("")
    let pwdref = useRef("")
    let emailref = useRef("")
    let contactref = useRef("")

    let user = useContext(userContext)
    const Navigate =useNavigate()
    useEffect(()=>{
      console.log(user)
      if(user.islogin){
        Navigate("/")
      }
    })
    

    let  addUser = ()=>{
        let data = {
          username:nameref.current.value,
            pwd:pwdref.current.value,
            email:emailref.current.value,
            contact:contactref.current.value,
            verified:false}
        
        axios.post("http://localhost:8080/user",data)
        .then((d)=>{
            setmsg("User Registered, please verify your account")
            clearData()
        })
        .catch((e)=>
          {
            console.log(e);
            setmsg("user not registered , please try after some time")
    })
  
    }
    
  let clearData=() =>
    {
      nameref.current.value="";
      emailref.current.value=""
      pwdref.current.value=""
      contactref.current.value=""
    }

  return ( 
     
    <div className='flex flex-col w-1/2 mx-auto gap-5  border-4 p-5  '>
     
    <h1>UserRegistration</h1>
    <p className='flex'>
    <span className='w-1/3 text-center'>Name :</span> <input type="text" ref={nameref} className="textbox border-2  w-1/2"/>
    </p>
    <p className='flex'>
    <span className='w-1/3 text-center'>email:</span> <input type="text" ref={emailref} className="textbox border-2 w-1/2 "/>
    </p>
    <p className='flex'>
    <span className='w-1/3 text-center'>contact no : </span><input type="text" ref={contactref} className="textbox border-2 w-1/2 "/>
    </p>
    <p className='flex'>
    <span className='w-1/3 text-center'>password :</span> <input type="text"  ref={pwdref} className="textbox border-2 w-1/2"/>
    </p>
    {/* <p>
      User Type : <select>
        <option value="Buyer/Owner">Buyer/Owner</option>
        <option value="Agent/Builder">Agent/Builder</option>
      </select>
    </p> */}
    <div className='flex gap-2 w-1/2 mx-auto'>
    <input type="button" className='bg-green-400 w-1/2 '
     value="Register" onClick={()=>addUser()} />  
    <input type="button" value="Cancel" className='bg-red-400 w-1/2 '
     onClick={()=>clearData()} />
    
    </div>
    {msg}
    
    </div>
    
 
  )
}
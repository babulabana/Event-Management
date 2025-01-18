import React, { useEffect, useRef, useState } from 'react'
import { useContext } from 'react'
import userContext from "../context/userContext"
import profileContext from "../context/profileContext"
import { useNavigate } from 'react-router'
import axios from 'axios'
export default function ChangePwd() {
    let user = useContext(userContext)
    let  [msg,setmsg ] = useState("")
    
    let profileData = useContext(profileContext)
    const navigate = useNavigate()
    let oldpwdref =useRef("")
    let newpwdref = useRef("")
    let renewpwdref = useRef("")
    useEffect(()=>{
        if(profileData.userProfileData==undefined)
            {
              console.log("in if ")
              navigate("/login")
            }
            else
            {
            }    
        },[])
        let changepassword = async ()=>
            {
                if(newpwdref.current.value!= renewpwdref.current.value)
                {
                    alert("both the passwords shold be same ");
                }   
                else
                {
                    let data = {id: profileData.userProfileData[0]._id,
                        pwd:oldpwdref.current.value ,
                        newpwd:newpwdref.current.value }
                        
                        console.log("Data From Frontend",data)
                        await axios.put("http://localhost:8080/user/updatepassword",data)
                     .then((d)=>{
                        if(d.data!= 0 )
                        {
                            alert("password updated successfully, login again")
                            user.setislogin(false)
                            navigate("/login");
                            return
                        }
                        else
                        {
                        setmsg("Password Not Updated");
                        }
                        }
                        )
                     .catch((err)=>{console.log(err)})
                }
            }
  return (
    <div className='flex flex-col w-1/2 mx-auto gap-5  border-4 p-5  '>
     
    <h1>UserRegistration</h1>
    <p className='flex'>
    <span className='w-1/3 text-center'>Old password :</span> <input type="text" ref={oldpwdref} className="textbox border-2  w-1/2"/>
    </p>
    <p className='flex'>
    <span className='w-1/3 text-center'>new password :</span> <input type="text" ref={newpwdref} className="textbox border-2 w-1/2 "/>
    </p>
    <p className='flex'>
    <span className='w-1/3 text-center'>re-enter new password : </span><input type="text" ref={renewpwdref} className="textbox border-2 w-1/2 "/>
    </p>
   
    <div className='flex gap-2 w-1/2 mx-auto'>
    <input type="button" className='bg-green-400 w-1/2 '
     value="change password" onClick={()=>changepassword()} />  
    <input type="button" value="Cancel" className='bg-red-400 w-1/2 ' />
    
    </div>
 
    {msg}
    </div>
    
  )
}

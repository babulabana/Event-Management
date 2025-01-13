import axios from 'axios';
import React, { useRef, useState } from 'react'

export default function AdminLogin() {
    let emailref = useRef("");
    let pwdref = useRef("");
    const [msg,setmsg] = useState("");
    let loginadmin = ()=>{
        let data ={      
            adminemail:emailref.current.value,adminpwd:pwdref.current.value
        }
        console.log(data)
        axios.post("http://localhost:8080/admin/login",data)   
        .then((d)=>{
            if(d.data){
                console.log(d.data)
              setmsg("success")
            }
            else
            {
              setmsg("invalid user")
            }
        })
        .catch((e)=> console.log(e))
    
    }

  return (
    <div>
       <div className='flex flex-col w-1/2 mx-auto gap-5  border-4 p-5  '>
      <p className='flex'>
      <span className='w-1/3 text-center'>Enter Email:  </span> <input type="text"  ref={emailref} className="textbox border-2  w-1/2" />
      </p>
      <p className='flex'> <span className='w-1/3 text-center'>
        Enter password :</span> <input type="password" ref={pwdref} className="textbox border-2  w-1/2"/>
      </p>
      <input type="button" value="login" className='bg-green-400 w-1/3  mx-auto
      ' onClick={()=>loginadmin()} />
      <h1>{msg}</h1>
    </div>
    </div>
  )
}

import React, { useContext } from 'react'
import userContext from '../context/userContext'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
export default function Logout() {
  const navigate = useNavigate()
  
  let user = useContext(userContext)
  let demo =()=>
  {
    user.setislogin(false)
    navigate("/login");
  }
  useEffect(()=>{
    // user.setislogin(false)
    // navigate("/")
  },[])

  return (
    <input type="button " value="logout"  className='bg-red-500 w-1/3 text-center mx-auto'
    onClick={()=>demo()}/>
  )
}
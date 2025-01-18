import React from 'react'
import { useContext } from 'react'
import userContext from '../context/userContext'
import { Link } from 'react-router-dom'

export default function Togglelogin() {
   let user = useContext(userContext)
    let uifalse = <div><Link to="/register">Register</Link >|<Link to="/login">Login</Link></div>
    let uitrue = <div><Link to="/userprofile">Profile</Link>|<Link to="/logout">Logout</Link>|<Link to = '/updatepassword'>Change Password</Link></div>
  return (
    <div>
      {user.islogin?uitrue:uifalse}
    </div>
  )
}

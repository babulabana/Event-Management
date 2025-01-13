import React from 'react'
import { useContext } from 'react'
import userContext from '../context/userContext'
import Login from './Login'
import Logout from './logout'
import Userprofile from './Userprofile'

export default function Home() {
    let user = useContext(userContext)


  return (<>
    {user.islogin?<Userprofile></Userprofile>:<Login></Login>}
        </>
  )
}
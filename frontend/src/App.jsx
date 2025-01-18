import { useState } from 'react'

import './App.css'
import UserRegistration from './components/UserRegistration'
import UserLogin from './components/UserLogin'
import userContext from './context/userContext'
import Home from './components/Home'
import {  Route, Routes } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Login from './components/Login'
import Logout from './components/logout'
import Userprofile from './components/Userprofile'
import profileContext from './context/profileContext'
import Togglelogin from './components/Togglelogin'
import AdminLogin from './components/admin/AdminLogin'
import ChangePwd from './components/ChangePwd'

function App() {
  const [count, setCount] = useState(0)
  const [login ,setlogin] = useState(false)

 const [userProfileData,setUserProfileData] =useState()
 
  
  return (
    <>
    {/* <Link to="/register"></Link> */}
    <userContext.Provider value={{islogin:login, setislogin:setlogin}}>
      <Togglelogin></Togglelogin>
      <profileContext.Provider value={{userProfileData:userProfileData,setUserProfileData:setUserProfileData}}>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/logout' element={<Logout></Logout>}></Route>
          <Route path='/register' element={<UserRegistration></UserRegistration>} ></Route>
           <Route path='/userprofile' element={<Userprofile></Userprofile>}></Route>
           <Route path="/updatepassword" element={<ChangePwd></ChangePwd>}></Route>
        </Routes>
      </profileContext.Provider>
    </userContext.Provider>
    <AdminLogin></AdminLogin>
    {/* <Userprofile></Userprofile> */}
    {/* <UserRegistration></UserRegistration> */}
    {/* <UserLogin></UserLogin> */}
     </>
  )
}

export default App

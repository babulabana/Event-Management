import React, { useRef, useState } from 'react';
import axios from 'axios';

export default function UserLogin() {
    const [msg, setMsg] = useState("");
    let emailRef = useRef("");
    let pwdRef = useRef("");

    let loginUser = () => {
        let data = {
            email: emailRef.current.value,
            pwd: pwdRef.current.value
        };

        axios.post("http://localhost:8080/user/login", data)
            .then((response) => {
                setMsg("Login successful! Redirecting...");
                clearData();
                // Add logic for redirecting or handling successful login
            })
            .catch((error) => {
                console.log(error);
                setMsg("Login failed. Please check your credentials and try again.");
            });
    };

    let clearData = () => {
        emailRef.current.value = "";
        pwdRef.current.value = "";
    };

    return (
        <div className='flex flex-col w-1/2 mx-auto gap-5 border-4 p-5'>
            <h1>User Login</h1>
            <p className='flex'>
                <span className='w-1/3 text-center'>Email:</span>
                <input type="text" ref={emailRef} className="textbox border-2 w-1/2" />
            </p>
            <p className='flex'>
                <span className='w-1/3 text-center'>Password:</span>
                <input type="password" ref={pwdRef} className="textbox border-2 w-1/2" />
            </p>
            <div className='flex gap-2 w-1/2 mx-auto'>
                <input type="button" className='bg-green-400 w-1/2' value="Login" onClick={loginUser} />
                <input type="button" value="Cancel" className='bg-red-400 w-1/2' onClick={clearData} />
            </div>
            {msg && <p className='text-center mt-2'>{msg}</p>}
        </div>
    );
}

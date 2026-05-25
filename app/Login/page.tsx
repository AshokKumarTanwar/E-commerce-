"use client";

import { useState } from "react";

export default function LoginPage() {

  const [loginDetails, setLoginDetails] = useState({

    fullname:"",
    password:""

  });

  function handleChange(event:any) {

    let fieldName = event.target.name;
    let fieldValue = event.target.value;
    setLoginDetails({

      ...loginDetails,

      [fieldName]: fieldValue

    });

    console.log(fieldName);

  }

  const handleLogin = () => {

    alert(`Welcome ${loginDetails.fullname}`);

  };

  return (

    <div className="loginPage">

      <div className="loginCard">

        <h1>
          Login
        </h1>

        <input
          type="text"
          name="fullname"
          placeholder="Enter your name"
          value={loginDetails.fullname}
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          value={loginDetails.password}
          onChange={handleChange}
        />

        <button onClick={handleLogin}>
          Login
        </button>

      </div>

    </div>

  );
}
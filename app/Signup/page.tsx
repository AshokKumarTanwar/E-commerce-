"use client";

import { useState } from "react";

export default function Signup() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async (e: any) => {

    e.preventDefault();

    try {

      const response = await fetch(
        "http://localhost:5000/api/auth/signup",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            name,
            email,
            password,
          }),
        }
      );

      const data = await response.json();

      console.log(data);

      alert("Signup Successful 😄");

      setName("");
      setEmail("");
      setPassword("");

    } catch (error) {

      console.log(error);

      alert("Signup Failed");

    }

  };

  return (

    <div className="authContainer">

      <form
        className="authForm"
        onSubmit={handleSignup}
      >

        <h1>Create Account</h1>

        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) =>
            setName(e.target.value)
          }
        />

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />

        <button type="submit">
          Sign Up
        </button>
        
    <p className="loginText">
        Already have an account?
     <a href="/Login"> Login</a>
    </p>

      </form>

    </div>

  );
}
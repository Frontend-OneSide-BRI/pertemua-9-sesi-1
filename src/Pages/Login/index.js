import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const users = [
  {
    email: "test@gmail.com",
    password: "123",
    role: "admin",
  },
  {
    email: "test1@gmail.com",
    password: "123",
    role: "member",
  },
];

function Login() {
  const navigate = useNavigate();

  const onSubmit = (event) => {
    //add login to login and set local storage user data
    //see login on layout
  };

  useEffect(() => {
    if (localStorage.getItem("userData")) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="email" placeholder="masukan email" />
        <input type="password" placeholder="masukan password" />
        <button>Log in</button>
      </form>
    </div>
  );
}

export default Login;

import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      home
      <button
        onClick={(event) => {
          localStorage.removeItem("userData");
          navigate("/login");
        }}
      >
        logout
      </button>
    </div>
  );
};

export default Home;

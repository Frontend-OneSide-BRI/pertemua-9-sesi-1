import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Layout({ children }) {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("userData")) {
      navigate("/login");
    }
  }, [navigate]);
  return (
    <div>
      <h1>Di tambahkan layout</h1>
      {children}
    </div>
  );
}

export default Layout;

import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Layout({ children, access }) {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("userData")) {
      navigate("/login");
    }
  }, [navigate]);

  useEffect(() => {
    //tambahkan logic authorization hak akses ketika sudah login
  }, [access]);
  return (
    <div>
      <h1>{access}</h1>
      <h1>Di tambahkan layout</h1>
      {children}
    </div>
  );
}

export default Layout;

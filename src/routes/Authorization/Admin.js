import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
function Admin({ children }) {
  const navigate = useNavigate();
  useEffect(() => {
      navigate("/login");
  }, [navigate]);

  return <div></div>;
}

export default Admin;

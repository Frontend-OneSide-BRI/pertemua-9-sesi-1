import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
function Member({ children }) {
    const navigate = useNavigate();

    useEffect(() => {
        navigate("/login");
    }, [navigate]);

  return <div>member{children}</div>;
}

export default Member;

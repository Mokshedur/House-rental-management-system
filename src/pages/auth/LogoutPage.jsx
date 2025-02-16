import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LogoutPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.localStorage.clear();

    window.location.replace("/");
  }, [navigate]);
  return <div>Logging out...</div>;
};

export default LogoutPage;

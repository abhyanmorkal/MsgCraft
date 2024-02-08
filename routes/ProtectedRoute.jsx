import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const ProtectedRoute = ({ Component, ...rest }) => {
  const navigate = useNavigate();

  useEffect(() => {
    let login = localStorage.getItem("login");
    if (!login) {
      navigate("/login");
    }
  }, []);

  return (
    <>
      <Component {...rest} />
    </>
  );
};

export default ProtectedRoute;

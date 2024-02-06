// pages/Auth/Login.js
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import LoginForm from "../../components/auth/LoginForm"; // Adjust the path based on your project structure

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = (formData) => {
    const isValidUser = login(formData);

    if (isValidUser) {
      // Redirect to the dashboard if login is successful
      navigate("/");
      console.log(formData);
    } else {
      // Handle login failure (display error message, etc.)
      console.error("Invalid credentials");
    }
  };

  return (
    <div>
      <h2>Login Page</h2>
      <LoginForm onLogin={handleLogin} />
    </div>
  );
};

export default Login;

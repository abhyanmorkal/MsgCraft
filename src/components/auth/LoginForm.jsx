import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./loginform.scss";
import YellowButton from "../button/buttonReg/yellowButton";

// eslint-disable-next-line react/prop-types
const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const navigate = useNavigate();

  useEffect(() => {
    const login = localStorage.getItem("login");
    if (login) {
      navigate("/");
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Assuming validation passes
    // onLogin(formData);
    localStorage.setItem("login", true);
    navigate("/");
    console.log("login", formData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <YellowButton
          title="Login"
          padding={"15px"}
          borderRadius="8px"
          onclick={handleSubmit}
        />
      </form>
    </div>
  );
};

export default LoginForm;

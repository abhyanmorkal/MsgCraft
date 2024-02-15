// components/SignupForm.js
import { useState } from "react";
import "./signupform.scss";
import YellowButton from "../button/buttonReg/yellowButton";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

// eslint-disable-next-line react/prop-types
const SignupForm = ({ onSignup }) => {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target || e;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Assuming validation passes
    onSignup(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />
      </label>
      <br />
      <label>
        Phone:
        <PhoneInput
          className="phoneinput"
          defaultCountry="in"
          name="number"
          value={formData.number}
          onChange={handleInputChange}
          inputProps={{
            required: true,
          }}
        />
      </label>
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
      <label>
        Confirm Password:
        <input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleInputChange}
          required
        />
      </label>
      <br />
      <YellowButton title="Sign Up" padding={"15px"} borderRadius="8px" />
    </form>
  );
};

export default SignupForm;

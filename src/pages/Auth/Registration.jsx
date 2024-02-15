import SignupForm from "../../components/auth/SignupForm";
import FirstHeader from "../../components/header/FirstHeader";
import LeftArea from "./LeftArea";
import { Link } from "react-router-dom";
import "./registration.scss";
import Google from "../../assets/googlelogo.svg";

const Registration = () => {
  const handleSignup = async () => {
    try {
      // TODO: Perform your registration API request or logic here
      // Example: const response = await authService.register(formData);
      // Handle successful registration (redirect, display message, etc.)
    } catch (error) {
      console.error("Registration error:", error);
      // Handle registration error (display error message, etc.)
    }
  };

  return (
    <>
      <FirstHeader />
      <div className="authContainer">
        <div className="leftArea">
          <LeftArea />
        </div>
        <div
          className="rightArea"
          style={{
            width: "50%",
            height: "100%",
            padding: "1.5rem 7rem",
            display: "flex",
            flexDirection: "column",
            // alignItems: "center",
            // justifyContent: "space-around",
          }}
        >
          <div className="link" style={{ marginBottom: "20px" }}>
            <h2 style={{ fontSize: "40px" }}>Registration</h2>
            <p style={{ fontSize: "12px" }}>
              have and Account{" "}
              <span>
                <Link to="/login">Log in </Link>
              </span>
            </p>
          </div>
          <div>
            <SignupForm onSignup={handleSignup} />
          </div>
          <div className="horizontal-line-container">
            <div className="line"></div>
            <div className="text">OR</div>
          </div>
          <div className="google">
            <div className="logo">
              <img src={Google} alt="logo" />
            </div>
            <p>Continue with Google</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Registration;

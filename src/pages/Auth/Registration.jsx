// pages/Auth/Registration.js
import SignupForm from "../../components/auth/SignupForm"; // Adjust the path based on your project structure

const Registration = () => {
  const handleSignup = async (formData) => {
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
    <div>
      <h2>Registration Page</h2>
      <SignupForm onSignup={handleSignup} />
    </div>
  );
};

export default Registration;

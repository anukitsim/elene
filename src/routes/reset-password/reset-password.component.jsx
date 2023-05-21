import { useState } from "react";
import FormInput from "../../components/form-input/form-input.component";
import { resetPassword } from "../../utils/firebase/firebase.utils";
import Button from "../../components/button/button.component";
import { Link } from "react-router-dom";
import "./reset-password.styles.scss";

const ResetPasswordPage = () => {
  const [email, setEmail] = useState("");

  const handleResetPassword = async (event) => {
    event.preventDefault();

    try {
      await resetPassword(email);
      alert("Password reset email sent.");
      setEmail("");
    } catch (error) {
      console.log(error);
      alert("An error occurred. Please try again later.");
    }
  };

  






  const handleChange = (event) => {
    setEmail(event.target.value);
  };

  return (
    <div className="reset-password-container">
      <h2>RESET YOUR PASSWORD</h2>
      <span>we will send you an email to reset your password</span>
      <form onSubmit={handleResetPassword}>
        <FormInput
          label="Email"
          type="email"
          required
          value={email}
          onChange={handleChange}
        />
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default ResetPasswordPage;

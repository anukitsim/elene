import { useState } from "react";
import { useDispatch } from "react-redux";
import FormInput from "../form-input/form-input.component";

import "./sign-in-form.styles.scss";
import Button from "../button/button.component";
import { useNavigate } from "react-router-dom";

import {
  googleSignInStart,
  emailSignInStart,
} from "../../store/user/user.action";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const dispatch = useDispatch();
  const [formFields, setFormFields] = useState(defaultFormFields);

  const navigate = useNavigate();

  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    dispatch(googleSignInStart());
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      dispatch(emailSignInStart(email, password));

      resetFormFields();
    } catch (error) {
      if (error.code === "auth/wrong-password") {
        alert("password is not correct");
      } else if (error.code === "auth/user-not-found") {
        alert("user not found with email");
      }
      console.log(error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };
  const handleForgotPassword = () => {
    navigate("/reset-password");
  };

  const handleSignUp = () => {
    navigate("/sign-up");
  };

  return (
    <div className="sign-up-container">
      <h2>LOG IN</h2>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          name="email"
          value={email}
          onChange={handleChange}
        />

        <FormInput
          label="Password"
          type="password"
          required
          name="password"
          value={password}
          onChange={handleChange}
        />
        <p className="forgot-password" onClick={handleForgotPassword}>
          forgot password
        </p>

        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button type="button" onClick={signInWithGoogle}>
            Google sign in
          </Button>
        </div>
        <p className="forgot-password" onClick={handleSignUp}>
          Create Account
        </p>
      </form>
    </div>
  );
};

export default SignInForm;

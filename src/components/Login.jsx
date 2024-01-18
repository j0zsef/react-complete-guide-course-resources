import { useRef, useState } from "react";
import Input from "./Input.jsx";
import { hasMinLength, isEmail } from "../util/validation.js";

export default function Login() {
  const email = useRef("");
  const password = useRef("");
  const [emailInvalid, setEmailInvalid] = useState(false);
  const [passwordInvalid, setPasswordInvalid] = useState(false);
  const handleSubmit = function (event) {
    event.preventDefault();

    validateEmail(email.current.value);
    validatePassword(password.current.value);

    if (emailInvalid || passwordInvalid) {
      return;
    }

    console.log("Submitting form.");
  };

  const validateEmail = () => {
    const emailIsInvalid = !isEmail(email.current.value);
    setEmailInvalid(() => emailIsInvalid);
  };

  const validatePassword = () => {
    const passwordIsInvalid = !hasMinLength(password.current.value, 6);
    setPasswordInvalid(() => passwordIsInvalid);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          label="Email"
          id="email"
          ref={email}
          type="email"
          name="email"
          error={emailInvalid && "Please enter a valid email."}
          onBlur={() => validateEmail()}
        />
        <Input
          label="Password"
          id="password"
          ref={password}
          type="password"
          name="password"
          error={passwordInvalid && "Please enter a valid password."}
          onBlur={() => validatePassword()}
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}

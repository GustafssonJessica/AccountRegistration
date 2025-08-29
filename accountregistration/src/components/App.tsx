import { useState } from "react";
import { Form } from "./Form";
import { InputField } from "./InputField";

function App() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPassword(value);
    if (value.length < 8 && value.length > 0) {
      setPasswordError("Password must be at least 8 characters long");
      
    } 
    else if (value != confirmPassword && confirmPassword.length > 0) {
      setPasswordError("Passwords do not match");
    }
    else {
      setPasswordError("");
    }
  };

  const handleConfirmPasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = e.target.value;
    setConfirmPassword(value);
    if (value !== password && value.length > 0) {
      setPasswordError("Passwords do not match"); 
    } else {
      setPasswordError("");
    }
  };

  const fields = [
    <InputField type="text" placeholder="Name" id="name" />,
    <InputField type="username" placeholder="Username" id="username" />,
    <InputField type="email" placeholder="Email" id="email" />,
    <InputField
      type="password"
      placeholder="Password"
      id="password"
      value={password}
      onChange={handlePasswordChange}
    />,
    <InputField
      type="password"
      placeholder="Confirm password"
      id="confirmPassword"
      value={confirmPassword}
      onChange={handleConfirmPasswordChange}
    />,
  ];

  return (
    <>
      <Form inputFields={fields} submitButtonText="Send" />
      {passwordError && <p style={{ color: "red" }}>{passwordError}</p>}
    </>
  );
}

export default App;

import { Form } from "./Form";
import { InputField } from "./InputField";

function App() {
  const fields = [
    <InputField type="text" placeholder="Name" id="name" />,
    <InputField type="username" placeholder="Username" id="username" />,
    <InputField type="email" placeholder="Email" id="email" />,
    <InputField type="password" placeholder="Password" id="password" />,
    <InputField
      type="password"
      placeholder="Confirm password"
      id="confirmPassword"
    />,
  ];

  return (
    <>
      <Form inputFields={fields} submitButtonText="Send" />
    </>
  );
}

export default App;

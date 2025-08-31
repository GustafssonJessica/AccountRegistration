import type { ReactElement, ReactNode } from "react";
import { SubmitButton } from "./SubmitButton";

interface IFormProps {
  inputFields: ReactNode;
  submitButtonText: string;
  disabled?: boolean;
}

export const Form = ({
  inputFields,
  submitButtonText,
  disabled = false
}: IFormProps): ReactElement => {
  return (
    <>
      <form className="form">
        {inputFields}
        <SubmitButton buttonText={submitButtonText} disabled = {disabled}/>
      </form>
    </>
  );
};

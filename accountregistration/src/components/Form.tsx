import type { ReactElement, ReactNode } from "react";
import { SubmitButton } from "./SubmitButton";

interface IFormProps {
  inputFields: ReactNode;
  submitButtonText: string;
}

export const Form = ({
  inputFields,
  submitButtonText,
}: IFormProps): ReactElement => {
  return (
    <>
      <form>
        {inputFields}
        <SubmitButton buttonText={submitButtonText} />
      </form>
    </>
  );
};

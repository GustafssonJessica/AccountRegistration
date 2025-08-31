import type { ReactElement } from "react";

interface ISubmitButtonProps {
  buttonText: string;
  disabled?: boolean
}

export const SubmitButton = ({
  buttonText, disabled
}: ISubmitButtonProps): ReactElement => {
  return <button className="submitbutton" disabled = {disabled} type="submit"> {buttonText}   </button>;
};

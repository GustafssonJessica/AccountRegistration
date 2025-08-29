import type { ReactElement } from "react";

interface ISubmitButtonProps {
  buttonText: string;
}

export const SubmitButton = ({
  buttonText,
}: ISubmitButtonProps): ReactElement => {
  return <button className="submitbutton" type="submit"> {buttonText} </button>;
};

import type { ReactElement } from "react";

interface IInputFieldProps {
  type: string;
  placeholder: string;
  id: string;
}

export const InputField = ({
  type,
  placeholder,
  id,
}: IInputFieldProps): ReactElement => {
  return (
    <>
      <label htmlFor="{id}">{placeholder}</label>
      <input type={type} placeholder={placeholder} id={id} required />
    </>
  );
};

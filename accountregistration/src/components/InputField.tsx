import type { ReactElement } from "react";

interface IInputFieldProps {
  type: string;
  placeholder: string;
  id: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputField = ({
  type,
  placeholder,
  id,
  value, 
  onChange
}: IInputFieldProps): ReactElement => {
  return (
    <>
    <div className="input-field">

      <label htmlFor={id}>{placeholder}</label>
      <input type={type} placeholder={placeholder} id={id} required
      value ={value}
      onChange = {onChange} />
      </div>
    </>
  );
};

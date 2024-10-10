import { ChangeEvent, FC, ReactNode } from "react";

export type InputTextProps = {
  name: string;
  type: "text" | "select";
  label: ReactNode;
  onChange: (value: string | null, name: string) => void;
  isDisabled: boolean;
};
const InputText: FC<InputTextProps> = ({ name, type, label, onChange,isDisabled = false }) => {
    const handleOnChange = (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement> )=>{
        e.preventDefault();
        onChange(e.target.value, e.target.name);
    }
  return (
    <>
      {label}
      <input name={name} type={type} onChange={(e)=>handleOnChange(e)} disabled={isDisabled}/>
    </>
  );
};

export default InputText;

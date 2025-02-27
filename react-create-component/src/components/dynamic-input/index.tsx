import { ChangeEvent, FC } from "react";
import { FormField } from "../dynamic-form";
import { Select } from "../select";

interface DynamicForm extends FormField {
  value: string;
  onChange: (value: string, name: string) => void
}

const DynamicInput: FC<DynamicForm> = ({ name, type, options, label, value, onChange }) => {
  let inputElement = null;

  switch (type) {
    case 'text':
      inputElement = <input name={name} type={type} value={value} onChange={(e: ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.value, name);
      }} />
      break;
    case 'select':
      inputElement = <Select options={options} value={value} onChange={(selectedItem: { value: string; label: string }) => {
        onChange(selectedItem.value, name);
      }} />
      break;
    default:
      inputElement = null;
  }

  return (
    <div>
      <label>{label}</label>
      <div>
        {inputElement}
      </div>
    </div>
  )
}

export default DynamicInput;
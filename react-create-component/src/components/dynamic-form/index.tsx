import { ReactNode, FC, useState, FormEvent } from "react";
import DynamicInput from "../dynamic-input";

export type FormField = {
  name: string
  type: 'text' | 'select'
  options?: {
    label: string,
    value: string
  }[]
  label: ReactNode
}

export type FormData = {
  [key: string]: string
}

export type DynamicFormProps = {
  fields: FormField[],
  onSubmit: (formData: FormData) => void,
  isLoading?: boolean
}

export const DynamicForm: FC<DynamicFormProps> = ({ fields, onSubmit, isLoading }) => {
  const initialValue = fields.reduce((acc, field) => {
    acc[field.name] = "";
    return acc;
  }, {} as FormData );

  const [formState, setFormState] = useState<FormData>(initialValue);

  const handleChange = (value: string, name: string) => {
    setFormState({
      ...formState,
      [name]: value
    });
  }

  const fieldsList = fields.map(field => <DynamicInput value={formState[field.name]} key={field.name} {...field} onChange={handleChange} />);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit(formState);
  }

  const handleClear = () => {
    setFormState(initialValue);
  }

  return (
    <div>
      <h3>{'< insert form component here />'}</h3>
      <form onSubmit={handleSubmit}>
        {
          fieldsList
        }
        <button disabled={isLoading} type="submit">{isLoading ? 'Loading...' : 'Submit'}</button>
        <button onClick={handleClear} type="button">Clear</button>
      </form>
    </div>
  )
};
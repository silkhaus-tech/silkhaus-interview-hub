import { ReactNode, FC } from "react";
import { Select } from "../select/index"
import Input from "../input";
import {SelectOption} from "../select/index"

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

export const DynamicForm: FC<DynamicFormProps> = ({ fields, onSubmit }) => {

  const formValues = [ {

  } ]

  console.log(fields);

  const selectOptionData : SelectOption[] = [];
  fields.map((field) => {
    selectOptionData.push({
      "label": field.label,
      "value": ""
    });
  });

  const getSelectedValue = () => {

  }

  return (
    <form>
      <h2>Basic Form</h2>
      {
      fields.map((field) => 
        (field.type === "text") ? <Input options={fields} /> : <Select options={selectOptionData} onChange={(val) => getSelectedValue(val)} value={""} />
      }
      <button type="reset">Clear</button>
      <button type="button" onClick={() => onSubmit} >Submit</button>
    </form>
  )
};
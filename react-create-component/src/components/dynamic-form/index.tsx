import React, { ReactNode, FC, useState, FormEventHandler } from "react";
import { Select } from "../select";
import { Text } from "../text";

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

export const DynamicForm: FC<DynamicFormProps> = ({ fields, onSubmit, isLoading }: DynamicFormProps) => {

  const [dataObj, setDataObj] = useState<FormData>({ firstName: '', lastName: '', gender: '' });

  const handleInputVal = (value: string | null, name: any) => {
    let newEntry = { [name]: value };
    setDataObj({ ...dataObj, ...newEntry })
  }

  const handleSubmit = (event: any) => {
    event.preventDefault();
    onSubmit(dataObj);
  }

  return (
    <div>
      <h3>Dynamic Form</h3>

      <form onSubmit={handleSubmit} className="form-wrapper">
        {fields.map((field, index) => {
          return <React.Fragment key={index}>
            {field.type === 'text' ?
              <Text name={field.name} label={field.label} onChangeText={handleInputVal} isLoading={isLoading!} />
              : field.type === 'select' ?
                <Select options={field.options} value={field.name} label={field.label} onChange={handleInputVal} isLoading={isLoading!} />
                :
                null
            }
          </React.Fragment>
        })
        }
        <div>
          <button type="submit">Submit Data</button>
          <button type="reset">Reset Data</button>
        </div>
      </form>
    </div>
  )
};
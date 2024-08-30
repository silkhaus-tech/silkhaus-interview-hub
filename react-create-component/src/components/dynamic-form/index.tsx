import { ReactNode, FC, useState } from "react";
import { Select } from "../select";
import { Input } from "../input";
import '../../App.css'

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
  const [formData, setFormData] = useState<FormData>({});

  if (!fields?.length) {
    return <p>Form field not available.</p>
  }

  const handleChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value
    })
  }

  return (
    <div>
      <h3>Form</h3>
      <form onSubmit={(event) => {
        event?.preventDefault()
        onSubmit(formData)
      }}>
        {fields?.map((field) => {
          return <>
            {field?.type === 'select' && <Select
              disabled={isLoading}
              key={field.name}
              onChange={(value) => handleChange(field?.name, value?.value ?? '')}
              options={field.options} />
            }
            {field?.type === 'text' && <Input
              disabled={isLoading}
              key={field.name}
              label={<label>{field?.label}</label>}
              onChange={(value) => handleChange(field?.name, value ?? '')}
              value={formData[field.name] ?? ''}
              name={field.name} />
            }
          </>
        })}

        <div className="button-wrapper">
          <button type="submit" style={{ background: isLoading ? 'grey' : 'green', color: "white" }} disabled={isLoading}>Submit</button>
          <button type="button" style={{ background: isLoading ? 'grey' : 'red', color: "white" }} onClick={() => setFormData({})} disabled={isLoading}>Clear</button>
        </div>
      </form>
    </div>
  )
};
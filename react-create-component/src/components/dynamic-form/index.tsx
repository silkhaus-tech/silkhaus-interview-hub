import { ReactNode, FC, useState } from "react";
import { Select } from "../select";
import { Input } from "../input";

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
 isLoading: boolean
}

export const DynamicForm: FC<DynamicFormProps> = ({fields, onSubmit, isLoading}) => {
  const [formData,setFormData] = useState<FormData>({});
  let fieldArray = fields.map((field:FormField)=>{
    switch(field.type){
      case "text": return (<Input type="text" disabled={isLoading} name={field.name} onChange={(event:any)=>{
        let obj:FormData = {...formData};
        obj[field.name] = event.target.value;
        setFormData(obj)
      }
      }></Input>);
      case "select": return (<Select options={field.options} disabled={isLoading} onChange={(option:any)=>{
        let obj:FormData = {...formData};
        obj[field.name] = option.value;
        setFormData(obj)
        }
      }></Select>);
    }
  })
  return (
    <div>
      <h3>{'< insert form component here />'}</h3>
      <form className={isLoading? 'disable':''} onSubmit={(event)=>{ event.preventDefault();onSubmit(formData);}}>
        {fieldArray}
        <button type="submit" >Submit</button>
        <button type="reset">Clear</button>
      </form>
    </div>
  )
};
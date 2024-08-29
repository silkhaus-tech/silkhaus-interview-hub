import { ReactNode, FC, useState } from "react";
import { Select } from "../select";

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

export const DynamicForm: FC<DynamicFormProps> = (props) => {
  const [data, setData] = useState<any>({"firstName":"", "lastName": ""})
  const [selectedData, setSelectedData] = useState<any>({});
  // {
  //   console.log("props", props)
  // }
  const onChangeEvent=(e: any)=>{
    let res = {...data}
    res[e.target.name] = e.target.value
    console.log("final data", data)
    setData(res)
  }
  const onChangeSelect=(e:any)=>{
    console.log(e)
    setSelectedData(e)
  }
  const handleSubmit=(e:any)=>{
    e.preventDefault()
    // textData: data, list:selectedData
    const finalData={firstName:data.firstName, lastName:data.lastName, gender:selectedData.value}
    props.onSubmit(finalData)
  }
  return (
    <div>
          
      {/* <h3>{}</h3> */}
      <form onSubmit={handleSubmit}>
        {
          props.fields ? props.fields.map((item:any)=>{
            return(
              <>
              {
                item.type === "text" ?
                <>
                   <label htmlFor="name">{item.name}</label>
                   <input type={item.type} name={item.name} onChange={onChangeEvent}/>
                </>
                : 
                <Select options={item.options} onChange={onChangeSelect}/>
              }
               
              </>
            )
          })  
          : "No data"
        }
        <button type="submit">Submit</button>
      </form>
      
    </div>
  )
};
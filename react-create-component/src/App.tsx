
import { API } from './api'
import './App.css'
import {
  DynamicForm,
  FormData,
  type FormField
} from './components/dynamic-form'

const formFields: FormField[] = [
  {
    name: 'firstName',
    type: 'text',
    label: 'First Name',
  },
  {
    name: 'lastName',
    type: 'text',
    label: 'Last Name',
  },
  {
    name: 'gender',
    type: 'select',
    label: 'Gender',
    options: [
      { label: 'Male', value: 'M' },
      { label: 'Female', value: 'F' },
    ]
  },
]

function App() {
  
  const onSubmit = async (data: FormData) => {
    // use API.submitForm functions here
    console.log("submit data", data)
   
    try{
      let obj = {
        firstName:data.firstName,
        lastName:data.lastName,
        gender:data.gender
      }
      console.log("check api data", obj)
      await API.submitForm(obj).then((response)=>{
        console.log("response", response)
      })
      // console.log("api response", result)
    }
    catch(error:any){
        console.log("catch error", error)
    }
  }

  return (
    <>
      <div>
        <DynamicForm fields={formFields} onSubmit={onSubmit}></DynamicForm>
      </div>
    </>
  )
}

export default App

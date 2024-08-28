import { useState } from 'react';
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
  let [isLoading, setisLoading] = useState<boolean>(false);
  let [msg, setmsg] = useState<string>("");
  const onSubmit = (data: FormData) => {
    setisLoading(true);
    setmsg("");
    // use API.submitForm functions here
    API.submitForm(data).then(res=>{
      setmsg("Data is posted successfully");
      setisLoading(false);
    }, err=>{
      setmsg("Somthing went wrong");
      setisLoading(false);
    })
  }

  return (
    <>
      <div>
        <DynamicForm fields={formFields} onSubmit={onSubmit} isLoading={isLoading}></DynamicForm>
        <div>{msg}</div>
      </div>
    </>
  )
}

export default App

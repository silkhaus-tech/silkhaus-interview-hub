import { useState } from 'react'
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

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string| null>();
  const onSubmit = (data: FormData) => {
    // use API.submitForm functions here
    setIsLoading(true)
    setError(null)
    console.log(data);
    API.submitForm(data).then((response) => {
      console.log("Response", response)
      setIsLoading(false)  
    }).catch(() => {
      setError("Please enter proper values.");
      setIsLoading(false)
    })
  }

  return (
    <>
      <div>
        {error && <p className='error'>{error}</p>}
        <DynamicForm fields={formFields} onSubmit={onSubmit} isLoading={isLoading}></DynamicForm>
      </div>
    </>
  )
}

export default App

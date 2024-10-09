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
      { label: '', value: '' },
      { label: 'Male', value: 'M' },
      { label: 'Female', value: 'F' },
    ]
  },
]

function App() {
  const [isLoading, setIsLoading] = useState(false)

  const onSubmit = async (data: FormData) => {
    // use API.submitForm functions here
    console.log(data)

    try {
      setIsLoading(true)
      await API.submitForm(data)
    } catch (error) {
      if (error instanceof Error) throw new Error(error.message)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <div>
        <DynamicForm fields={formFields} onSubmit={onSubmit} isLoading={isLoading}></DynamicForm>
      </div>
    </>
  )
}

export default App

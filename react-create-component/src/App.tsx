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
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data: FormData) => {
    try {
      setIsLoading(true);
      const isSubmitted = await API.submitForm(data);
      setIsLoading(false);
      if (isSubmitted) {
        alert("Form Submitted");
      } else {
        alert("Error");
      }

    } catch (error) {
      setIsLoading(false);
      alert("Error");
    }
  }

  return (
    <>
      <div>
        <DynamicForm fields={formFields} onSubmit={onSubmit} isLoading={isLoading} />
      </div>
    </>
  )
}

export default App

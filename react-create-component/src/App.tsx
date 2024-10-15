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

  const [loading, setloading] = useState(false);

  const onSubmit = async (data: FormData) => {
    // use API.submitForm functions here
    console.log('From onSubmit from App: ', data)
    setloading(true);
    try {
      let response = await API.submitForm(data);
      console.log('Data successfully submitted. ', response);
    } catch (error) {
      console.error('Error occurred in submitting data: ', error);
    } finally {
      setloading(false);
    }
  }

  return (
    <>
      <div>
        <DynamicForm fields={formFields} onSubmit={onSubmit} isLoading={loading}></DynamicForm>
      </div>
    </>
  )
}

export default App

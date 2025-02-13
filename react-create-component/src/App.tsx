import { API } from './api';
import {useState} from "react";
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

  const onSubmit = async (data: FormData) => {
    setIsLoading(true);
    // use API.submitForm functions here
    const formService = await API.submitForm(data);
    console.log(data)

    setIsLoading(false);
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

import { useState } from "react";
import { API } from "./api";
import "./App.css";
import {
  DynamicForm,
  FormData,
  type FormField,
} from "./components/dynamic-form";

const formFields: FormField[] = [
  {
    name: "firstName",
    type: "text",
    label: "First Name",
  },
  {
    name: "lastName",
    type: "text",
    label: "Last Name",
  },
  {
    name: "gender",
    type: "select",
    label: "Gender",
    options: [
      { label: "Male", value: "M" },
      { label: "Female", value: "F" },
    ],
  },
];

function App() {
  const [isLoading, setLoading] = useState(false);

  const onSubmit = async (data: FormData) => {
    // use API.submitForm functions here
    console.log(data);
    try {
      setLoading(true);
      const response = await API.submitForm(data);
      setLoading(false);
      alert("You have submitted successfully");
      console.log(response);
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  };

  return (
    <>
      <div>
        {isLoading ? (
          <p>Loading ...</p>
        ) : (
          <DynamicForm fields={formFields} onSubmit={onSubmit}></DynamicForm>
        )}
      </div>
    </>
  );
}

export default App;

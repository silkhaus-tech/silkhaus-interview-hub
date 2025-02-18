import { ReactNode, FC, useState, useEffect } from "react";
import { Select } from "../select";

export type FormField = {
  name: string;
  type: "text" | "select";
  options?: {
    label: string;
    value: string;
  }[];
  label: ReactNode;
};

export type FormData = {
  [key: string]: string;
};

export type DynamicFormProps = {
  fields: FormField[];
  onSubmit: (formData: FormData) => void;
  isLoading?: boolean;
};

export const DynamicForm: FC<DynamicFormProps> = (props: DynamicFormProps) => {
  const [formData, setFormData] = useState<FormData>({});

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleDropDown = (data, name) => {
    if (data) {
      setFormData({
        ...formData,
        [name]: data.value,
      });
    }
  };

  const handleFormClear = () => {
    setFormData({});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (props.onSubmit) {
      props.onSubmit(formData);
    }
  };

  return (
    <div>
      <h3>{"< insert form component here />"}</h3>

      <form onSubmit={handleSubmit}>
        {props.fields.length &&
          props.fields.map((field) => {
            if (field.type === "text") {
              return (
                <div key={field.name}>
                  <label htmlFor={field.name}>{field.label}</label>
                  <input
                    id={field.name}
                    name={field.name}
                    value={formData[field.name]}
                    type="text"
                    onChange={handleChange}
                  />
                </div>
              );
            } else if (field.type === "select") {
              return (
                <div key={field.name}>
                  <Select
                    options={field.options}
                    onChange={(value) => handleDropDown(value, field.name)}
                    value={formData[field.name]}
                  />
                </div>
              );
            } else {
              return <></>;
            }
          })}
        <input type="submit" />
        <button onClick={handleFormClear}>Clear</button>
      </form>
    </div>
  );
};

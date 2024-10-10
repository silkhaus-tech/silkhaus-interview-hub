import { ReactNode, FC, useState } from "react";
import InputText from "../input";
import FormFieldCom from "../form-field-com";

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

export const DynamicForm: FC<DynamicFormProps> = ({
  fields,
  onSubmit,
  isLoading,
}) => {
  const [formFields, setFormFields] = useState<FormData>({});

  const handleOnChange = (e: string | null, name: string, index: number) => {
    /* setFormFields((prev) =>
      prev.map((form, i) => (i === index ? { ...form, [name]: e } : form))
    ); */
    //setFormFields((prev)=>)
  };

  const onSubmitHandler = ()=>{
    onSubmit(formFields)
  }
  console.log(formFields);
  return (
    <div>
      <h3>{"< insert form component here />"}</h3>
      {isLoading && <p>Loading</p>}
      {!isLoading &&
        fields.map((field, index) => (
          <FormFieldCom
            formField={field}
            key={index}
            onChange={(e, name) => handleOnChange(e, name, index)}
            isDisabled={isLoading ? isLoading : false}
            onSubmit={onSubmitHandler}
          />
        ))}
    </div>
  );
};

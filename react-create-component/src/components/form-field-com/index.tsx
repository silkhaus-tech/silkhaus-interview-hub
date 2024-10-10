import { FC } from "react";
import { FormField } from "../dynamic-form";
import InputText from "../input";
import { Select } from "../select";

export type FormFieldProps = {
  formField: FormField;
  key: number;
  onChange: (value: string | null, name: string) => void;
  isDisabled: boolean;
  onSubmit: () => void;
};
const FormFieldCom: FC<FormFieldProps> = ({
  formField,
  key,
  onChange,
  isDisabled,
  onSubmit,
}) => {
  return (
    <>
      {formField.type === "text" ? (
        <InputText
          name={formField.name}
          type={formField.type}
          label={formField.label}
          key={key}
          onChange={(e, n) => onChange(e, n)}
          isDisabled={isDisabled}
        />
      ) : (
        <Select value={formField.name} options={formField.options} />
      )}
      <button onClick={onSubmit}>Submit</button>
    </>
  );
};

export default FormFieldCom;

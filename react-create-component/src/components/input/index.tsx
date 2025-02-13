import {FormField} from "../dynamic-form/index";

const Input = ({name, type, label}: FormField) => {
    return (
      <div>
          <label htmlFor={name}>{label}</label>
          <input type={type} value="" name={name} id={name} />
      </div>
      
    )
  }

export default Input
import { FC, ReactNode } from 'react'
import ReactSelect from 'react-select'

export type SelectOption = {
  label: string,
  value: string,
}

export type SelectProps = {
  options?: SelectOption[],
  onChange: (value: string | null, name: string | null) => void,
  value?: string,
  label: ReactNode,
  isLoading?: boolean

}

export const Select: FC<SelectProps> = ({
  options = [],
  onChange,
  value,
  label,
  isLoading
}) => {
  return (
    <div>
      <label htmlFor='gender'>{`${label}: `}</label>
      <select name={value} onChange={(e) => onChange(e.target.value, e.target.name)} disabled={isLoading}>
        {options.map((option, index) => {
          return (
            <option value={option.value} key={index}>{option.label}</option>
          )
        })}
      </select>
    </div>
  )
}
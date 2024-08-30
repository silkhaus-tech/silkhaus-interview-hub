import { FC } from 'react'
import ReactSelect from 'react-select'

export type SelectOption = {
  label: string,
  value: string,
}

export type SelectProps = {
  options?: SelectOption[],
  onChange?: (option: SelectOption | null) => void,
  value?: string,
  disabled?: boolean
}

export const Select: FC<SelectProps> = ({
  options = [],
  onChange,
  value,
  disabled = false
}) => {
  return (
    <>
      {/* @ts-expect-error TODO: Fix this issue with options type. Not sure why this is happening*/}
      <ReactSelect isDisabled={disabled} options={options} onChange={onChange} value={value}></ReactSelect>
    </>
  )
}
import { FC } from 'react'

export type InputProps = {
  name: string,
  onChange?: (value: string | null) => void,
  value?: string,
  type: string,
  disabled: boolean
}

export const Input: FC<InputProps> = ({
  name,
  onChange,
  value,
  type,
  disabled  
}) => {
  return (
    <>
      {/* @ts-expect-error TODO: Fix this issue with options type. Not sure why this is happening*/}
      <input type={type} name={name} onChange={onChange} disabled={disabled?"disabled":""} value={value}></input>
    </>
  )
}
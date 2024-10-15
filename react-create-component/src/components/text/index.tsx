import React, { ReactNode } from 'react'

type TextProps = {
  name: string;
  label: ReactNode;
  onChangeText: (value: string | null, name: string | null) => void,
  isLoading?: boolean
}

export const Text = ({ name, label, onChangeText, isLoading }: TextProps) => {
  return (
    <div className='input-wrapper'>
      <label htmlFor="name">{`${label}: `}</label>
      <input type="text" name={name} onChange={(e) => onChangeText(e.target.value, e.target.name)} disabled={isLoading} />
    </div>

  )
}
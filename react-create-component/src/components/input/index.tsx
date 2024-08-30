import { FC, ReactNode } from 'react'

export type InputProps = {
    name: string;
    onChange: (value: string | null) => void;
    value?: string | null;
    label?: ReactNode;
    disabled?: boolean
}

export const Input: FC<InputProps> = ({
    name,
    onChange,
    value,
    label,
    disabled = false
}) => {
    return <div style={{
        marginBottom: "15px",
        display: "flex",
        gap: "10px"
    }}>
        {label}
        <input id={name} name={name} onChange={(event) => onChange(event?.target?.value)} value={value} disabled={disabled} />
    </div>
}
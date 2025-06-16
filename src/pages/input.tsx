import { memo } from 'react'
import type { InputHTMLAttributes, ReactNode } from 'react'

/**
 * Input field component
 * @returns JSX.Element
 */

type InputProps = {
    label?: string
    type?: string
    icon?: ReactNode
    inputProps?: InputHTMLAttributes<HTMLInputElement>
    children?: ReactNode
    hint?: ReactNode
    className?: String
}

const InputField = ({
    label,
    type = 'text',
    icon,
    inputProps,
    children,
    hint,
    className = '',
}: InputProps) => {
    return (
        <fieldset className="d-fieldset">
            {label && <legend className="d-fieldset-legend">{label}</legend>}

            <label className={`d-input ${className}`}>
                {icon}
                <input type={type} {...inputProps} />
                {children}
            </label>

            {hint && <div className="d-validator-hint mt-0 hidden">{hint}</div>}
        </fieldset>
    )
}

export default memo(InputField)

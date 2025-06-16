import { memo } from 'react'
import type { ButtonHTMLAttributes, ReactNode } from 'react'

/**
 * Button component
 * @returns JSX.Element
 */

type ButtonProps = {
    children: ReactNode
    variant?: 'accent' | 'ghost' | 'primary' | 'secondary'
    size?: 'sm' | 'md' | 'lg'
    className?: string
    leftIcon?: ReactNode
    rightIcon?: ReactNode
} & ButtonHTMLAttributes<HTMLButtonElement>

const variantClass = {
    accent: 'd-btn-accent',
    ghost: 'd-btn-ghost',
    primary: 'd-btn-primary',
    secondary: 'bg-white border-neutral-100 hover:bg-secondary-500/60',
}

const sizeClass = {
    sm: 'd-btn-sm',
    md: '',
    lg: 'sm:d-btn-lg',
}

const Button = ({
    children,
    variant = 'primary',
    size = 'md',
    className = '',
    leftIcon,
    rightIcon,
    ...props
}: ButtonProps) => {
    return (
        <button
            tabIndex={0}
            className={`d-btn ${variantClass[variant]} ${sizeClass[size]} ${className}`}
            {...props}
        >
            {leftIcon && <span>{leftIcon}</span>}
            {children}
            {rightIcon && <span>{rightIcon}</span>}
        </button>
    )
}

export default memo(Button)

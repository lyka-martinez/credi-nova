import { memo } from 'react'
import type { ReactNode } from 'react'
import type { statusType } from '../types'

/**
 * Badge component for status indicators.
 * @returns JSX.Element
 */

type BadgeProps = {
    variant: statusType
    children?: ReactNode
}

const variantClass = {
    neutral: '',
    success: 'd-badge-success',
    warning: 'd-badge-warning',
    primary: 'd-badge-primary',
    error: 'd-badge-error',
}

const Badge = ({ variant = 'neutral', children }: BadgeProps) => {
    return (
        <div
            className={`d-badge d-badge-soft h-[24px] rounded-sm border-transparent px-2 text-xs ${variantClass[variant]}`}
        >
            {children}
        </div>
    )
}

export default memo(Badge)

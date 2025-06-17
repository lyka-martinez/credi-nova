import { memo } from 'react'
import type { ReactNode } from 'react'

/**
 * Card component
 * @returns JSX.Element
 */

type CardProps = {
    variant?: 'primary' | 'secondary'
    cardClass?: string
    cardBodyClass?: string
    children?: ReactNode
}

const variantClass = {
    primary: 'bg-primary-500 border-primary-100 text-white',
    secondary: 'border-neutral-50 bg-white text-neutral-400',
}

const Card = ({
    variant = 'secondary',
    cardClass = '',
    cardBodyClass = '',
    children,
}: CardProps) => {
    return (
        <div className={`d-card d-card-sm xl:d-card-md border shadow-2xs ${variantClass[variant]} ${cardClass}`}>
            <div className={`d-card-body gap-1 ${cardBodyClass}`}>
                {children}
            </div>
        </div>
    )
}

export default memo(Card)

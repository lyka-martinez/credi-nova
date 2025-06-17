import { memo } from 'react'
import type { ReactNode } from 'react'

/**
 * Menu item components for the sidebar
 * @returns JSX.Element
 */

type MenuItemProps = {
    label: string
    icon?: ReactNode
    active?: boolean
    classList?: string
    classAnchor?: string
    children?: ReactNode
    onClick?: () => void
}

export const MenuItem = memo(
    ({
        label,
        icon,
        active = false,
        classList = '',
        classAnchor = '',
        children,
        onClick,
    }: MenuItemProps) => {
        return (
            <li className={classList}>
                <a
                    tabIndex={0}
                    className={`${active ? 'd-menu-active' : ''} ${classAnchor}`}
                    aria-current={active ? 'page' : undefined}
                    onClick={onClick}
                >
                    {icon}
                    {label}
                </a>
                {children}
            </li>
        )
    },
)

/**
 * Menu dropdown components for the sidebar
 * @returns JSX.Element
 */

type MenuDropdownProps = {
    label: string
    icon?: ReactNode
    items: { label: string }[]
}

export const MenuDropdown = memo(
    ({ label, icon, items }: MenuDropdownProps) => {
        return (
            <li>
                <details>
                    <summary>
                        {icon}
                        {label}
                    </summary>
                    <ul>
                        {items.map((item) => (
                            <li key={item.label}>
                                <a tabIndex={0}>{item.label}</a>
                            </li>
                        ))}
                    </ul>
                </details>
            </li>
        )
    },
)

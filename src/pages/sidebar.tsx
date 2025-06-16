import { memo } from 'react'
import {
    LayoutGrid,
    FileText,
    FilePen,
    CreditCard,
    ChartPie,
    Headset,
    Settings,
} from 'lucide-react'
import ProfileButton from './profileButton'
import { MenuItem, MenuDropdown } from './menuItem'

/**
 * Sidebar component
 * @returns JSX.Element
 */

type SidebarProps = {
    onLogout: () => void
}

const menu = [
    {
        label: 'Dashboard',
        icon: <LayoutGrid className="w-[16px]" />,
        active: true,
    },
    {
        label: 'Loans',
        icon: <FileText className="w-[16px]" />,
        children: [{ label: 'Active Loans' }, { label: 'Loan History' }],
    },
    {
        label: 'Apply New Loan',
        icon: <FilePen className="w-[16px]" />,
    },
    {
        label: 'Payments',
        icon: <CreditCard className="w-[16px]" />,
        children: [{ label: 'Payment History' }, { label: 'Auto-Pay Setup' }],
    },
    {
        label: 'Reports',
        icon: <ChartPie className="w-[16px]" />,
    },
    {
        label: 'Help Center',
        icon: <Headset className="w-[16px]" />,
        className: 'mt-auto',
    },
    {
        label: 'Settings',
        icon: <Settings className="w-[16px]" />,
    },
]

const Sidebar = ({ onLogout }: SidebarProps) => {
    return (
        <div className="d-drawer-side">
            <label
                htmlFor="my-drawer"
                aria-label="close sidebar"
                className="d-drawer-overlay"
            ></label>

            <ul className="d-menu lg:d-menu-lg min-h-full w-70 border-r-1 border-neutral-50 bg-white p-4 lg:p-[18px]">
                <div className="mb-4 lg:mb-6">
                    <div className="flex items-center justify-start gap-3">
                        <img
                            src="./logo.svg"
                            className="w-[24px] lg:w-[28px]"
                            alt="CrediNova logo"
                        />
                        <span className="text-base font-semibold lg:text-lg">
                            CrediNova
                        </span>
                    </div>
                </div>

                {/* <MenuItem /> */}
                {menu.map((item) =>
                    item.children ? (
                        <MenuDropdown
                            key={item.label}
                            label={item.label}
                            icon={item.icon}
                            items={item.children}
                        />
                    ) : (
                        <MenuItem
                            key={item.label}
                            label={item.label}
                            icon={item.icon}
                            active={item.active}
                            classList={item.className}
                        />
                    ),
                )}

                {/* User Profile Dropdown */}
                <ProfileButton
                    dropdownClass="d-dropdown-top lg:hidden pt-4 mt-2 border-t border-neutral-50"
                    menuWidth="w-62"
                    onLogout={onLogout}
                />
            </ul>
        </div>
    )
}

export default memo(Sidebar)

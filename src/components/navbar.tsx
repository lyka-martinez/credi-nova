import { memo } from 'react'
import { Menu, Bell, Search } from 'lucide-react'
import Button from './button'
import ProfileButton from './profileButton'
import InputField from './input'

/**
 * Navbar components for the main content area
 * @param onLogout - Callback function to handle logout action
 * @returns JSX.Element
 */

type NavbarProps = {
    onLogout: () => void
}

const Navbar = ({ onLogout }: NavbarProps) => {
    return (
        <div className="d-navbar bg-base-100 sticky top-0 z-1 min-h-[60px] justify-between border-b border-neutral-50 px-4 py-0 md:px-8 lg:px-6">
            <div className="d-navbar-start">
                <div className="flex items-center gap-2 lg:hidden">
                    <img
                        src="./logo.svg"
                        className="w-[24px]"
                        alt="CrediNova logo"
                    />
                    <span className="text-base font-semibold">CrediNova</span>
                </div>

                {/* Search area [show only in large screens] */}
                <form id="searchForm" className="hidden lg:block">
                    <InputField
                        icon={<Search className="w-[18px]" />}
                        inputProps={{
                            type: 'search',
                            placeholder: 'Search anything here..',
                            className: 'grow',
                        }}
                        className="h-[34px] text-xs"
                    />
                </form>
            </div>

            <div className="d-navbar-end lg:w-full lg:gap-2">
                {/* Notificaiton Button */}
                <Button variant="ghost" className="px-2">
                    <div className="d-indicator">
                        <Bell className="w-[20px]" />
                        <div className="d-badge d-badge-xxs d-badge-accent d-indicator-item"></div>
                    </div>
                </Button>

                {/* User Profile Dropdown */}
                <ProfileButton
                    dropdownClass="d-dropdown-end hidden lg:block"
                    menuWidth="w-52"
                    onLogout={onLogout}
                />
                
                {/* Drawer button [show only in medium screens] */}
                <label
                    htmlFor="my-drawer"
                    data-tip="Menu"
                    className="d-btn d-btn-ghost d-drawer-button d-tooltip d-tooltip-bottom px-2 lg:hidden"
                >
                    <Menu className="w-[20px]" />
                </label>
            </div>
        </div>
    )
}

export default memo(Navbar)

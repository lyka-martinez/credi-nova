import { memo } from 'react'
import { ChevronsUpDown, User, LogOut } from 'lucide-react'
import Profile from '../assets/images/profile.png'
import { MenuItem } from './menuItem'
import Button from './button'

/**
 * Profile Button component
 * @returns JSX.Element
 */

type ProfileButtonProps = {
    dropdownClass?: string
    menuWidth?: string
    onLogout: () => void
}

const ProfileButton = ({
    dropdownClass = '',
    menuWidth = 'w-52',
    onLogout,
}: ProfileButtonProps) => {
    return (
        <div className={`d-dropdown ${dropdownClass}`}>
            <Button
                variant="ghost"
                className="d-avatar w-full gap-2 bg-transparent px-2 shadow-none"
            >
                <div className="w-9 rounded-full">
                    <img alt="Tailwind CSS Navbar component" src={Profile} />
                </div>

                <p className="flex flex-col items-start justify-center text-xs">
                    <span className="font-medium">John Doe</span>
                    <span className="font-normal text-neutral-300">
                        jhondoe@gmail.com
                    </span>
                </p>

                <ChevronsUpDown className="ms-auto w-[14px] text-neutral-300" />
            </Button>

            <ul
                tabIndex={0}
                className={`d-menu d-dropdown-content bg-base-100 rounded-box z-1 mt-2 border border-neutral-50 p-2 shadow-md ${menuWidth}`}
            >
                <MenuItem
                    label="Profile"
                    icon={<User className="w-[14px]" />}
                    classAnchor="gap-2 py-[6px]"
                />

                <MenuItem
                    label="Logout"
                    icon={<LogOut className="w-[14px]" />}
                    classAnchor="text-accent-700 gap-2 py-[6px]"
                    onClick={onLogout}
                />
            </ul>
        </div>
    )
}

export default memo(ProfileButton)

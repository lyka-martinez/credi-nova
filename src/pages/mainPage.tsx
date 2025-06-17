import Sidebar from '../components/sidebar'
import Navbar from '../components/navbar'
import Dashboard from '../components/dashboard'

/**
 * MainPage component
 * @variable repaymentScheduleList - List of repayment schedules
 * @param onLogout - Callback function to handle logout action
 * @returns JSX.Element
 */

type MainPageProps = {
    onLogout: () => void
}

const MainPage = ({ onLogout }: MainPageProps) => {
    return (
        <div className="d-drawer lg:d-drawer-open h-full">
            <input id="my-drawer" type="checkbox" className="d-drawer-toggle" />

            {/* Page content */}
            <div className="d-drawer-content flex flex-col justify-center">
                <Navbar onLogout={onLogout} />

                {/* Main content */}
                <div className="bg-secondary-600/30 flex flex-1 flex-col gap-5 p-4 md:px-8 lg:px-6">
                    <Dashboard />
                </div>
            </div>

            {/* Sidebar content */}
            <Sidebar onLogout={onLogout} />
        </div>
    )
}

export default MainPage

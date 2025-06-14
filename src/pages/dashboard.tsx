import { memo } from 'react';
import { LayoutGrid, FileText, FilePen, CreditCard, ChartPie, Headset, Settings, Menu, Bell, Search } from 'lucide-react';
import '../styles/dashboard.css';


const Dashboard = () => {
    return (
        <div className="d-drawer lg:d-drawer-open">
            <input id="my-drawer" type="checkbox" className="d-drawer-toggle" />

            {/* Page content here */}
            <div className="d-drawer-content">
                <div className="d-navbar">
                    {/* Show logo for mobile view */}
                    <div className="navbar-start flex items-center gap-2 lg:hidden">
                        <img src="./logo.svg" className="w-[24px]" alt="CrediNova logo" />
                    </div>

                    <div className="navbar-end">
                        <button className="d-btn d-btn-ghost rounded-sm px-2">
                            <Search className="w-[22px]" />
                        </button>

                        <button tabIndex={0}  className="d-btn d-btn-ghost rounded-sm px-2">
                            <div className="d-indicator">
                                <Bell className="w-[22px]" />
                                <div className="d-badge d-badge-xxs d-badge-accent d-indicator-item"></div>
                            </div>
                        </button>

                        <label htmlFor="my-drawer" className="d-btn d-btn-ghost d-drawer-button rounded-sm px-2 lg:hidden">
                            <Menu className="w-[22px]" />
                        </label>
                    </div>
                </div>

                <div className="b-content">
                    Content goes here
                </div>
            </div>

            {/* Sidebar content here */}
            <div className="d-drawer-side">
                <label htmlFor="my-drawer" aria-label="close sidebar" className="d-drawer-overlay"></label>

                <ul className="d-menu bg-white border-r-1 border-neutral-50 min-h-full w-70 p-4">
                    <div className="mb-4">
                        <div className="flex items-center justify-start gap-3">
                            <img src="./logo.svg" className="w-[24px]" alt="CrediNova logo" />
                            <span className="font-semibold text-base">CrediNova</span>
                        </div>
                    </div>

                    <li>
                        <a className="d-menu-active">
                            <LayoutGrid className="w-[16px]" />
                            Dashboard
                        </a>
                    </li>
                    <li>
                        <details>
                            <summary>
                                <FileText className="w-[16px]" />
                                Loans
                            </summary>
                            <ul>
                                <li>
                                    <a>Active Loans</a>
                                </li>
                                <li>
                                    <a>Loan History</a>
                                </li>
                            </ul>
                        </details>
                    </li>
                    <li>
                        <a>
                            <FilePen className="w-[16px]" />
                            Apply New Loan
                        </a>
                    </li>
                    <li>
                        <details>
                            <summary>
                                <CreditCard className="w-[16px]" />
                                Payments
                            </summary>
                            <ul>
                                <li>
                                    <a>Payment History</a>
                                </li>
                                <li>
                                    <a>Auto-Pay Setup</a>
                                </li>
                            </ul>
                        </details>
                    </li>
                    <li>
                        <a>
                            <ChartPie className="w-[16px]" />
                            Reports
                        </a>
                    </li>
                    <li className="mt-auto">
                        <a>
                            <Headset className="w-[16px]" />
                            Help Center
                        </a>
                    </li>
                    <li>
                        <a>
                            <Settings className="w-[16px]" />
                            Settings
                        </a>
                    </li>
                </ul>
                
            </div>
        </div>
    );
}

export default memo(Dashboard);

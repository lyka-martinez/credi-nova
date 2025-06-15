import { memo } from 'react'
import {
    LayoutGrid,
    FileText,
    FilePen,
    CreditCard,
    ChartPie,
    Headset,
    Settings,
    Menu,
    Bell,
    Search,
    BanknoteArrowUp,
    CalendarClock,
    ChartNoAxesCombined,
    HandCoins,
    ChevronRight,
} from 'lucide-react'

const Dashboard = () => {
    return (
        <div className="d-drawer lg:d-drawer-open h-screen">
            <input id="my-drawer" type="checkbox" className="d-drawer-toggle" />

            {/* Page content */}
            <div className="d-drawer-content flex flex-col justify-center">
                {/* Navbar */}
                <div className="d-navbar bg-base-100 h-[65px] justify-between border-b border-neutral-50 px-4 py-0">
                    <div className="navbar-start flex items-center gap-2 lg:hidden">
                        <img
                            src="./logo.svg"
                            className="w-[24px]"
                            alt="CrediNova logo"
                        />
                        <span className="text-base font-semibold">
                            CrediNova
                        </span>
                    </div>

                    <div className="navbar-end">
                        {/* Search area [show only in large screens] */}
                        <button className="d-btn d-btn-ghost hidden px-2">
                            <Search className="w-[22px]" />
                        </button>

                        <button tabIndex={0} className="d-btn d-btn-ghost px-2">
                            <div className="d-indicator">
                                <Bell className="w-[22px]" />
                                <div className="d-badge d-badge-xxs d-badge-accent d-indicator-item"></div>
                            </div>
                        </button>

                        <label
                            htmlFor="my-drawer"
                            data-tip="Menu"
                            className="d-btn d-btn-ghost d-drawer-button d-tooltip d-tooltip-bottom px-2 lg:hidden"
                        >
                            <Menu className="w-[22px]" />
                        </label>
                    </div>
                </div>

                {/* Main content */}
                <div className="bg-secondary-600/30 flex flex-1 flex-col gap-5 p-4">
                    {/* Headings */}
                    <div className="flex items-center justify-start">
                        <div>
                            <h2 className="mb-1 text-xl font-medium">
                                Dashboard
                            </h2>
                            <p className="text-sm text-neutral-300">
                                Here’s a summary of your financial activity.
                            </p>
                        </div>
                        <div className="hidden">Date & Time</div>
                    </div>

                    {/* Widgets */}
                    <div className="grid grid-flow-row auto-rows-fr gap-4 md:grid-cols-2 lg:grid-cols-4">
                        <div className="d-card d-card-sm bg-primary-500 border-primary-100 border text-white shadow-2xs">
                            <div className="d-card-body gap-2">
                                <div className="d-card-title">
                                    <p>Total Loan Amount</p>
                                    <div className="bg-secondary-600/28 flex h-[28px] items-center rounded-sm px-[6px]">
                                        <HandCoins className="w-[20px]" />
                                    </div>
                                </div>

                                <div>
                                    <h3 className="mb-1 text-[22px] font-semibold">
                                        ₱ 120,000.00
                                    </h3>
                                </div>
                            </div>
                        </div>

                        <div className="d-card d-card-sm border border-neutral-50 bg-white text-neutral-400 shadow-2xs">
                            <div className="d-card-body gap-2">
                                <div className="d-card-title">
                                    <p>Outstanding Balance</p>
                                    <div className="text-primary-600 bg-primary-50 flex h-[28px] items-center rounded-sm px-[6px]">
                                        <BanknoteArrowUp className="w-[20px]" />
                                    </div>
                                </div>

                                <div>
                                    <h3 className="mb-1 text-[22px] font-semibold text-neutral-500">
                                        ₱ 43,200.00
                                    </h3>
                                </div>
                            </div>
                        </div>

                        <div className="d-card d-card-sm border border-neutral-50 bg-white text-neutral-400 shadow-2xs">
                            <div className="d-card-body gap-2">
                                <div className="d-card-title">
                                    <p>Next Due Payment</p>
                                    <div className="text-accent-700 bg-accent-50 flex h-[28px] items-center rounded-sm px-[6px]">
                                        <CalendarClock className="w-[20px]" />
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-[22px] font-semibold text-neutral-500">
                                        ₱ 2,800.00
                                    </h3>
                                    <p>
                                        due on{' '}
                                        <span className="text-accent-700 inline-block">
                                            June 25, 2025
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="d-card d-card-sm border border-neutral-50 bg-white text-neutral-400 shadow-2xs">
                            <div className="d-card-body gap-2">
                                <div className="d-card-title">
                                    <p>Loan Status</p>
                                    <div className="text-accent-700 bg-accent-50 flex h-[28px] items-center rounded-sm px-[6px]">
                                        <ChartNoAxesCombined className="w-[20px]" />
                                    </div>
                                </div>

                                <div className="flex items-center gap-3">
                                    <div
                                        aria-label="warning"
                                        className="d-status d-status-warning d-status-md"
                                    ></div>
                                    <h3 className="text-[22px] font-semibold text-neutral-500">
                                        Active
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Payments */}
                    <div className="grid grid-flow-row auto-rows-min gap-4 lg:grid-cols-4">
                        <div className="d-card d-card-sm border border-neutral-50 bg-white shadow-2xs">
                            <div className="d-card-body gap-2">
                                <div className="d-card-title mb-2">
                                    Payment Summary
                                </div>

                                {/* Payment Summary List */}
                                <div className="flex flex-col gap-2 text-neutral-300">
                                    <div className="b-payment-summary-row hover:bg-secondary-600/60 rounded-sm border border-neutral-50 px-3 py-2 transition-colors duration-150">
                                        <div>
                                            <p className="text-base font-medium text-neutral-500">
                                                ₱ 22,400
                                            </p>
                                            <span className="text-xs">
                                                Total Payments Made
                                            </span>
                                        </div>

                                        <div>
                                            <ChevronRight className="b-chevron-animate w-[18px]" />
                                        </div>
                                    </div>

                                    <div className="b-payment-summary-row hover:bg-secondary-600/60 rounded-sm border border-neutral-50 px-3 py-2 transition-colors duration-150">
                                        <div>
                                            <p className="text-base font-medium text-neutral-500">
                                                8
                                            </p>
                                            <span className="text-xs">
                                                Total On-Time Payments
                                            </span>
                                        </div>

                                        <div>
                                            <ChevronRight className="b-chevron-animate w-[18px]" />
                                        </div>
                                    </div>

                                    <div className="b-payment-summary-row hover:bg-secondary-600/60 rounded-sm border border-neutral-50 px-3 py-2 transition-colors duration-150">
                                        <div>
                                            <p className="text-base font-medium text-neutral-500">
                                                2
                                            </p>
                                            <span className="text-xs">
                                                Late Payments
                                            </span>
                                        </div>

                                        <div>
                                            <ChevronRight className="b-chevron-animate w-[18px]" />
                                        </div>
                                    </div>

                                    <div className="b-payment-summary-row hover:bg-secondary-600/60 rounded-sm border border-neutral-50 px-3 py-2 transition-colors duration-150">
                                        <div>
                                            <p className="text-base font-medium text-neutral-500">
                                                0
                                            </p>
                                            <span className="text-xs">
                                                Missed Payments
                                            </span>
                                        </div>

                                        <div>
                                            <ChevronRight className="b-chevron-animate w-[18px]" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-lg border border-neutral-50 bg-white p-4 shadow-2xs lg:col-span-3 ">
                            Table goes here..
                        </div>
                    </div>
                </div>
            </div>

            {/* Sidebar content */}
            <div className="d-drawer-side">
                <label
                    htmlFor="my-drawer"
                    aria-label="close sidebar"
                    className="d-drawer-overlay"
                ></label>

                <ul className="d-menu min-h-full w-70 border-r-1 border-neutral-50 bg-white p-4">
                    <div className="mb-4">
                        <div className="flex items-center justify-start gap-3">
                            <img
                                src="./logo.svg"
                                className="w-[24px]"
                                alt="CrediNova logo"
                            />
                            <span className="text-base font-semibold">
                                CrediNova
                            </span>
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
    )
}

export default memo(Dashboard)

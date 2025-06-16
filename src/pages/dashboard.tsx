import { memo } from 'react'
import {
    BanknoteArrowUp,
    CalendarClock,
    ChartNoAxesCombined,
    HandCoins,
    ChevronRight,
    ArrowUpRight,
} from 'lucide-react'
import Sidebar from './sidebar'
import Navbar from './navbar'

/**
 * Dashboard component
 * @param onLogout - Callback function to handle logout action
 * @returns JSX.Element
 */

type DashboardProps = {
    onLogout: () => void
}

const Dashboard = ({ onLogout }: DashboardProps) => {
    return (
        <div className="d-drawer lg:d-drawer-open h-full">
            <input id="my-drawer" type="checkbox" className="d-drawer-toggle" />

            {/* Page content */}
            <div className="d-drawer-content flex flex-col justify-center">
                {/* Navbar */}
                <Navbar onLogout={onLogout} />
                

                {/* Main content */}
                <div className="bg-secondary-600/30 flex flex-1 flex-col gap-5 p-4 md:px-8 lg:px-6">
                    {/* Headings */}
                    <div className="flex items-end justify-start gap-2 lg:justify-between">
                        <div>
                            <h2 className="mb-1 text-lg font-medium lg:text-xl">
                                Dashboard
                            </h2>
                            <p className="text-sm text-neutral-300">
                                Here’s a summary of your financial activity.
                            </p>
                        </div>

                        <div className="hidden text-sm lg:flex lg:gap-2">
                            <span className="text-primary-600 font-medium">
                                Monday
                            </span>
                            <span className="text-neutral-400">
                                June 9, 2025
                            </span>
                        </div>
                    </div>

                    {/* Widgets */}
                    <div className="grid grid-flow-row auto-rows-fr gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        <div className="d-card d-card-sm xl:d-card-md bg-primary-500 border-primary-100 border text-white shadow-2xs">
                            <div className="d-card-body gap-1">
                                <div className="d-card-title">
                                    <p>Total Loan Amount</p>
                                    <div className="bg-secondary-600/28 flex h-[28px] items-center rounded-sm px-[6px]">
                                        <HandCoins className="w-[20px]" />
                                    </div>
                                </div>

                                <div>
                                    <h3 className="mb-1 text-lg font-semibold">
                                        ₱ 120,000.00
                                    </h3>
                                </div>
                            </div>
                        </div>

                        <div className="d-card d-card-sm xl:d-card-md border border-neutral-50 bg-white text-neutral-400 shadow-2xs">
                            <div className="d-card-body gap-1">
                                <div className="d-card-title">
                                    <p>Outstanding Balance</p>
                                    <div className="text-primary-600 bg-primary-50 flex h-[28px] items-center rounded-sm px-[6px]">
                                        <BanknoteArrowUp className="w-[20px]" />
                                    </div>
                                </div>

                                <div>
                                    <h3 className="mb-1 text-lg font-semibold text-neutral-500">
                                        ₱ 43,200.00
                                    </h3>
                                </div>
                            </div>
                        </div>

                        <div className="d-card d-card-sm xl:d-card-md border border-neutral-50 bg-white text-neutral-400 shadow-2xs">
                            <div className="d-card-body gap-1">
                                <div className="d-card-title">
                                    <p>Next Due Payment</p>
                                    <div className="text-accent-700 bg-accent-50 flex h-[28px] items-center rounded-sm px-[6px]">
                                        <CalendarClock className="w-[20px]" />
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-lg font-semibold text-neutral-500">
                                        ₱ 2,800.00
                                    </h3>
                                    <p className="text-xssm">
                                        due on{' '}
                                        <span className="text-accent-700 inline-block">
                                            June 25, 2025
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="d-card d-card-sm xl:d-card-md border border-neutral-50 bg-white text-neutral-400 shadow-2xs">
                            <div className="d-card-body gap-1">
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
                                    <h3 className="text-lg font-semibold text-neutral-500">
                                        Active
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Payments */}
                    <div className="grid grid-flow-row auto-rows-min gap-4 lg:grid-cols-3 xl:grid-cols-4">
                        <div className="d-card d-card-sm lg:d-card-md border border-neutral-50 bg-white text-neutral-400 shadow-2xs lg:col-span-1">
                            <div className="d-card-body gap-1">
                                <div className="d-card-title mb-2">
                                    <p>Payment Summary</p>
                                </div>

                                {/* Payment Summary List */}
                                <div className="flex flex-col gap-2 text-neutral-300">
                                    <div className="b-payment-summary-row hover:bg-secondary-600/60 rounded-sm border border-neutral-50 px-3 py-2 transition-colors duration-150">
                                        <div>
                                            <p className="text-sm font-medium text-neutral-500">
                                                ₱ 22,400
                                            </p>
                                            <span className="text-xs">
                                                Total Payments Made
                                            </span>
                                        </div>

                                        <div>
                                            <ChevronRight className="b-chevron-animate w-[16px]" />
                                        </div>
                                    </div>

                                    <div className="b-payment-summary-row hover:bg-secondary-600/60 rounded-sm border border-neutral-50 px-3 py-2 transition-colors duration-150">
                                        <div>
                                            <p className="text-sm font-medium text-neutral-500">
                                                8
                                            </p>
                                            <span className="text-xs">
                                                Total On-Time Payments
                                            </span>
                                        </div>

                                        <div>
                                            <ChevronRight className="b-chevron-animate w-[16px]" />
                                        </div>
                                    </div>

                                    <div className="b-payment-summary-row hover:bg-secondary-600/60 rounded-sm border border-neutral-50 px-3 py-2 transition-colors duration-150">
                                        <div>
                                            <p className="text-sm font-medium text-neutral-500">
                                                0
                                            </p>
                                            <span className="text-xs">
                                                Missed Payments
                                            </span>
                                        </div>

                                        <div>
                                            <ChevronRight className="b-chevron-animate w-[16px]" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Repayment Schedule Table */}
                        <div className="d-card d-card-sm lg:d-card-md border border-neutral-50 bg-white text-neutral-400 shadow-2xs lg:col-span-2 lg:auto-cols-max lg:overflow-hidden xl:col-span-3">
                            <div className="d-card-body gap-1 p-0!">
                                <div className="d-card-title px-4 pt-3 lg:px-[18px]">
                                    <p>Repayment Schedule</p>

                                    <button className="d-btn d-btn-ghost d-btn-xs bg-secondary-600/30 hover:bg-secondary-600/60 h-[26px] gap-1 rounded-sm px-2 font-medium text-neutral-300">
                                        View more
                                        <ArrowUpRight className="w-[14px]" />
                                    </button>
                                </div>

                                <div className="overflow-x-auto">
                                    <table className="d-table b-responsive-table">
                                        <thead className="hidden md:table-header-group">
                                            <tr>
                                                <th>Date</th>
                                                <th>Amount</th>
                                                <th>Status</th>
                                                <th>Payment Method</th>
                                                <th>Remarks</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="hover:bg-secondary-600/60">
                                                <td data-label="Date">
                                                    Mar 25, 2025
                                                </td>
                                                <td data-label="Amount">
                                                    ₱2,800
                                                </td>
                                                <td data-label="Status">
                                                    <div className="d-badge d-badge-soft d-badge-success h-[24px] rounded-sm border-transparent px-2 text-xs">
                                                        Paid
                                                    </div>
                                                </td>
                                                <td data-label="Payment">
                                                    GCash
                                                </td>
                                                <td data-label="Remarks">
                                                    On Time
                                                </td>
                                            </tr>
                                            <tr className="hover:bg-secondary-600/60">
                                                <td data-label="Date">
                                                    Mar 25, 2025
                                                </td>
                                                <td data-label="Amount">
                                                    ₱2,800
                                                </td>
                                                <td data-label="Status">
                                                    <div className="d-badge d-badge-soft d-badge-success h-[24px] rounded-sm border-transparent px-2 text-xs">
                                                        Paid
                                                    </div>
                                                </td>
                                                <td data-label="Payment">
                                                    GCash
                                                </td>
                                                <td data-label="Remarks">
                                                    On Time
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Loans */}
                    <div className="grid grid-flow-row auto-rows-min gap-4 lg:grid-cols-3 xl:grid-cols-6">
                        {/* Repayment Schedule Table */}
                        <div className="d-card d-card-sm lg:d-card-md border border-neutral-50 bg-white text-neutral-400 shadow-2xs lg:col-span-2 lg:auto-cols-max lg:overflow-hidden xl:col-span-4">
                            <div className="d-card-body gap-1 p-0!">
                                <div className="d-card-title px-4 pt-3 lg:px-[18px]">
                                    <p>Loans</p>

                                    <button className="d-btn d-btn-ghost d-btn-xs bg-secondary-600/30 hover:bg-secondary-600/60 h-[26px] gap-1 rounded-sm px-2 font-medium text-neutral-300">
                                        View more
                                        <ArrowUpRight className="w-[14px]" />
                                    </button>
                                </div>

                                <div className="overflow-x-auto">
                                    <table className="d-table b-responsive-table">
                                        <thead className="hidden md:table-header-group">
                                            <tr>
                                                <th>Loan Type</th>
                                                <th>Amount</th>
                                                <th>Terms</th>
                                                <th>Date Applied</th>
                                                <th>Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="hover:bg-secondary-600/60">
                                                <td data-label="Loan Type">
                                                    Personal Loan
                                                </td>
                                                <td data-label="Amount">
                                                    ₱50,000
                                                </td>
                                                <td data-label="Terms">
                                                    12 months
                                                </td>
                                                <td data-label="Date Applied">
                                                    Jan 15, 2025
                                                </td>
                                                <td data-label="Status">
                                                    <div className="d-badge d-badge-soft d-badge-success h-[24px] rounded-sm border-transparent px-2 text-xs">
                                                        Completed
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr className="hover:bg-secondary-600/60">
                                                <td data-label="Loan Type">
                                                    Home Renovation Loan
                                                </td>
                                                <td data-label="Amount">
                                                    ₱100,000
                                                </td>
                                                <td data-label="Terms">
                                                    24 months
                                                </td>
                                                <td data-label="Date Applied">
                                                    Feb 10, 2025
                                                </td>
                                                <td data-label="Status">
                                                    <div className="d-badge d-badge-soft d-badge-warning h-[24px] rounded-sm border-transparent px-2 text-xs">
                                                        Active
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        <div className="d-card d-card-sm lg:d-card-md border border-neutral-50 bg-white text-neutral-400 shadow-2xs lg:col-span-1 xl:col-span-2">
                            <div className="d-card-body gap-1">
                                <div className="d-card-title">
                                    <p>Loans Distribution</p>

                                    <button className="d-btn d-btn-ghost d-btn-xs bg-secondary-600/30 hover:bg-secondary-600/60 h-[26px] gap-1 rounded-sm px-2 font-medium text-neutral-300">
                                        View more
                                        <ArrowUpRight className="w-[14px]" />
                                    </button>
                                </div>

                                {/* Loan distribution Graph */}
                                <div>Graph goes here</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Sidebar content */}
            <Sidebar onLogout={onLogout} />
        </div>
    )
}

export default memo(Dashboard)

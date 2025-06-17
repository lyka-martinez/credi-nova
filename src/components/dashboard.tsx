import {
    BanknoteArrowUp,
    CalendarClock,
    ChartNoAxesCombined,
    HandCoins,
    ChevronRight,
    ArrowUpRight,
} from 'lucide-react'
import {
    repaymentScheduleList,
    loansList,
    loanDistributionData,
} from '../data/mockData'
import { Doughnut } from 'react-chartjs-2'
import Card from './card'
import Badge from './badge'
import Button from './button'

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
ChartJS.register(ArcElement, Tooltip, Legend)

/**
 * Dashboard component
 * @returns JSX.Element
 */

const Dashboard = () => {
    return (
        <>
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
                    <span className="text-primary-600 font-medium">Monday</span>
                    <span className="text-neutral-400">June 9, 2025</span>
                </div>
            </div>

            {/* Widgets */}
            <div className="grid grid-flow-row auto-rows-fr gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                <Card variant="primary">
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
                </Card>

                <Card>
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
                </Card>

                <Card>
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
                </Card>

                <Card>
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
                </Card>
            </div>

            {/* Payments */}
            <div className="grid grid-flow-row auto-rows-min gap-4 lg:grid-cols-3 xl:grid-cols-4">
                <Card cardClass="lg:col-span-1">
                    <div className="d-card-title mb-2">
                        <p>Payment Summary</p>
                    </div>

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
                                <span className="text-xs">Missed Payments</span>
                            </div>

                            <div>
                                <ChevronRight className="b-chevron-animate w-[16px]" />
                            </div>
                        </div>
                    </div>
                </Card>

                {/* Repayment Schedule Table */}
                <Card
                    cardClass="lg:col-span-2 lg:auto-cols-max lg:overflow-hidden xl:col-span-3"
                    cardBodyClass="p-0!"
                >
                    <div className="d-card-title px-4 pt-3 xl:px-[18px]">
                        <p>Repayment Schedule</p>

                        <Button
                            variant="ghost"
                            aria-label="View more repayment schedules"
                            className="bg-secondary-600/30 hover:bg-secondary-600/60 h-[26px] gap-1 rounded-sm px-2 font-medium text-neutral-300"
                            size="xs"
                            rightIcon={<ArrowUpRight className="w-[14px]" />}
                        >
                            View more
                        </Button>
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
                                {repaymentScheduleList.map((payment, index) => (
                                    <tr
                                        key={index}
                                        className="hover:bg-secondary-600/60"
                                    >
                                        <td data-label="Date">
                                            {payment.date}
                                        </td>
                                        <td data-label="Amount">
                                            {payment.amount}
                                        </td>
                                        <td data-label="Status">
                                            <Badge
                                                variant={payment.status.variant}
                                            >
                                                {payment.status.label}
                                            </Badge>
                                        </td>
                                        <td data-label="Payment Method">
                                            {payment.paymentMethod}
                                        </td>
                                        <td data-label="Remarks">
                                            {payment.remarks || '-'}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </Card>
            </div>

            {/* Loans */}
            <div className="grid grid-flow-row auto-rows-min gap-4 lg:grid-cols-3 xl:grid-cols-6">
                {/* Loans Table */}
                <Card
                    cardClass="lg:col-span-2 lg:auto-cols-max lg:overflow-hidden xl:col-span-4"
                    cardBodyClass="p-0!"
                >
                    <div className="d-card-title px-4 pt-3 xl:px-[18px]">
                        <p>Loans</p>

                        <Button
                            variant="ghost"
                            aria-label="View more loans records"
                            className="bg-secondary-600/30 hover:bg-secondary-600/60 h-[26px] gap-1 rounded-sm px-2 font-medium text-neutral-300"
                            size="xs"
                            rightIcon={<ArrowUpRight className="w-[14px]" />}
                        >
                            View more
                        </Button>
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
                                {loansList.map((loan, index) => (
                                    <tr
                                        key={index}
                                        className="hover:bg-secondary-600/60"
                                    >
                                        <td data-label="Loan Type">
                                            {loan.loanType}
                                        </td>
                                        <td data-label="Amount">
                                            {loan.amount}
                                        </td>
                                        <td data-label="Terms">{loan.terms}</td>
                                        <td data-label="Date Applied">
                                            {loan.dateApplied}
                                        </td>
                                        <td data-label="Status">
                                            <Badge
                                                variant={loan.status.variant}
                                            >
                                                {loan.status.label}
                                            </Badge>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </Card>

                <Card cardClass="lg:col-span-1 xl:col-span-2">
                    <div className="d-card-title mb-2">
                        <p>Loans Distribution</p>

                        <Button
                            variant="ghost"
                            className="bg-secondary-600/30 hover:bg-secondary-600/60 h-[26px] gap-1 rounded-sm px-2 font-medium text-neutral-300"
                            size="xs"
                            rightIcon={<ArrowUpRight className="w-[14px]" />}
                        >
                            View more
                        </Button>
                    </div>

                    <div className="relative m-auto h-[35vh]">
                        <Doughnut
                            data={loanDistributionData}
                            options={{
                                responsive: true,
                                plugins: {
                                    legend: {
                                        position: 'bottom',
                                        align: 'center',
                                        labels: {
                                            boxWidth: 10,
                                            boxHeight: 10,
                                        },
                                    },
                                },
                            }}
                        />
                    </div>
                </Card>
            </div>
        </>
    )
}

export default Dashboard

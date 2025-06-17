import type { RepaymentSchedule, Loans } from '../types'

export const repaymentScheduleList: RepaymentSchedule[] = [
    {
        date: 'Mar 25, 2025',
        amount: '₱2,800',
        status: {
            label: 'Paid',
            variant: 'success',
        },
        paymentMethod: 'GCash',
        remarks: 'On Time',
    },
    {
        date: 'Apr 25, 2025',
        amount: '₱2,800',
        status: {
            label: 'Paid',
            variant: 'success',
        },
        paymentMethod: 'Bank Transfer',
        remarks: 'On Time',
    },
    {
        date: 'Jun 25, 2025',
        amount: '₱2,800',
        status: {
            label: 'Upcoming',
            variant: 'neutral',
        },
        paymentMethod: '-',
        remarks: 'Due Soon',
    },
]

export const loansList: Loans[] = [
    {
        loanType: 'Personal',
        amount: '₱50,000',
        terms: '12 months',
        dateApplied: 'Jan 15, 2024',
        status: {
            label: 'Completed',
            variant: 'success',
        },
    },
    {
        loanType: 'Travel',
        amount: '₱70,000',
        terms: '12 months',
        dateApplied: 'Jun 01, 2025',
        status: {
            label: 'Rejected',
            variant: 'error',
        },
    },
    {
        loanType: 'Emergency',
        amount: '₱25,000',
        terms: '4 months',
        dateApplied: 'Jun 15, 2025',
        status: {
            label: 'In Review',
            variant: 'primary',
        },
    },
]

export const loanDistributionData = {
    labels: ['Personal', 'Emergency', 'Business'],
    datasets: [
        {
            label: 'Loan Distribution %: ',
            data: [50, 20, 30],
            backgroundColor: ['#334F97', '#F7B4BE', '#E93D58'],
            borderColor: ['#334F97', '#F7B4BE', '#E93D58'],
        },
    ],
}

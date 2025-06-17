export type RepaymentSchedule = {
    date: string
    amount: string
    status: {
        label: string
        variant: statusType
    }
    paymentMethod: string
    remarks: string
}

export type Loans = {
    loanType: string
    amount: string
    terms: string
    dateApplied: string
    status: {
        label: string
        variant: statusType
    }
}

export type statusType = 'neutral' | 'success' | 'warning' | 'primary' | 'error';

import { Student } from "./student"

export interface FeePayment  {
    id: number
    student: Student 
    amountPaid: number
    paymentDate: number 
    paymentMethod: number 
    status: string
    remainingBalance: number
}
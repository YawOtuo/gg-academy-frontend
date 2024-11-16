import { Class } from "./class"
import { Student } from "./student"

export type AttendanceTypes = "present" | "absent" | "late" | "all"
export interface Attendance { 
    id: number 
    date: string
    status: AttendanceTypes 
    student: Student 
    class: Class
    extra_information : string
}
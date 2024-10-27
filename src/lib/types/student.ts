import { Class } from "./class"

type StudentLevels = "Primary2" | "Primary3"

export interface Student { 
    id: number
    name: string
    image : string 
    email : string 
    dateOfBirth : string 
    age: number
    gender: string 
    nationality: string 
    contactInformation : string 
    address : string
    class : Class
}
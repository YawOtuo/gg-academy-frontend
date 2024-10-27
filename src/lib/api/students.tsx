import { url } from "../../../weburl";
import { Student } from "../types/student";

// Fetch all students (Read)
export const fetchStudents = async (): Promise<Student[]> => {
  const response = await fetch(`${url}students`);
  return response.json();
};

// Fetch a single student by ID (Read)
export const fetchStudentById = async (id: number): Promise<Student> => {
  const response = await fetch(`${url}students/${id}`);
  return response.json();
};

export interface StudentFeesResponse {
  student_name: string 
  class: string 
  totalFee: number 
  totalPaid: number
  remainingBalance : number

}
export const fetchStudentFeesData = async (id: number): Promise<StudentFeesResponse> => {
  const response = await fetch(`${url}students/${id}/fees`);
  return response.json();
};

// Create a new student (Create)

export type AddStudentBody = Omit<Student, "id">;
export const createStudent = async (
  student: AddStudentBody
): Promise<Student> => {
  const response = await fetch(`${url}students`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(student),
  });
  return response.json();
};

// Update an existing student by ID (Update)
export const updateStudent = async (
  id: number,
  student: Partial<Student>
): Promise<Student> => {
  const response = await fetch(`${url}students/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(student),
  });
  return response.json();
};

// Delete a student by ID (Delete)
export const deleteStudent = async (id: number): Promise<void> => {
  await fetch(`${url}students/${id}`, {
    method: "DELETE",
  });
};

// /api/class/fetchClasses.ts
import { url } from "../../../weburl";
import { Class } from "../types/class";
import { Student } from "../types/student";

export const fetchAllClasses = async (): Promise<Class[]> => {
  const response = await fetch(`${url}class`);
  return response.json();
};

// Fetch a specific class by ID
export const fetchClassById = async (id: number): Promise<Class> => {
  const response = await fetch(`${url}class/${id}`);
  return response.json();
};

export interface CreateClassBody {
  name: string;
  feeAmount: number;
}

// Create a new class
export const createClass = async (
  classData: CreateClassBody
): Promise<Class> => {
  const response = await fetch(`${url}class`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(classData),
  });
  return response.json();
};

export interface UpdateClassBody {
  name: string;
  feeAmount: number;
}

// Update an existing class by ID
export const updateClass = async (
  id: number,
  classData: UpdateClassBody
): Promise<Class> => {
  const response = await fetch(`${url}class/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(classData),
  });
  return response.json();
};

// Delete a class by ID
export const deleteClass = async (id: number): Promise<void> => {
  await fetch(`${url}class/${id}`, {
    method: "DELETE",
  });
};

// New: Add a student to a class
export const addStudentToClass = async (
  classId: number,
  studentId: number
): Promise<Class> => {
  const response = await fetch(`${url}class/${classId}/students/${studentId}`, {
    method: "POST",
  });
  return response.json();
};

// New: Fetch all students in a specific class
export const fetchStudentsInClass = async (classId: number): Promise<Student[]> => {
  const response = await fetch(`${url}class/${classId}/students`);
  return response.json();
};

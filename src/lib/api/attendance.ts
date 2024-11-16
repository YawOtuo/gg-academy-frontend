// /api/attendance/fetchAttendance.ts
import { url } from "../../../weburl";
import { Attendance, AttendanceTypes } from "../types/attendance";
import { Student } from "../types/student";

// Create a new attendance record
export interface CreateAttendanceBody {
  studentId: number;
  classId: number;
  date: string;
  status: AttendanceTypes; // 'present', 'absent', 'late', etc.
  extra_information?: string; // Optional extra information
}

export const createAttendance = async (
  attendanceData: CreateAttendanceBody
): Promise<Attendance> => {
  console.log("submtting");
  const response = await fetch(`${url}attendance/mark`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(attendanceData),
  });
  return response.json();
};

// Update an existing attendance record by ID
export interface UpdateAttendanceBody {
  status: string; // 'present', 'absent', 'late', etc.
  extra_information?: string; // Optional extra information
}

export const updateAttendance = async (
  id: number,
  attendanceData: UpdateAttendanceBody
): Promise<Attendance> => {
  const response = await fetch(`${url}attendance/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(attendanceData),
  });
  return response.json();
};

// Delete an attendance record by ID
export const deleteAttendance = async (id: number): Promise<void> => {
  await fetch(`${url}attendance/${id}`, {
    method: "DELETE",
  });
};

// Fetch all students' attendance for a specific class



export interface ClassAttendanceResponse {
  date: string 
  items: Attendance[]
}
export const fetchAttendanceForClass = async (
  query: AttendanceTypes,
  classId: number
): Promise<ClassAttendanceResponse[]> => {
  const response = await fetch(
    `${url}attendance/class/${classId}?status=${query}`
  );
  return response.json();
};

// Fetch attendance for a specific student
export const fetchAttendanceForStudent = async (
  studentId: number
): Promise<Attendance[]> => {
  const response = await fetch(`${url}attendance/student/${studentId}`);
  return response.json();
};


export interface AttendanceUnmarked {
  date: string ,
  students: Student[]
}
export const FetchAttendanceUnmarked = async (): Promise<
AttendanceUnmarked[]
> => {
  const response = await fetch(`${url}attendance/students/not-marked`);
  return response.json();
};

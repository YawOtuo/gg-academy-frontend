// /hooks/useAttendance.ts
"use client";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  createAttendance,
  updateAttendance,
  deleteAttendance,
  fetchAttendanceForClass,
  fetchAttendanceForStudent,
  UpdateAttendanceBody,
  CreateAttendanceBody,
  FetchAttendanceUnmarked,
} from "@/lib/api/attendance";
import { useToast } from "@/hooks/use-toast";
import { Attendance, AttendanceTypes } from "../types/attendance";

// Fetch attendance for a specific class on a particular date
export function useFetchAttendanceForClass(
  query: AttendanceTypes,
  classId: number
) {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  // Fetch attendance for the specified class and date
  const {
    data: attendance,
    isLoading,
    error,
  } = useQuery({
    queryKey: [`attendanceClass-${query}`, classId],
    queryFn: () => fetchAttendanceForClass(query, classId),
    enabled: !!classId,
  });

  return {
    attendance,
    isLoading,
    error,
  };
}

// Fetch attendance for a specific student
export function useFetchAttendanceForStudent(studentId: number) {
  const {
    data: attendance,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["attendanceStudent", studentId],
    queryFn: () => fetchAttendanceForStudent(studentId),
    enabled: !!studentId, // Only fetch when there's a valid studentId
  });

  return {
    attendance,
    isLoading,
    error,
  };
}

export function useFetchAttendanceNotMarked(classid: number) {
  return useQuery({
    queryKey: ["attendanceNotMarked", classid],
    queryFn: () => FetchAttendanceUnmarked(),
    enabled: !!classid, // Only fetch when there's a valid studentId
  });
}

// Attendance Hook
function useAttendance() {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  // ** Mutations **

  // Add attendance record
  const addAttendanceMutation = useMutation({
    mutationFn: async (attendanceData: CreateAttendanceBody) => {
      console.log("submtting2");
      return await createAttendance(attendanceData);
    },
    onSuccess: (data) => {
      toast({
        title: `Attendance for student ${data?.student.name} has been added successfully`,
        variant: "default",
      });
      queryClient.invalidateQueries([
        "attendanceClass",
        data.class.name,
        data.date,
      ]);
      queryClient.invalidateQueries([
        `attendanceClass-${data.status}`,
        data.class.id,
      ]); // Refresh attendance for the class
      queryClient.invalidateQueries(["attendanceNotMarked", data.class.id]);
    },
  });

  // Update attendance record
  const updateAttendanceMutation = useMutation({
    mutationFn: async ({
      id,
      attendanceData,
    }: {
      id: number;
      attendanceData: UpdateAttendanceBody;
    }) => {
      return await updateAttendance(id, attendanceData);
    },
    onSuccess: (data) => {
      toast({
        title: `Attendance for student ${data?.student.name} has been updated successfully`,
        variant: "default",
      });
      queryClient.invalidateQueries([
        "attendanceClass",
        data.class.name,
        data.date,
      ]); // Refresh attendance for the class
    },
  });

  // Delete attendance record
  const deleteAttendanceMutation = useMutation({
    mutationFn: async (id: number) => await deleteAttendance(id),
    onSuccess: () => {
      toast({
        title: `Attendance record has been removed successfully`,
        variant: "default",
      });
      queryClient.invalidateQueries(["attendanceClass"]); // Refresh attendance data
    },
  });

  // ** Action Functions **

  const addAttendance = async (attendanceData: CreateAttendanceBody) => {
    try {
      console.log("submtting3");
      await addAttendanceMutation.mutateAsync(attendanceData);
    } catch (error) {
      console.error(error);
    }
  };

  const updateAttendanceById = async (
    id: number,
    attendanceData: UpdateAttendanceBody
  ) => {
    try {
      await updateAttendanceMutation.mutateAsync({ id, attendanceData });
    } catch (error) {
      console.error(error);
    }
  };

  const deleteAttendanceById = async (id: number) => {
    try {
      await deleteAttendanceMutation.mutateAsync(id);
    } catch (error) {
      console.error(error);
    }
  };

  return {
    addAttendance,
    updateAttendanceById,
    deleteAttendanceById,
    useFetchAttendanceForClass,
    useFetchAttendanceForStudent,
  };
}

export default useAttendance;

"use client";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  createClass,
  updateClass,
  deleteClass,
  fetchAllClasses,
  fetchClassById,
  addStudentToClass,
  fetchStudentsInClass,
  UpdateClassBody,
  CreateClassBody,
} from "@/lib/api/class";
import { useToast } from "@/hooks/use-toast";
import { Class } from "../types/class";
import { Student } from "../types/student";

// Fetch students in a specific class and provide mutation to add a student to the class
export function useFetchStudentsInClass(classId: number) {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  // Fetch students in the specified class
  const { data: students, isLoading, error } = useQuery({
    queryKey: ["classStudents", classId],
    queryFn: () => fetchStudentsInClass(classId),
    enabled: !!classId, // Only fetch when there's a valid classId
  });

  // Mutation to add a student to the specified class
  const addStudentMutation = useMutation({
    mutationFn: async (studentId: number) => await addStudentToClass(classId, studentId),
    onSuccess: () => {
      toast({
        title: `Student has been added to the class successfully`,
        variant: "default",
      });
      queryClient.invalidateQueries({ queryKey: ["classStudents", classId] });
    },
  });

  // Function to add a student to the class
  const addStudentToClassById = async (studentId: number) => {
    try {
      await addStudentMutation.mutateAsync(studentId);
    } catch (error) {
      console.error(error);
    }
  };

  return {
    students,
    isLoading,
    error,
    addStudentToClassById,
  };
}

// Fetch a single class by ID
export function useGetClass(id: number) {
  return useQuery({
    queryKey: ["class", id],
    queryFn: () => fetchClassById(id),
    enabled: !!id,
  });
}

function useClass() {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  // ** Fetch all classes **
  const {
    data: classes,
    isLoading: classesLoading,
    error: classesError,
  } = useQuery({
    queryKey: ["classes"],
    queryFn: fetchAllClasses,
  });

  // ** Mutations **

  // Add a class
  const addClassMutation = useMutation({
    mutationFn: async (classData: CreateClassBody) => await createClass(classData),
    onSuccess: (data) => {
      toast({ title: `${data?.name} has been added successfully`, variant: "default" });
      queryClient.invalidateQueries(["classes"]);
    },
  });

  // Update a class
  const updateClassMutation = useMutation({
    mutationFn: async ({ id, classData }: { id: number; classData: UpdateClassBody }) => {
      return await updateClass(id, classData);
    },
    onSuccess: (data) => {
      toast({ title: `${data?.name} has been updated successfully`, variant: "default" });
      queryClient.invalidateQueries(["class", data.id]);
    },
  });

  // Delete a class
  const deleteClassMutation = useMutation({
    mutationFn: async (id: number) => await deleteClass(id),
    onSuccess: () => {
      toast({ title: `Class has been removed successfully`, variant: "default" });
      queryClient.invalidateQueries(["classes"]);
    },
  });

  // ** Action Functions **

  const addClass = async (classData: CreateClassBody) => {
    try {
      await addClassMutation.mutateAsync(classData);
    } catch (error) {
      console.error(error);
    }
  };

  const updateClassById = async (id: number, classData: UpdateClassBody) => {
    try {
      await updateClassMutation.mutateAsync({ id, classData });
    } catch (error) {
      console.error(error);
    }
  };

  const deleteClassById = async (id: number) => {
    try {
      await deleteClassMutation.mutateAsync(id);
    } catch (error) {
      console.error(error);
    }
  };

  return {
    classes,
    classesLoading,
    classesError,
    useGetClass,
    useFetchStudentsInClass,
    addClass,
    updateClassById,
    deleteClassById,
  };
}

export default useClass;

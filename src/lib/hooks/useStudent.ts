import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  createStudent,
  updateStudent,
  deleteStudent,
  fetchStudents,
  fetchStudentById,
  searchStudents,
} from "@/lib/api/students"; // Import your CRUD API functions
import { useToast } from "@/hooks/use-toast";
import { Student } from "../types/student";


export function useSearchStudents(query: string) {
  return useQuery({
    queryKey: ["search-students", query],
    queryFn: () => searchStudents(query),
    enabled: !!query, // Only fetch when there's a valid query
  });

}




export function useGetStudent(id: number) {
  return useQuery({
    queryKey: ["students", id],
    queryFn: () => fetchStudentById(id),
    enabled: !!id, // Only fetch when there's a valid id
  });
}

function useStudents() {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  // Fetch all students (Read)
  const {
    data: students,
    isLoading: studentsLoading,
    error: studentsError,
  } = useQuery({
    queryKey: ["students"],
    queryFn: fetchStudents,
  });

  // Fetch a single student by ID (Read)

  // Mutation for adding a student (Create)
  const addStudentMutation = useMutation({
    mutationFn: async (studentData: Omit<Student, "id">) => {
      return await createStudent(studentData);
    },
    onSuccess: (data) => {
      toast({
        title: `${data?.name} has been added successfully`,
        variant: "default",
      });
      queryClient.invalidateQueries({ queryKey: ["students"] });
    },
  });

  // Mutation for updating a student (Update)
  const updateStudentMutation = useMutation({
    mutationFn: async ({
      id,
      studentData,
    }: {
      id: number;
      studentData: Partial<Student>;
    }) => {
      return await updateStudent(id, studentData);
    },
    onSuccess: (data) => {
      toast({
        title: `${data?.name} has been updated successfully`,
        variant: "default",
      });
      queryClient.invalidateQueries({ queryKey: ["students", data.id] });
    },
  });

  // Mutation for deleting a student (Delete)
  const deleteStudentMutation = useMutation({
    mutationFn: async (id: number) => {
      return await deleteStudent(id);
    },
    onSuccess: () => {
      toast({
        title: `Student has been removed successfully`,
        variant: "default",
      });
      queryClient.invalidateQueries({ queryKey: ["students"] });
    },
  });

  // Functions to be called by the component
  const addStudent = async (studentData: Omit<Student, "id">) => {
    try {
      await addStudentMutation.mutateAsync(studentData);
    } catch (error) {
      console.error(error);
    }
  };

  const updateStudentById = async (
    id: number,
    studentData: Partial<Student>
  ) => {
    try {
      await updateStudentMutation.mutateAsync({ id, studentData });
    } catch (error) {
      console.error(error);
    }
  };

  const deleteStudentById = async (id: number) => {
    try {
      await deleteStudentMutation.mutateAsync(id);
    } catch (error) {
      console.error(error);
    }
  };



  return {
    students,
    studentsLoading,
    studentsError,
    useGetStudent,
    addStudent,
    updateStudentById,
    deleteStudentById,
  };
}

export default useStudents;

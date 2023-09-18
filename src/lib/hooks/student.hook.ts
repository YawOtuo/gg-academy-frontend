import StudentService from "./student.service";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const studentService = new StudentService();

const useAllStudents = () => {
  return useQuery(["Students"], () => studentService.getAllStudents()); // Wrap the query function in an anonymous function
};

const useStudentById = (id) => {
  return useQuery(['Students', id], () => studentService.getStudentById(id)); // Wrap the query function in an anonymous function
}

const useCreateStudent = (body) => {
  const queryClient = useQueryClient();
  return useMutation(
    () => studentService.addStudent(body),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("Students");
      },
    }
  );
};

const useUpdateStudent = (id, body) => {
  const queryClient = useQueryClient();
  return useMutation(
    () => studentService.updateStudent(id, body),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("Students");
      },
    }
  );
};

const useDeleteStudent = (id) => {
  const queryClient = useQueryClient();
  return useMutation(
    () => studentService.deleteStudent(id),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("Students");
      },
    }
  );
};

export {
  useCreateStudent,
  useUpdateStudent,
  useStudentById,
  useAllStudents
}
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  createFeePayment,
  updateFeePayment,
  deleteFeePayment,
  fetchAllFees,
  fetchFeeById,
  CreateFeeBody,
  UpdateFeeBody,
  fetchFeesByStudent,
  FeePaymentType,
  fetchAllFeesForClass,
  fetchFeesStatusByClass,
} from "@/lib/api/fees"; // Import your CRUD API functions for fee payments
import { useToast } from "@/hooks/use-toast";
import { FeePayment } from "../types/fees";

export function useGetFeePayment(id: number) {
  return useQuery({
    queryKey: ["fees", id],
    queryFn: () => fetchFeeById(id),
    enabled: !!id, // Only fetch when there's a valid id
  });
}

export function useGetFeeByStudent(id: number) {
  return useQuery({
    queryKey: ["fees-student", id],
    queryFn: () => fetchFeesByStudent(id),
    enabled: !!id, // Only fetch when there's a valid id
  });
}

export function useGetFeeForClass(query: FeePaymentType, id: number) {
  return useQuery({
    queryKey: [`fee-payments-class`, id],
    queryFn: () => fetchAllFeesForClass(id),
    enabled: !!id, // Only fetch when there's a valid id
  });
}

export function useGetFeesPaidByStudents(classId: number, status: FeePaymentType) {
  return useQuery({
    queryKey: ["fees-paid-students", classId, status],
    queryFn: () => fetchFeesStatusByClass(classId, status),
    enabled: !!classId, // Only fetch when there's a valid studentId
  });
}


function useFeePayment() {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  // Fetch all fee payments
  const {
    data: fees,
    isLoading: feesLoading,
    error: feesError,
  } = useQuery({
    queryKey: ["fees"],
    queryFn: fetchAllFees,
  });

  // Mutation for adding a fee payment
  const addFeeMutation = useMutation({
    mutationFn: async (feeData: CreateFeeBody) => {
      console.log(feeData);
      return await createFeePayment(feeData);
    },
    onSuccess: (data) => {
      toast({
        title: `Fee payment has been added successfully`,
        variant: "default",
      });
      queryClient.invalidateQueries({ queryKey: ["fees"] });
      // queryClient.invalidateQueries({ queryKey: ["fees-student", id] });

    },
  });

  // Mutation for updating a fee payment
  const updateFeeMutation = useMutation({
    mutationFn: async ({
      id,
      feeData,
    }: {
      id: number;
      feeData: UpdateFeeBody;
    }) => {
      return await updateFeePayment(id, feeData);
    },
    onSuccess: (data) => {
      toast({
        title: `Fee payment has been updated successfully`,
        variant: "default",
      });
      queryClient.invalidateQueries({ queryKey: ["fees", data.id] });
    },
  });

  // Mutation for deleting a fee payment
  const deleteFeeMutation = useMutation({
    mutationFn: async (id: number) => {
      return await deleteFeePayment(id);
    },
    onSuccess: (data, id) => {
      toast({
        title: `Fee payment has been removed successfully`,
        variant: "default",
      });
      queryClient.invalidateQueries({ queryKey: ["fees"] });
      queryClient.invalidateQueries({ queryKey: ["fees-student", id] });

    },
  });

  // Functions to be called by the component
  const addFeePayment = async (feeData: CreateFeeBody) => {
    try {
      await addFeeMutation.mutateAsync(feeData);
    } catch (error) {
      console.error(error);
    }
  };

  const updateFeePaymentById = async (id: number, feeData: UpdateFeeBody) => {
    try {
      await updateFeeMutation.mutateAsync({ id, feeData });
    } catch (error) {
      console.error(error);
    }
  };

  const deleteFeePaymentById = async (id: number) => {
    try {
      await deleteFeeMutation.mutateAsync(id);
    } catch (error) {
      console.error(error);
    }
  };

  return {
    fees,
    feesLoading,
    feesError,
    useGetFeePayment,
    addFeePayment,
    updateFeePaymentById,
    deleteFeePaymentById,
  };
}

export default useFeePayment;

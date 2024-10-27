// /api/fees/fetchFees.ts
import { url } from "../../../weburl";
import { FeePayment } from "../types/fees";

// Fetch all fee payments
export const fetchAllFees = async (): Promise<FeePayment[]> => {
  const response = await fetch(`${url}fees`);
  return response.json();
};

// Fetch a specific fee payment by ID
export const fetchFeeById = async (id: number): Promise<FeePayment> => {
  const response = await fetch(`${url}fees/${id}`);
  return response.json();
};

export const fetchFeesByStudent = async (id: number): Promise<FeePayment[]> => {
    const response = await fetch(`${url}fees/students/${id}`);
    return response.json();
  };
  
export interface CreateFeeBody {
  studentId: number;
  amountPaid: number;
  paymentDate: string;
  paymentMethod: string;
}

// Create a new fee payment
export const createFeePayment = async (
  feeData: CreateFeeBody
): Promise<FeePayment> => {
  const response = await fetch(`${url}fees`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(feeData),
  });
  return response.json();
};

export interface UpdateFeeBody {
    amountPaid: number;
    paymentDate: string;
    paymentMethod: string;
  }
// Update a fee payment by ID
export const updateFeePayment = async (
  id: number,
  feeData: UpdateFeeBody
): Promise<FeePayment> => {
  const response = await fetch(`${url}fees/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(feeData),
  });
  return response.json();
};

// Delete a fee payment by ID
export const deleteFeePayment = async (id: number): Promise<void> => {
  await fetch(`${url}fees/${id}`, {
    method: "DELETE",
  });
};

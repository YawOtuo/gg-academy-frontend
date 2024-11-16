import { useState } from "react";
import { useSearchStudents } from "@/lib/hooks/useStudent";

export function useSearch() {
  const [query, setQuery] = useState("");
  const { data: students, isLoading } = useSearchStudents(query);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  return {
    query,
    handleInputChange,
    students,
    isLoading,
  };
}

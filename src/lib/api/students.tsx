import { url } from "../../../weburl";

export const fetchStudents = async () => {
    const response = await fetch(`${url}students`);
    return response.json();
  };
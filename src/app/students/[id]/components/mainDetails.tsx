import OptimizedImage from "@/components/ui/OptimizedImage";
import { useParams } from "next/navigation";
import { BsArrowRightCircle, BsArrowRightCircleFill } from "react-icons/bs";
import { Button } from "@/components/ui/button";
import { useGetStudent } from "@/lib/hooks/useStudent";
import AddStudentModal from "@/components/Modals/AddStudentModal";

const MainDetails = () => {
  const params = useParams();

  const {
    data: student,
    isLoading,
    isError,
  } = useGetStudent(Number(params?.id));
  return (
    <div className="w-full flex gap-6 items-center justify-start relative">
      <div className="w-full h-full max-w-[250px] aspect-square rounded-full border-4 overflow-hidden ">
        <OptimizedImage
          src={student?.image || "/student-placeholder.png"}
          className="w-full h-full"
          alt="Student image"
          variant="cover"
        />
      </div>
      <div className="flex flex-col py-5 gap-5 ">
        <div className="flex flex-col gap-1">
          <h1 className="capitalize  text-primary">{student?.name}</h1>
        </div>
        <div>
          <AddStudentModal edit initialData={student} />
        </div>
      </div>
    </div>
  );
};

export default MainDetails;

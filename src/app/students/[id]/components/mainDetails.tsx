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
    <div className="w-full flex flex-col gap-5 items-start justify-start relative border-b-2">
      <div className="w-full h-full max-w-md aspect-video rounded-lg border-4 overflow-hidden ">
        <OptimizedImage
          src={student?.image || "/student-placeholder.png"}
          className="w-full h-full"
          alt="Student image"
          variant="cover"
        />
      </div>

      <div className="flex flex-col gap-3 items-start  ">
        <div className="flex flex-col gap-1 capitalize">
          <h1 className="capitalize  text-primary">{student?.name}</h1>
          <p>{student?.class?.name}</p>
        </div>
        <div>
          <AddStudentModal edit initialData={student} />
        </div>
      </div>
    </div>
  );
};

export default MainDetails;

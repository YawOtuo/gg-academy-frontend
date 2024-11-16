import AddStudentModal from "@/components/Modals/AddStudentModal";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function Welcome() {
  return (
    <div className="rounded-2xl flex items-start text-left justify-center flex-col gap-3">
      <div>
        <h1 className="text-primary">Welcome Yaw, </h1>
        <p className="text-sm">What will you llike to do today?</p>
      </div>
      <div className="flex flex-col gap-2 items-start">
        <div className="flex flex-col lg:flex-row gap-3 items-start lg:items-center flex-wrap">
          <AddStudentModal />
          <Link href={`/classes`}>
            <Button variant={"outline"}>View All Classes</Button>
          </Link>{" "}
        </div>
      </div>
    </div>
  );
}

export default Welcome;

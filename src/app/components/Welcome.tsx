import AddStudentModal from "@/components/Modals/AddStudentModal";
import { Button } from "@/components/ui/button";

function Welcome() {
  return (
    <div className="h-[30vh] lg:h-[30vh] bg-primary-foreground px-5 lg:px-20 py-5 rounded-2xl flex items-start text-left justify-center flex-col gap-3">
      <h1 className="text-primary">Welcome Yaw </h1>

      <div className="flex flex-col gap-2">
        <h4>What will you llike to do today?</h4>

        <div className="flex flex-col lg:flex-row gap-3 items-start lg:items-center flex-wrap">
          <AddStudentModal />
          <Button variant={"outline"}>Lorem</Button>
        </div>
      </div>
    </div>
  );
}

export default Welcome;

import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { styled } from "../../stiches.config";
import { LuArrowRightCircle, LuArrowRightToLine } from "react-icons/lu";

type Props = {
  title: string;
  count: number;
};

const CountCard = ({ title, count }: Props) => {
  return (
    <div className="flex flex-col gap-3 justify-center px-10 items-start hover:scale-[1.01] transition-all duration-300 md:w-fit border-2 border-primary rounded-lg py-4 w-full ">
      <p className="text-md">{title}</p>
      <div className="flex items-center justify-between gap-10 w-full">
        <div className="text-2xl">{count}</div>
        <LuArrowRightToLine size={30} className="text-primary text-xl font-bold" />
      </div>
    </div>
  );
};

export default CountCard;

"use client";

import Image from "next/image";
import { styled } from "../../stiches.config";
import OptimizedImage from "@/ui/OptimizedImage";
import { BsArrowRight } from "react-icons/bs";
import { byellow } from "@/assets/colors";

type Props = {
  name: string;
  picture: string;
};

const StudentCard = ({ name, picture }: Props) => {
  return (
    <div className="flex items-center gap-10 shadow-sm border-2 rounded-lg">
      <OptimizedImage
        src={picture}
        css={{
          maxWidth: "300px",
          width: "100%",
          aspectRatio: "500/700",
        }}
        variant="cover"
        alt="Student image"
      />
      <div className="items-start gap-5 flex flex-col justify-between w-full h-full py-5 capitalize">
        <div className="text-xl "> {name}</div>
        <div className="text-xs flex items-center gap-5">
          View Profile
          <BsArrowRight color={byellow} size={50} />
        </div>
      </div>
    </div>
  );
};


export default StudentCard;

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
    <Root className="flex items-center gap-10">
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
      <div className="items-start gap-5 flex flex-col justify-center w-full">
        {name}
        <div className="text-xs">View Profile

            <BsArrowRight color={byellow} size={50}/>
        </div>
      </div>
    </Root>
  );
};

const Root = styled("div", {
  minHeight: "50px",
  minWidth: "100px",
  aspectRatio: "100/50",
  borderRadius: "8px",
  boxShadow: "0px 1px 1px 0px #E4A951",
});
export default StudentCard;

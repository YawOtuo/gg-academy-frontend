"use client";

import Image from "next/image";
import { styled } from "../../stiches.config";
import OptimizedImage from "@/components/ui/OptimizedImage";
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";

type Props = {
  name: string;
  picture: string;
};

const StudentCard = ({ name, picture }: Props) => {
  return (
    <motion.div
      layout
      className="flex items-center gap-5 shadow-sm border-2 rounded-lg w-full">
      <OptimizedImage
        src={picture}
        className="aspect-[4/3] w-full h-full"
        variant="cover"
        alt="Student image"
      />
      <div className="items-start gap-5 flex flex-col justify-between w-full h-full capitalize">
        <div className="text-base "> {name}</div>
        <div className="text-xs flex items-center gap-5">
          View Profile
          <BsArrowRight className="text-primary" size={50} />
        </div>
      </div>
    </motion.div>
  );
};

export default StudentCard;

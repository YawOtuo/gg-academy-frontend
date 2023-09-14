"use client";

import { styled } from "@stitches/react";
import { PiStudentBold } from "react-icons/pi";

const StudentListCard = ({ name }) => {
  return (
    <Root className="my-1 p-3 px-6 flex justify-start items-center">
      <div className="flex gap-5 w-full items-center">
        <PiStudentBold size="20" />

        <div className="w-full">{name}</div>
      </div>
    </Root>
  );
};

const Root = styled("div", {
  minHeight: "52px",
  width: "100%",
  minWidth:"500px",
  maxWidth:"600px",
  backgroundColor: "$yellow100",

  "&:hover":{
    backgroundColor: "grey",
    color:"white",
    scale:"1.02",
  }
});

export default StudentListCard;

import OptimizedImage from "@/ui/OptimizedImage";
import Button from "@/ui/button";
import { BsArrowRightCircle, BsArrowRightCircleFill } from "react-icons/bs";

const Info = ({ data, value }) => {
  return (
    <div className="px-5 py-3 w-full capitalize">
      {data}: {value}
    </div>
  );
};

const MainDetails = () => {
  return (
    <div className="flex flex-col items-center justify-center shadow-md relative">
      <div className="w-full h-full max-w-[200px] aspect-square rounded-full">
        <OptimizedImage
          src={
            "https://images.unsplash.com/photo-1511551203524-9a24350a5771?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjV8fHN0dWRlbnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
          }
          css={{
            width: "100%",
            maxWidth: "200px",
            aspectRatio: "square",
            borderRadius: "50%",
            minWidth: "200px",
          }}
          alt="Student image"
          variant="cover"
        />
      </div>
      <div className="flex flex-col py-5 gap-16 ">
        <Button>Edit Details</Button>
        <p>
          <Info data={"name"} value={"Edson Alvarez"} />
          <Info data={"name"} value={"Edson Alvarez"} />
          <Info data={"name"} value={"Edson Alvarez"} />
          <Info data={"name"} value={"Edson Alvarez"} />
          <Info data={"name"} value={"Edson Alvarez"} />
          <Info data={"name"} value={"Edson Alvarez"} />
          <Info data={"name"} value={"Edson Alvarez"} />

          <button className="absolute right-[-20px] z-10 bottom-16">
            <BsArrowRightCircle color="#E4A951" size="50" />
          </button>{" "}
        </p>
      </div>
    </div>
  );
};

export default MainDetails;

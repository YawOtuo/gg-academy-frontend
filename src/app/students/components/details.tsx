import { useStudentById } from "@/lib/hooks/student.hook";
import { styled } from "@stitches/react";
import { useParams } from "next/navigation";

const Details = () => {
  const params = useParams();
  const { data: student } = useStudentById(params?.id);
  return (
    <Root className="flex flex-col px-1 py-10 gap-10">
      <div>{student?.data.name} </div>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Est eveniet
        optio iusto exercitationem modi quidem, nihil repellat necessitatibus
        veniam beatae reiciendis perspiciatis, explicabo animi quo ex in
        adipisci facilis mollitia.
      </div>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Est eveniet
        optio iusto exercitationem modi quidem, nihil repellat necessitatibus
        veniam beatae reiciendis perspiciatis, explicabo animi quo ex in
        adipisci facilis mollitia.
      </div>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Est eveniet
        optio iusto exercitationem modi quidem, nihil repellat necessitatibus
        veniam beatae reiciendis perspiciatis, explicabo animi quo ex in
        adipisci facilis mollitia.
      </div>
    </Root>
  );
};

const Root = styled("div", {
  backgroundColor: "white",
});

export default Details;

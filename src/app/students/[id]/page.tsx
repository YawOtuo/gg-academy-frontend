import OptimizedImage from "@/ui/OptimizedImage";
import { styled } from "@stitches/react";

const Page = () => {
  return (
    <div>
      <div className="grid grid-cols-4">
        <div>
          <div className="w-full h-full max-w-[200px] aspect-square">
            <OptimizedImage
              src={
                "https://images.unsplash.com/photo-1511551203524-9a24350a5771?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjV8fHN0dWRlbnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"

              }
              css={{
                width:"100%",
                maxWidth:"200px",
                aspectRatio:"square"
              }}
              alt="Student image"
              variant="cover"
            />
          </div>
        </div>
        <div>
            <Navigation>Details</Navigation>
        </div>
        <div>
            <Navigation>Fees</Navigation>
        </div>
        <div>
            <Navigation>Others</Navigation>
        </div>
      </div>
    </div>
  );
};


const Navigation = styled('button', {

})
export default Page;

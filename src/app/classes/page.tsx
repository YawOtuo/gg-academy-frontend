"use client";
import ClassCard from "@/components/ClassCard";
import SkeletonClassCard from "@/components/ClassCard/SkeletonClassCard";
import FetchingState from "@/components/FetchingState";
import AddClassModal from "@/components/Modals/AddClassModal.tsx";
import useClass from "@/lib/hooks/useClass";
import Link from "next/link";

function Page() {
  const { classes, classesError, classesLoading } = useClass();
  return (
    <div className="flex flex-col items-start gap-5">
      <div>
        <AddClassModal />
      </div>
      <FetchingState
        className="grid grid-cols-1 lg:grid-cols-3 gap-5"
        isLoading={classesLoading}
        isError={classesError}
        loading={<SkeletonClassCard />}
        success={classes?.map((r) => (
          <Link href={`/classes/${r.id}`} key={r.id}>
            <ClassCard classData={r} key={r.id} />
          </Link>
        ))}
        isEmpty={classes && classes.length < 1}
        nullComponent={<div>No classes created</div>}
        skeletonCount={10}
      />
    </div>
  );
}

export default Page;

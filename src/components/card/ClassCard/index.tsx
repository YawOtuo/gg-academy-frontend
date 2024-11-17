import { Class } from "@/lib/types/class";

type Props = {
    classData: Class; // Renamed prop to avoid conflict
};

function ClassCard({ classData }: Props) {
    return (
        <div className="border rounded p-4 shadow hover:shadow-lg transition-shadow duration-200 flex flex-col items-start cursor-pointer">
            <h3 className="text-lg font-bold capitalize">{classData.name}</h3>
            {/* <p className="text-gray-600">Description: {classData.description}</p> */}
            {/* <p className="text-gray-600">Teacher: {classData.teacher}</p> */}
            <p className="text-slate-600 text-sm">Students Enrolled: {classData.studentCount}</p>
        </div>
    );
}

export default ClassCard;

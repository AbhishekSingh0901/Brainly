import { GiBrain } from "react-icons/gi";

function Sidebar() {
  return (
    <div className=" sticky bg-white p-3 pt-6 lg:p-6 lg:w-64  md:block">
      <div className="flex items-center justify-start gap-1 ">
        <GiBrain className="text-indigo-600 text-xl lg:text-3xl" />
        <h1 className="text-base lg:text-xl font-bold text-indigo-950">
          Brainly
        </h1>
      </div>
    </div>
  );
}

export default Sidebar;

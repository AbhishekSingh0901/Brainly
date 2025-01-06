import { GiBrain } from "react-icons/gi";

function Sidebar() {
  return (
    <div className=" sticky bg-white p-6">
      <div className="flex items-center justify-center gap-1 ">
        <GiBrain className="text-indigo-600 text-2xl" />
        <h1 className="text-lg font-bold text-indigo-950">Brainly</h1>
      </div>
    </div>
  );
}

export default Sidebar;

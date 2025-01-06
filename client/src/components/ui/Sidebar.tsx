import { GiBrain } from "react-icons/gi";
import SidebarItem from "./SidebarItem";
import { CiTwitter } from "react-icons/ci";
import { PiYoutubeLogoLight } from "react-icons/pi";

function Sidebar() {
  return (
    <div className=" sticky bg-white p-3 pt-6 lg:p-6 lg:w-64  md:block ">
      <div className="flex items-center justify-start gap-1 mb-8 border-b-2 pb-1 border-indigo-600">
        <GiBrain className="text-indigo-600 text-xl lg:text-3xl" />
        <h1 className="text-base lg:text-xl font-bold text-indigo-950">
          Brainly
        </h1>
      </div>
      <div className="flex flex-col gap-4 items-center">
        <SidebarItem
          icon={<CiTwitter className="text-indigo-700 text-2xl" />}
          text="Tweets"
        />
        <SidebarItem
          icon={<PiYoutubeLogoLight className="text-indigo-700 text-2xl" />}
          text="Videos"
        />
      </div>
    </div>
  );
}

export default Sidebar;

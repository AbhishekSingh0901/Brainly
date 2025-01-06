import { ReactElement } from "react";

function SidebarItem({ text, icon }: { text: string; icon: ReactElement }) {
  return (
    <div className="flex items-center gap-2 w-full p-2 rounded-md bg-indigo-50 hover:bg-indigo-100 transition-all duration-100 cursor-pointer">
      <div className="mx-auto lg:mx-0 flex items-center gap-2">
        {icon}
        <h2 className="hidden lg:inline-block ">{text}</h2>
      </div>
    </div>
  );
}

export default SidebarItem;

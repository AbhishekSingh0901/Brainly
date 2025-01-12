import { GiBrain } from "react-icons/gi";
import SidebarItem from "./SidebarItem";
import { CiTwitter } from "react-icons/ci";
import { PiYoutubeLogoLight } from "react-icons/pi";
import Button from "./Button";
import { IoLogOutOutline } from "react-icons/io5";
import axios from "axios";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

function Sidebar() {
  const { toast } = useToast();
  const navigate = useNavigate();
  const handleLogout = () => {
    // handle logout
    axios
      .post("http://localhost:4000/api/v1/user/logout", null, {
        withCredentials: true,
      })
      .then((res) => {
        if (res.data?.success) {
          toast({
            description: "User logged out",
          });
          // redirect to login page
          navigate("/signin");
        }
      });
  };
  return (
    <div className=" sticky bg-white p-3 pt-6 lg:p-6 lg:w-64 flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-center gap-1 mb-8 border-b-2 pb-1 border-indigo-600">
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
      <div className="mb-6">
        <Button
          variant="primary"
          text="LOGOUT"
          startIcon={<IoLogOutOutline />}
          isForm={false}
          onClick={handleLogout}
        />
      </div>
    </div>
  );
}

export default Sidebar;

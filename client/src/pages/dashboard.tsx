import { FiPlus } from "react-icons/fi";

import { IoShareSocialOutline } from "react-icons/io5";

import { useState } from "react";
import CreateContentModal from "@/components/ui/CreateContentModal";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Sidebar from "@/components/ui/Sidebar";

function Dashboard() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div className=" bg-gray-100 h-screen flex">
      <CreateContentModal open={modalOpen} onClose={setModalOpen} />
      <Sidebar />
      <div className="flex-1 px-5 max-w-7xl mx-auto">
        <header className="flex items-center justify-between p-2 py-8">
          <h2 className="text-base md:text-xl font-medium">All Content</h2>
          <div className="flex items-center gap-2 md:gap-4">
            <Button
              isForm={false}
              onClick={() => console.log("Button clicked")}
              variant="secondary"
              text="Shrare Brain"
              startIcon={<IoShareSocialOutline className="text-lg" />}
            />
            <Button
              isForm={false}
              onClick={() => setModalOpen(true)}
              variant="primary"
              text="Add Content"
              startIcon={<FiPlus className="text-lg" />}
            />
          </div>
        </header>
        <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-3 lg:gap-4 w-fit mx-auto">
          <Card
            title="My Tweet"
            type="tweet"
            link="https://x.com/Bazinga_09/status/1875390368298229773"
          />

          <Card
            title="Prompt engineering"
            type="video"
            link="https://www.youtube.com/watch?v=LWiMwhDZ9as"
          />
        </section>
      </div>
    </div>
  );
}

export default Dashboard;

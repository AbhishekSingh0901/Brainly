import { FiPlus } from "react-icons/fi";
import Button from "./components/ui/Button";
import { IoShareSocialOutline } from "react-icons/io5";
import Sidebar from "./components/ui/Sidebar";
import Card from "./components/ui/Card";

function App() {
  return (
    <div className=" bg-gray-100 h-screen flex">
      <Sidebar />
      <div className="flex-1 px-5 max-w-7xl mx-auto">
        <header className="flex items-center justify-between p-2 py-8">
          <h2 className="text-xl font-medium">All Content</h2>
          <div className="flex items-center gap-4">
            <Button
              onClick={() => console.log("Button clicked")}
              variant="secondary"
              text="Shrare Brain"
              startIcon={<IoShareSocialOutline className="text-lg" />}
            />
            <Button
              variant="primary"
              text="Add Content"
              startIcon={<FiPlus className="text-lg" />}
            />
          </div>
        </header>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-fit">
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

export default App;

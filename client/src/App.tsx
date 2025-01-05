import Button from "./components/ui/Button";
import { LuCirclePlus } from "react-icons/lu";

function App() {
  return (
    <div>
      <Button
        variant="primary"
        text="Primary Button"
        startIcon={<LuCirclePlus className="text-lg" />}
      />
      <Button variant="secondary" text="Secondary Button" />
    </div>
  );
}

export default App;

import { IoClose } from "react-icons/io5";
import Button from "./Button";
import { Dispatch, SetStateAction } from "react";

function CreateContentModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <div>
      {open && (
        <div className="w-screen h-screen bg-indigo-950 bg-opacity-20 fixed top-0 left-0 z-10 flex justify-center items-center">
          <div className="bg-white p-5 rounded-md">
            <div className="flex justify-between items-center">
              <h2 className="font-medium">Add Content</h2>
              <button onClick={() => onClose(false)}>
                <IoClose className="text-xl" />
              </button>
            </div>
            <div className="flex flex-col gap-4 mt-4 min-w-[300px]">
              <Input
                placeholder="Add Title"
                onChange={(e) => console.log(e.target.value)}
              />
              <Input
                placeholder="Add Link"
                onChange={(e) => console.log(e.target.value)}
              />
              <div className="flex justify-end">
                <Button
                  isForm={true}
                  variant="primary"
                  text="Add"
                  onClick={() => console.log("Content added")}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function Input({
  onChange,
  placeholder,
}: {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}) {
  return (
    <input
      placeholder={placeholder}
      type="text"
      className="border text-sm border-gray-200 p-2 rounded-md w-full"
      onChange={onChange}
    />
  );
}

export default CreateContentModal;

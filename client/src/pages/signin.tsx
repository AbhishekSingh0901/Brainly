import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";

function Signin() {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-indigo-50">
      <div className="bg-white rounded-md shadow-md min-w-72 p-3 flex flex-col gap-3">
        <Input
          placeholder="Username"
          onChange={(e) => console.log(e.target.value)}
        />
        <Input
          placeholder="Email"
          onChange={(e) => console.log(e.target.value)}
        />
        <Input
          placeholder="Password"
          onChange={(e) => console.log(e.target.value)}
        />
        <Button text="SignUp" variant="primary" className="w-full" />
      </div>
    </div>
  );
}

export default Signin;

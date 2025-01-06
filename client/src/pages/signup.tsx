import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import axios from "axios";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const usernameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passowrdRef = useRef<HTMLInputElement>(null);

  const navigate = useNavigate();

  const onSignUp = () => {
    const username = usernameRef.current?.value;
    const email = emailRef.current?.value;
    const password = passowrdRef.current?.value;

    axios
      .post(
        "http://localhost:4000/api/v1/user/signup",
        {
          username,
          email,
          password,
        },
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        console.log(res.data);
        navigate("/signin");
      });
  };
  return (
    <div className="w-full h-screen flex justify-center items-center bg-indigo-50">
      <div className="bg-white rounded-md shadow-md min-w-72 p-3 flex flex-col gap-3">
        <Input inputRef={usernameRef} placeholder="Username" />
        <Input inputRef={emailRef} placeholder="Email" />
        <Input inputRef={passowrdRef} placeholder="Password" />
        <Button
          text="SignUp"
          variant="primary"
          isForm={true}
          className="w-full"
          onClick={onSignUp}
        />
      </div>
    </div>
  );
}

export default Signup;

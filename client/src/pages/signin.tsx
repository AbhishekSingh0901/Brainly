import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import axios from "axios";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

function Signin() {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const onSignIn = () => {
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;
    axios
      .post(
        "http://localhost:4000/api/v1/user/login",
        {
          email,
          password,
        },
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        console.log(res.data);
        navigate("/dashboard");
      });
  };
  return (
    <div className="w-full h-screen flex justify-center items-center bg-indigo-50">
      <div className="bg-white rounded-md shadow-md min-w-72 p-3 flex flex-col gap-3">
        <Input inputRef={emailRef} placeholder="Email" />
        <Input inputRef={passwordRef} placeholder="Password" />
        <Button
          onClick={onSignIn}
          isForm={true}
          text="SignIn"
          variant="primary"
          className="w-full"
        />
      </div>
    </div>
  );
}

export default Signin;

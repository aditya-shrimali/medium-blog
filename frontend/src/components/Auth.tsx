import { SignupInput } from "@siddhant001/common";
import axios from "axios";
import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../config";

const Auth = ({ type }: { type: "signup" | "signin" }) => {
  const navigate = useNavigate();
  const [postInputs, setPostInputs] = useState<SignupInput>({
    name: "",
    email: "",
    password: "",
  });
  async function sendRequest() {
    try {
      const response = await axios.post(
        `${BACKEND_URL}/api/v1/user/${type === "signup" ? "signup" : "signin"}`,
        postInputs
      );
      const jwt = response.data;
      localStorage.setItem("token", jwt.jwt);
      alert("Hello kaam done");
      navigate("/blogs");
    } catch (error) {
      alert("Erorrrrrrrrrrrr");
      console.error(error);
    }
  }
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img className="mx-auto h-20 w-auto" src="/logo.png" alt="Blogit" />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Create an account
          </h2>
          <p className="text-center text-gray-500">
            {type === "signin"
              ? "Don't have an account? "
              : "Already have an account? "}
            <Link to={type === "signin" ? "/signup" : "/signin"}>
              {type === "signin" ? "Sign up" : "Login"}
            </Link>
          </p>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6">
            {type === "signup" ? (
              <LabelledInput
                label="Username"
                placeholder="aditya_shrimali"
                onChange={(e) => {
                  setPostInputs({
                    ...postInputs,
                    name: e.target.value,
                  });
                }}
              />
            ) : null}
            <LabelledInput
              label="Email address"
              placeholder="example@email.com"
              type="email"
              onChange={(e) => {
                setPostInputs({
                  ...postInputs,
                  email: e.target.value,
                });
              }}
            />
            <LabelledInput
              label="Password"
              placeholder="Enter your password"
              type="password"
              onChange={(e) => {
                setPostInputs({
                  ...postInputs,
                  password: e.target.value,
                });
              }}
            />
            <div>
              <button
                type="button"
                onClick={sendRequest}
                className="flex w-full justify-center rounded-md bg-gray-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
              >
                {type == "signup" ? "Sign up" : "Sign in"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

interface LabelledInputProps {
  label: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}

function LabelledInput({
  label,
  placeholder,
  onChange,
  type,
}: LabelledInputProps) {
  return (
    <>
      <div>
        <label className="block text-sm font-medium leading-6 text-gray-900">
          {label}
        </label>
        <div className="mt-2">
          <input
            id="username"
            type={type || "text"}
            required
            onChange={onChange}
            placeholder={placeholder}
            className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
    </>
  );
}

export default Auth;

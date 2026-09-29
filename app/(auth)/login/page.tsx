import { Metadata } from "next";
import Image from "next/image";
import logo from "@/assets/airbnb_logo.png";
import bgImage from "@/assets/login-bg.png";
import Link from "next/link";
import LoginForm from "../../../components/forms/login-form";

export const metadata: Metadata = {
  title: "Login",
};

const LoginPage = () => {
  return (
    <main className="relative flex h-screen items-center justify-center">
      <div className="absolute inset-0 -z-10">
        <Image
          src={bgImage}
          alt="bgImage"
          className="absolute  -z-5 h-full w-full object-cover "
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="flex flex-col items-center justify-center rounded-4xl bg-white p-10 m-10 shadow-2xl">
        <Image src={logo} alt="logo" className="w-10 h-10" />
        <h1 className="font-bold">Log in </h1>
        <LoginForm />
        <div className="text-xs text-gray-400 flex gap-2 mt-5">
          <Link href="/forgot-password">
            <p>Forgot password</p>
          </Link>
          <p>Dont have an Account ? </p>{" "}
          <Link href="/register">
            <span>Create Account</span>
          </Link>
        </div>
      </div>
    </main>
  );
};
export default LoginPage;

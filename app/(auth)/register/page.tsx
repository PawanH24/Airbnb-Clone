import { Metadata } from "next";
import logo from "@/assets/airbnb_logo.png";
import bgImage from "@/assets/login-bg.png";
import Image from "next/image";
import RegistrationForm from "../../../components/forms/registration-form";

export const metadata: Metadata = {
  title: "Create Account",
};

const Register = () => {
  return (
    <main className="flex flex-col h-screen items-center justify-center">
      <div className="absolute inset-0 -z-10">
        <Image
          height={1000}
          width={1000}
          src={bgImage}
          alt="bgImage"
          className="absolute -z-5 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
      <div className="flex flex-col items-center rounded-4xl bg-white p-10 m-10 shadow-2xl">
        <div>
          <Image src={logo} alt="logo" />
          <h1 className="font-bold">Register Page</h1>
        </div>
        <RegistrationForm />
      </div>
    </main>
  );
};
export default Register;

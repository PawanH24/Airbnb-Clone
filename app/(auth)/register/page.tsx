import { Metadata } from "next";
import logo from "@/assets/airbnb_logo.png";
import Image from "next/image";
import RegistrationForm from "../../../components/forms/registration-form";

export const metadata: Metadata = {
  title: "Create Account",
};

const Register = () => {
  return (
    <main className="flex flex-col h-screen items-center justify-center">
      <div className="flex flex-col items-center border-2 border-gray-400 rounded-4xl p-10 m-10">
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

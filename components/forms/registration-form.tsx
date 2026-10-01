"use client";
import SubmitButton from "../common/button/submit-button";
import { SubmitHandler, useForm } from "react-hook-form";

type TRegisterInput = {
  email: string;
  password: string;
  fullName: string;
  phone: string;
  role: "USER" | "HOST";
  profile_image: FileList | "";
};

const RegistrationForm = () => {
  const { register, handleSubmit } = useForm<TRegisterInput>({
    defaultValues: {
      email: "",
      password: "",
      fullName: "",
      phone: "",
      role: "USER",
      profile_image: "",
    },
  });

  const onSubmit: SubmitHandler<TRegisterInput> = (data) => {
    console.log("registered", data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-center "
    >
      <div className="flex flex-col gap-1.5 m-5">
        <label htmlFor="fullName"></label>
        <input
          id="fullname"
          type="text"
          placeholder="Enter your full name"
          {...register("fullName")}
          className="border border-gray-300 rounded-lg mx-1 px-2 py-1"
        />
        <label htmlFor="email"></label>
        <input
          id="email"
          type="text"
          placeholder="Enter your email"
          {...register("email")}
          className="border border-gray-300 rounded-lg mx-1 px-2 py-1"
        />
        <label htmlFor="phone"></label>
        <input
          id="phone"
          type="text"
          placeholder="Enter your phone number"
          {...register("phone")}
          className="border border-gray-300 rounded-lg mx-1 px-2 py-1"
        />
        <label htmlFor="password"></label>
        <input
          id="password"
          type="text"
          placeholder="Enter your password"
          {...register("password")}
          className="border border-gray-300 rounded-lg mx-1 px-2 py-1"
        />
        <label htmlFor="profile_image"></label>
        <input
          id="profile_image"
          type="file"
          {...register("profile_image")}
          className="border border-gray-300 rounded-lg px-2 py-1 text-sm text-gray-400 file:mr-4 file:py-1 file:px-3 file:rounded-md
          file:border-0 file:text-xs file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 cursor-pointer file:cursor-pointer"
        />
      </div>
      <div className="flex gap-2 mb-4">
        <label
          htmlFor="role-user"
          className="flex w-36 cursor-pointer items-center justify-center gap-2 rounded-lg border border-gray-300 px-4 py-1"
        >
          <input
            id="role-user"
            type="radio"
            value="USER"
            {...register("role")}
          />
          User
        </label>
        <label
          htmlFor="role-host"
          className="flex w-36 cursor-pointer items-center justify-center gap-2 rounded-lg border border-gray-300 px-4 py-1"
        >
          <input
            id="role-host"
            type="radio"
            value="HOST"
            {...register("role")}
          />
          Host
        </label>
      </div>
      <div className="flex justify-center">
        <SubmitButton type="submit" buttonName="Create Account" />
      </div>
    </form>
  );
};
export default RegistrationForm;

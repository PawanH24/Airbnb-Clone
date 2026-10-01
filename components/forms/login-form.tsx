"use client";

import SubmitButton from "../common/button/submit-button";
import { SubmitHandler, useForm } from "react-hook-form";
import InputField from "../common/input/input-field";

type TLoginInput = {
  email: string;
  password: string;
};

const LoginForm = () => {
  const { register, handleSubmit } = useForm<TLoginInput>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<TLoginInput> = (data) => {
    console.log("form submitted", data);
    //const data = new FormData();
    // data.append("email", formData.email);
    // data.append("password", formData.password);

    fetch("http://localhost:8080/v1/auth/login", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    });
    console.log("logged in");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-1.5 justify-center m-5">
        <InputField
          register={register}
          id="email"
          type="text"
          name="email"
          placeholder="Enter your Email"
        />
        <InputField
          register={register}
          id="password"
          type="password"
          name="password"
          placeholder="Enter your password"
        />
      </div>
      <div className="flex justify-center">
        <SubmitButton type="submit" buttonName="Login" />
      </div>
    </form>
  );
};

export default LoginForm;

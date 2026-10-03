"use client";

import SubmitButton from "../common/button/submit-button";
import { SubmitHandler, useForm } from "react-hook-form";
import InputField from "../common/input/input-field";
import { loginSchema } from "@/schema/auth.schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { TLoginInput } from "@/types/auth.types";
import { useMutation } from "@tanstack/react-query";
import { login } from "@/api/auth.api";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TLoginInput>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(loginSchema),
  });

  const { mutate } = useMutation({
    mutationFn: login,
    onSuccess: (response) => {
      console.log("on success", response);
    },
    onError: (error) => {
      console.log("on error", error);
    },
  });

  const onSubmit: SubmitHandler<TLoginInput> = (data) => {
    console.log("form submitted", data);
    //const data = new FormData();
    // data.append("email", formData.email);
    // data.append("password", formData.password);

    mutate(data);
    console.log("logged in");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col justify-center m-5">
        <InputField
          register={register}
          id="email"
          type="text"
          name="email"
          placeholder="Enter your Email"
          error={errors?.email?.message}
        />
        <InputField
          register={register}
          id="password"
          type="password"
          name="password"
          placeholder="Enter your password"
          error={errors?.password?.message}
        />
      </div>
      <div className="flex justify-center">
        <SubmitButton type="submit" buttonName="Login" />
      </div>
    </form>
  );
};

export default LoginForm;

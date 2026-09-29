"use client";
import { useState } from "react";
import InputField from "../common/input/input-field";
import LoginButton from "../common/button/login-button";

const LoginForm = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState({});

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const message: { email?: string; password?: string } = {};
    let formIsValid = true;

    if (formData.email.trim() === "") {
      message.email = "Email should not be empty.";
      formIsValid = false;
    }
    if (formData.password.trim() === "") {
      message.password = "Password should not be empty.";
      formIsValid = false;
    }
    setError(message);

    if (formIsValid) {
      const data = new FormData();
      data.append("email", formData.email);
      data.append("password", formData.password);

      fetch("http://localhost:8080/v1/auth/login", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      });
      console.log("logged in");
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="justify-center">
        <InputField
          label="email"
          id="email"
          name="email"
          type="text"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Enter email"
        />
        <InputField
          label="password"
          id="password"
          name="password"
          type="text"
          value={formData.password}
          onChange={handleInputChange}
          placeholder="Enter password"
        />
      </div>
      <div className="flex justify-center">
        <LoginButton type="submit" buttonName="Login" />
      </div>
    </form>
  );
};

export default LoginForm;

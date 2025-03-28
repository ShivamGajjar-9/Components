"use client";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import DynamicForm from "@/components/form/dynamicForm";
import formFields from "./forgotPasswordFormFields";

const Login = () => {
  const form = useForm({
    defaultValues: formFields.reduce((p, c) => ({...p, [c.name]: ""}), {}),
    mode: "all",
  });

  const onSubmit = (value) => {
    console.log(value);
  };

  return (
    <div className="h-screen flex flex-col sm:justify-center items-center">
      <DynamicForm form={form} onSubmit={onSubmit} formFields={formFields} id="login-form" />
      <Button className="w-full" type="submit" form="login-form">
        Sign in
      </Button>
    </div>
  );
};

export default Login;

"use client";
import DynamicForm from "@/components/form/dynamicForm";
import { Button } from "@/components/ui/button";

import FormFields from "./coponentsFormFields";
import { useForm } from "react-hook-form";

const ComponentsForm = () => {
  const form = useForm({
    defaultValues: FormFields.reduce((p, c) => ({ ...p, [c.name]: "" }), {}),
    mode: "all",
    gender: "",
    status: "",
  });
  const defaultValues = FormFields.reduce((p, c) => ({ ...p, [c.name]: "" }), {
    gender: "", // Default value for gender
    status: "", // Default value for status
  });

  // const ComponentsForm = () => {
  //   const form = useForm({
  //     defaultValues,
  //     mode: "all",
  //   });

  const onSubmit = (value) => {
    console.log(value);
    form.reset(defaultValues);
  };

  const onReset = () => {
    form.reset(defaultValues);
  };

  return (
    <div className="h-screen flex flex-col sm:justify-center items-center">
      <DynamicForm
        form={form}
        onSubmit={onSubmit}
        formFields={FormFields}
        id="login-form"
        className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
      />
      <Button className="min-w-[400px]" type="submit" form="login-form">
        Sign in
      </Button>
      <Button
        id="reset"
        className="min-w-[400px]"
        type="buttton"
        onClick={onReset}
        form="login-form"
      >
        FormClear
      </Button>
    </div>
  );
};

export default ComponentsForm;

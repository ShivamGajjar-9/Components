"use client";

import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import DynamicForm from "@/components/form/dynamicForm";
import FormFields from "./MortgageCalFormFields";

const MortgageCalculator = () => {
  const form = useForm({
    defaultValues: FormFields.reduce(
      (prev, curr) => ({ ...prev, [curr.name]: "" }),
      {}
    ),
    mode: "all",
  });

  const onSubmit = (values: any) => {
    console.log(values);
  };

  return (
    <div className="h-screen flex flex-col sm:justify-center items-center">
      <DynamicForm
        form={form}
        onSubmit={onSubmit}
        formFields={formFields}
        id="mortgage-calculator-form"
      />
      <Button
        className="min-w-[400px]"
        type="submit"
        form="mortgage-calculator-form"
      >
        Calculate Repayments
      </Button>
    </div>
  );
};

export default MortgageCalculator;

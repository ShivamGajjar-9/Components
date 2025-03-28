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

  const handleClear = () => {
    form.reset();
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#f0f4f8] p-6">
      <div className="bg-white rounded-xl shadow-xl grid grid-cols-1 md:grid-cols-2 w-full max-w-5xl overflow-hidden">
        {/* Left Section */}
        <div className="p-8 md:p-10">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">
            Mortgage Calculator
          </h2>
          <a
            href="#"
            className="text-sm text-blue-600 float-right"
            onClick={handleClear}
          >
            Clear All
          </a>

          <DynamicForm
            form={form}
            onSubmit={onSubmit}
            formFields={FormFields}
            id="mortgage-calculator-form"
          />

          <Button
            className="w-full mt-8 bg-[#d9dd2e] text-black font-semibold py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-[#c4c920] transition"
            type="submit"
            form="mortgage-calculator-form"
          >
            <div className="w-6 h-6">
              <img src="assets/images/icon-calculator.svg" alt="Calculator" />
            </div>
            Calculate Repayments
          </Button>
        </div>

        {/* Right Section */}
        <div className="bg-[#133040] text-white flex flex-col items-center justify-center p-8 md:p-10 rounded-[0px_0px_0px_75px] md:rounded-none">
          <img
            src="assets/images/illustration-empty.svg"
            alt="Illustration"
            className="w-40 h-40"
          />
          <h3 className="text-lg font-semibold text-white mt-4">
            Results shown here
          </h3>
          <p className="text-sm text-gray-300 text-center mt-2">
            Complete the form and click "Calculate Repayments" to see what your
            monthly repayments would be.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MortgageCalculator;

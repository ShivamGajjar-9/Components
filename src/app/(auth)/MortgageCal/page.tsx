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
    <div className="flex justify-center items-center min-h-screen bg-blue-50 p-4">
      <div className="bg-white rounded-2xl shadow-lg grid grid-cols-1 md:grid-cols-2 md:min-w-[500px] w-full max-w-4xl overflow-hidden">
        {/* Left Section */}
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-900">
            Mortgage Calculator
          </h2>
          <a href="#" className="text-sm text-blue-600 float-right">
            Clear All
          </a>

          <DynamicForm
            form={form}
            onSubmit={onSubmit}
            formFields={FormFields}
            id="mortgage-calculator-form"
          />

          <Button
            className="w-full mt-6 bg-[#d9dd2e] text-black font-semibold py-2 rounded-lg flex items-center justify-center gap-2"
            type="submit"
            form="mortgage-calculator-form"
          >
            <div className="w-8 h-8">
              <img src="assets/images/icon-calculator.svg" alt="Calculator" />
            </div>
            Calculate Repayments
          </Button>
        </div>

        {/* Right Section */}
        <div className="bg-[#133040] text-white flex flex-col items-center justify-center p-6 rounded-[0px_0px_0px_75px] md:rounded-none">
          <img src="assets/images/illustration-empty.svg" alt="Illustration" />
          <h3 className="text-lg font-semibold text-white mt-4">
            Results shown here
          </h3>
          <p className="text-sm text-gray-200 text-center mt-2">
            Complete the form and click "Calculate Repayments" to see your
            estimated monthly repayments.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MortgageCalculator;

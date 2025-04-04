"use client";
import DynamicForm from "@/components/form/dynamicForm";
import { Button } from "@/components/ui/button";
import { useForm, useWatch } from "react-hook-form";
import FormFields from "./tipCalculatorFormFields";
import Image from "next/image";
import { Space_Mono } from "next/font/google";
import { useEffect, useState } from "react";

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-space-mono",
});

const TipCalForm = () => {
  const form = useForm({
    defaultValues: {
      bill: "",
      tipPercent: "",
      people: "",
    },
    mode: "onChange",
  });

  const [results, setResults] = useState({
    tipAmount: 0,
    total: 0,
  });

  const { watch } = form;
  const formValues = watch();

  useEffect(() => {
    const bill = parseFloat(formValues.bill) || 0;
    const tipPercent = parseFloat(formValues.tipPercent) || 0;
    const people = parseInt(formValues.people) || 1;

    if (bill > 0 && people > 0) {
      const tip = (bill * tipPercent) / 100;
      const tipAmount = tip / people;
      const total = (bill + tip) / people;

      setResults({
        tipAmount: parseFloat(tipAmount.toFixed(2)),
        total: parseFloat(total.toFixed(2)),
      });

      console.log("--- FORM VALUES ---");
      console.log("Bill Amount:", bill);
      console.log("Tip Percentage:", tipPercent + "%");
      console.log("Number of People:", people);
      console.log("Calculated Tip Amount:", tipAmount.toFixed(2));
      console.log("Calculated Total:", total.toFixed(2));
      console.log("------------------");
    } else {
      console.log("--- FORM VALUES (INCOMPLETE) ---");
      console.log("Bill Amount:", bill);
      console.log("Tip Percentage:", tipPercent + "%");
      console.log("Number of People:", people);
      console.log("Waiting for valid inputs...");
      console.log("------------------");
    }
  }, [formValues.bill, formValues.tipPercent, formValues.people]);

  const handleReset = () => {
    form.reset({
      bill: "",
      tipPercent: "",
      people: "",
    });
    setResults({
      tipAmount: 0,
      total: 0,
    });
    console.log("--- FORM RESET ---");
  };

  return (
    <div
      className={`${spaceMono.className} text-lg min-h-screen w-full flex flex-col min-w-[400px] items-center justify-center bg-[#c5e4e7] px-6 py-8`}
    >
      <div className="w-full max-w-[120px] mb-12">
        <Image
          src="/logo.svg"
          alt="front card logo"
          width={84}
          height={47}
          className="w-full h-auto"
          priority
        />
      </div>

      <div className="w-full max-w-[920px] grid grid-cols-1 lg:grid-cols-2 gap-16 p-6 sm:p-8 bg-white rounded-t-[25px] sm:rounded-[25px] shadow-lg">
        <div className="flex flex-col w-full">
          <DynamicForm
            form={form}
            formFields={FormFields}
            id="tip-form"
            className="w-full"
          />
        </div>
        <div className="grid grid-cols-2 gap-y-6 bg-[#00474b] p-6 rounded-xl overflow-hidden scroll-auto text-white w-full min-h-[400px]">
          {/* Tip Amount */}
          <div className="flex flex-col">
            <span className="text-sm">Tip Amount</span>
            <span className="text-xs text-[#7f9d9f]">/ person</span>
          </div>
          <div className="text-5xl text-right overflow-x-auto   text-[#26c2ae] font-bold">
            ${results.tipAmount || "0.00"}
          </div>

          {/* Total */}
          <div className="flex flex-col">
            <span className="text-sm">Total</span>
            <span className="text-xs text-[#7f9d9f]">/ person</span>
          </div>
          <div className="text-5xl text-right overflow-x-auto  whitespace-nowrap text-[#26c2ae] font-bold">
            ${results.total || "0.00"}
          </div>

          <Button
            onClick={handleReset}
            className="col-span-2 mt-auto py-5 bg-[#9fe8df] hover:bg-[#26c2ae] text-[#00474b] font-bold rounded-md transition-colors"
          >
            RESET
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TipCalForm;

"use client";
import { useState, useEffect } from 'react';
import Image from "next/image";
import { Space_Grotesk } from "next/font/google";
import { useForm } from "react-hook-form";
import DynamicForm from "@/components/form/dynamicForm";

import { Button } from "@/components/ui/button";
import FormFields from "./CardDetailsFormFields";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export default function CardForm() {
  const [cardDetails, setCardDetails] = useState({
    name: "Shivam Gajjar",
    number: "1111 1111 1111 1111",
    expiryDate: "12/25",
    cvc: "010",
  });

  const form = useForm({
    defaultValues: FormFields.reduce((p, c) => ({ ...p, [c.name]: "" }), {}),
    mode: "all",
  });

  const onSubmit = (values) => {
    setCardDetails(values);
    console.log(values);
    form.reset();
  };

  return (
    <main
      className={`${spaceGrotesk.className} text-[#21092f] text-lg font-medium leading-relaxed`}
    >
      <div
        className="grid grid-cols-1 p-8 bg-[url('/card/images/bg-main-mobile.png')] bg-no-repeat bg-[length:100%_245px] min-h-screen max-w-[1440px] 
      sm:bg-[url('/card/images/bg-main-desktop.png')] sm:bg-[length:100%_40%] 
      lg:grid-cols-[auto_1fr] 
      lg:mr-auto
      lg:w-full md:bg-[hight:33.5%_100%]
      lg:items-center lg:gap-8 lg:bg-[length:33.5%_100%] lg:pr-8 xl:gap-24"
      >
        {/* Card front */}
        <aside className="text-white flex flex-col justify-center items-center uppercase">
          <div
            className="relative flex flex-col z-1 justify-between 
          lg:top-0 lg:bottom-[5rem]
          lg:left-[7rem]
           w-[290px] h-[160px] mb-7 
          md:top-[9rem]  md:w-[448px] md:h-[245px] md:p-7 
          bg-[url('/card/images/bg-card-front.png')] bg-cover p-4 rounded-lg shadow-lg 
          sm:top-[6rem] sm:right-[1rem]
          
           sm:p-4 "
          >
            <Image
  src="/card/images/card-logo.svg"
  alt="front card logo"
  width={84}  // Required for next/image
  height={47}
  className="w-20 md:w-18 lg:w-24 h-auto  sm:w-14 xs:w-12"
/>
            <h2 className="text-base tracking-widest md:text-[1.75rem]">
              {cardDetails.number}
            </h2>
            <div className="flex justify-between items-center text-[1rem] mt-2 md:text-[1.25rem]">
              <h3 className="max-w-[80%] break-words">{cardDetails.name}</h3>
              <p>
                {cardDetails.expiryDate}
              </p>
            </div>
          </div>

          {/* Card back */}
          <div
            className="relative  w-[290px] h-[160px] bg-[url('/card/images/bg-card-back.png')]
          
          lg:top-0
          lg:bottom-0 lg:left-[12rem] lg:right-0
           md:bottom-[17rem] md:left-[6rem] bg-cover  md:w-[448px] md:h-[245px]
          flex items-center justify-end p-10 text-base rounded-lg shadow-lg 
           sm:p-16 sm:-right-[6rem] sm:bottom-[10rem]
           "
          >
            <p>{cardDetails.cvc}</p>
          </div>
        </aside>

        {/* Form Section */}
        <section className="w-full lg:ml-60 md:mt-0 sm sm:max-w-[448px] sm:mx-auto">
          <DynamicForm
            form={form}
            onSubmit={onSubmit}
            formFields={FormFields}
            id="card-details-form"
            className="grid-cols-4 md:grid-cols-2"
          />
          <Button
            className="w-full mt-4"
            type="submit"
            form="card-details-form"
          >
            Confirm
          </Button>
        </section>
      </div>
    </main>
  );
}

"use client";

import { useState } from "react";
import Image from "next/image";
import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export default function CardForm() {
  const [cardDetails, setCardDetails] = useState({
    name: "",
    number: "",
    month: "",
    year: "",
    cvc: "",
  });

  // Function to handle input changes
  const handleChange = (e) => {
    setCardDetails({ ...cardDetails, [e.target.name]: e.target.value });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Card Details Submitted:", cardDetails);
  };

  return (
    <main
      className={`${spaceGrotesk.className} text-[#21092f] text-lg font-medium leading-relaxed`}
    >
      <div className="grid grid-cols-1 p-8 bg-[url('/card/images/bg-main-mobile.png')] bg-no-repeat bg-[length:100%_245px] min-h-screen max-w-[1440px] sm:bg-[url('/card/images/bg-main-desktop.png')] sm:bg-[length:100%_350px] lg:grid-cols-[auto_1fr] lg:items-center lg:gap-8 lg:bg-[length:33.5%_100%] lg:pr-8 xl:gap-24">
        {/* Card Images */}
        <aside className="text-white flex flex-col justify-center items-center uppercase">
          {/* Front Card */}
          <div className="relative -top-[4.3rem] w-[290px] h-[160px] mb-7 bg-[url('/card/images/bg-card-front.png')] bg-cover p-4 z-20 flex-shrink-0 rounded-lg shadow-[0.5rem_2rem_8rem_-1rem_rgba(0,0,0,0.25)] transition-all duration-300 order-2 sm:h-[245px] sm:w-[448px] sm:p-8 sm:-top-[6.6rem] sm:-left-8 lg:order-1 lg:top-auto lg:left-auto lg:ml-20">
            <figure className="logo">
              <Image
                src="/card/images/card-logo.svg"
                alt="front card logo"
                width={84}
                height={47}
              />
            </figure>
            <section className="mt-2 sm:mt-16">
              <h2 className="font-light text-base tracking-widest sm:text-[1.75rem]">
                {cardDetails.number || "0000 0000 0000 0000"}
              </h2>
              <div className="flex justify-between items-center font-light text-[0.9375rem] mt-2 sm:text-[1.25rem]">
                <h3 className="max-w-[80%] break-words">
                  {cardDetails.name || "Jane Appleseed"}
                </h3>
                <p>
                  <span>{cardDetails.month || "00"}</span>/
                  <span>{cardDetails.year || "00"}</span>
                </p>
              </div>
            </section>
          </div>

          {/* Back Card */}
          <div className="relative order-1 w-[290px] h-[160px] bg-[url('/card/images/bg-card-back.png')] bg-cover flex items-center justify-end self-end flex-shrink-0 p-10 text-base z-10 rounded-lg shadow-[0.5rem_2rem_8rem_-1rem_rgba(0,0,0,0.25)] tracking-wider transition-all duration-300 sm:w-[448px] sm:h-[245px] sm:p-16 sm:self-center sm:-right-16 sm:order-1 lg:order-2 lg:right-auto lg:ml-40 xl:-right-16">
            <p>{cardDetails.cvc || "000"}</p>
          </div>
        </aside>

        {/* Form */}
        <section className="w-full sm:max-w-[448px] sm:mx-auto">
          <form className="flex items-center flex-col gap-4" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-[0.35rem] w-full">
              <label className="text-xs font-bold tracking-widest uppercase block">
                Cardholder Name
              </label>
              <input
                type="text"
                name="name"
                maxLength={20}
                placeholder="e.g. Jane Appleseed"
                value={cardDetails.name}
                onChange={handleChange}
                className="block px-4 py-1 text-[1.1rem] border border-[#dedddf] rounded-lg w-full focus:outline-[#8e8593]"
              />
            </div>

            <div className="flex flex-col gap-[0.35rem] w-full">
              <label className="text-xs font-bold tracking-widest uppercase block">
                Card Number
              </label>
              <input
                type="text"
                name="number"
                maxLength={16}
                placeholder="e.g. 1234 5678 9123 0000"
                value={cardDetails.number}
                onChange={handleChange}
                className="block px-4 py-1 text-[1.1rem] border border-[#dedddf] rounded-lg w-full focus:outline-[#8e8593]"
              />
            </div>

            <div className="grid grid-cols-2 gap-4 ">
              <div className="flex flex-col flex-1 gap-[0.35rem] w-full">
                <label className="text-xs font-bold tracking-widest uppercase block">
                  Exp. Date (MM/YY)
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    name="month"
                    placeholder="MM"
                    maxLength={2}
                    value={cardDetails.month}
                    onChange={handleChange}
                    className="block px-4 py-1 text-[1.1rem] border border-[#dedddf] rounded-lg w-full focus:outline-[#8e8593]"
                  />
                  <input
                    type="text"
                    name="year"
                    placeholder="YY"
                    maxLength={2}
                    value={cardDetails.year}
                    onChange={handleChange}
                    className="block px-4 py-1 text-[1.1rem] border border-[#dedddf] rounded-lg w-full focus:outline-[#8e8593]"
                  />
                </div>
              </div>

              <div className="gap-[0.35rem] grid grid-cols-1  h-3 w-full">
                <div className="flex flex-col gap-[0.35rem] w-full">
                
                  <label className="text-xs font-bold tracking-widest uppercase block">
                    CVC
                  </label>
                  <input
                    type="text"
                    name="cvc"
                    placeholder="e.g. 123"
                    maxLength={3}
                    value={cardDetails.cvc}
                    onChange={handleChange}
                    className="block px-4 py-1 text-[1.1rem] border border-[#dedddf] rounded-lg w-full focus:outline-[#8e8593]"
                  />
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="mt-8 p-4 w-full bg-[#21092f] text-white text-lg font-bold rounded-lg cursor-pointer transition-colors duration-300 hover:bg-[#8e8593]"
            >
              Confirm
            </button>
          </form>
        </section>
      </div>
    </main>
  );
}

"use client";

import { useState } from "react";
import Image from "next/image";
import { Space_Grotesk } from 'next/font/google';

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], weight: ['300', '400', '500', '700'] });

export default function CardForm() {
  // Non-functional state just to maintain component structure
  const [cardDetails, setCardDetails] = useState({
    name: "Jane Appleseed",
    number: "0000 0000 0000 0000",
    month: "00",
    year: "00",
    cvc: "000",
  });

  return (
    <main className={`${spaceGrotesk.className} text-[#21092f] text-lg font-medium leading-relaxed`}>
      <div className="grid grid-cols-1 p-8 bg-[url('/card/images/bg-main-mobile.png')] bg-no-repeat bg-[length:100%_245px] min-h-screen max-w-[1440px] sm:bg-[url('/card/images/bg-main-desktop.png')] sm:bg-[length:100%_350px] lg:grid-cols-[auto_1fr] lg:items-center lg:gap-8 lg:bg-[length:33.5%_100%] lg:pr-8 xl:gap-24">
        {/* Card Images */}
        <aside className="text-white flex flex-col justify-center items-center uppercase">
          {/* Front Card */}
          <div
            className="relative -top-[4.3rem] w-[290px] h-[160px] mb-7 bg-[url('/card/images/bg-card-front.png')] bg-cover p-4 z-20 flex-shrink-0 rounded-lg shadow-[0.5rem_2rem_8rem_-1rem_rgba(0,0,0,0.25)] transition-all duration-300 order-2 
            sm:h-[245px] sm:w-[448px] sm:p-8 sm:-top-[6.6rem] sm:-left-8
            lg:order-1 lg:top-auto lg:left-auto lg:ml-20 "
          >
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
                {cardDetails.number}
              </h2>
              <div className="flex justify-between items-center font-light text-[0.9375rem] mt-2 sm:text-[1.25rem]">
                <h3 className="max-w-[80%] break-words">{cardDetails.name}</h3>
                <p>
                  <span>{cardDetails.month}</span>/
                  <span>{cardDetails.year}</span>
                </p>
              </div>
            </section>
          </div>

          {/* Back Card */}
          <div
            className="relative order-1 w-[290px] h-[160px] bg-[url('/card/images/bg-card-back.png')] bg-cover flex items-center justify-end self-end flex-shrink-0 p-10 text-base z-10 rounded-lg shadow-[0.5rem_2rem_8rem_-1rem_rgba(0,0,0,0.25)] tracking-wider transition-all duration-300
            sm:w-[448px] sm:h-[245px] sm:p-16 sm:self-center sm:-right-16 sm:order-1
            lg:order-2 lg:right-auto lg:ml-40 xl:-right-16"
          >
            <p>{cardDetails.cvc}</p>
          </div>
        </aside>

        {/* Form */}
        <section className="w-full sm:max-w-[448px] sm:mx-auto">
          <form className="flex items-center flex-col gap-4">
            <div className="flex flex-col gap-[0.35rem] w-full">
              <label
                htmlFor="card__name"
                className="text-xs font-bold tracking-widest uppercase block"
              >
                Cardholder Name
              </label>
              <input
                type="text"
                id="card__name"
                name="card__name"
                maxLength={20}
                placeholder="e.g. Jane Appleseed"
                className="block px-4 py-1 text-[1.1rem] tracking-[0.015rem] border border-[#dedddf] rounded-lg w-full focus:outline focus:outline-1 focus:outline-[#8e8593] placeholder:text-[1.1rem] placeholder:tracking-[0.016rem] placeholder:text-[#8e8593] placeholder:opacity-40"
              />
              <span className="text-[#ff5252] text-xs font-bold"></span>
            </div>

            <div className="flex flex-col gap-[0.35rem] w-full">
              <label
                htmlFor="card__number"
                className="text-xs font-bold tracking-widest uppercase block"
              >
                Card Number
              </label>
              <input
                type="text"
                id="card__number"
                name="card__number"
                maxLength={16}
                placeholder="e.g. 1234 5678 9123 0000"
                className="block px-4 py-1 text-[1.1rem] tracking-[0.015rem] border border-[#dedddf] rounded-lg w-full focus:outline focus:outline-1 focus:outline-[#8e8593] placeholder:text-[1.1rem] placeholder:tracking-[0.016rem] placeholder:text-[#8e8593] placeholder:opacity-40"
              />
              <span className="text-[#ff5252] text-xs font-bold"></span>
            </div>

            <div className="grid grid-cols-[auto_1fr] gap-4 w-full">
              <div className="flex flex-col gap-[0.35rem] w-full">
                <label
                  htmlFor="card__exp"
                  className="text-xs font-bold tracking-widest uppercase block"
                >
                  Exp. Date (MM/YY)
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    id="card__exp"
                    name="card__month"
                    placeholder="MM"
                    maxLength={2}
                    className="block px-4 py-1 text-[1.1rem] tracking-[0.015rem] border border-[#dedddf] rounded-lg max-w-[80px] w-full focus:outline focus:outline-1 focus:outline-[#8e8593] placeholder:text-[1.1rem] placeholder:tracking-[0.016rem] placeholder:text-[#8e8593] placeholder:opacity-40"
                  />
                  <input
                    type="text"
                    id="card__year"
                    name="card__year"
                    placeholder="YY"
                    maxLength={2}
                    className="block px-4 py-1 text-[1.1rem] tracking-[0.015rem] border border-[#dedddf] rounded-lg max-w-[80px] w-full focus:outline focus:outline-1 focus:outline-[#8e8593] placeholder:text-[1.1rem] placeholder:tracking-[0.016rem] placeholder:text-[#8e8593] placeholder:opacity-40"
                  />
                </div>
                <span className="text-[#ff5252] text-xs font-bold"></span>
              </div>

              <div className="flex flex-col gap-[0.35rem] w-full">
                <label
                  htmlFor="card__cvc"
                  className="text-xs font-bold tracking-widest uppercase block"
                >
                  CVC
                </label>
                <input
                  type="text"
                  id="card__cvc"
                  name="card__cvc"
                  placeholder="e.g. 123"
                  maxLength={3}
                  className="block px-4 py-1 text-[1.1rem] tracking-[0.015rem] border border-[#dedddf] rounded-lg w-full focus:outline focus:outline-1 focus:outline-[#8e8593] placeholder:text-[1.1rem] placeholder:tracking-[0.016rem] placeholder:text-[#8e8593] placeholder:opacity-40"
                />
                <span className="text-[#ff5252] text-xs font-bold"></span>
              </div>
            </div>

            <button
              type="submit"
              className="mt-8 p-4 w-full bg-[#21092f] text-white text-lg font-bold border-none rounded-lg cursor-pointer transition-colors duration-300 hover:bg-[#8e8593]"
            >
              Confirm
            </button>
          </form>

          {/* Completed state start */}
          <section className="hidden text-center">
            <div>
              <Image
                src="/card/images/icon-complete.svg"
                alt="checkmark"
                width={80}
                height={80}
                className="mb-4"
              />
              <h2 className="text-2xl font-bold mb-4 uppercase tracking-widest">
                Thank you!
              </h2>
              <p className="text-lg font-medium text-[#8e8593]">
                We&apos;ve added your card details
              </p>
              <button
                id="continue"
                className="mt-8 p-4 w-full bg-[#21092f] text-white text-lg font-bold border-none rounded-lg cursor-pointer transition-colors duration-300 hover:bg-[#8e8593]"
              >
                Continue
              </button>
            </div>
          </section>
        </section>
      </div>
    </main>
  );
}

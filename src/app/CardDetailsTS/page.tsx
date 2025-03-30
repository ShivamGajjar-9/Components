"use client";
import { useState } from "react";

export default function Page() {
  const [cardNumber, setCardNumber] = useState("0000 0000 0000 0000");
  const [cardName, setCardName] = useState("Jane Appleseed");
  const [cardMonth, setCardMonth] = useState("00");
  const [cardYear, setCardYear] = useState("00");
  const [cardCVC, setCardCVC] = useState("000");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <main className="flex h-screen">
      {/* Left Section (Background & Card Display) */}
      <div
        style={{ backgroundImage: "url(/card/images/bg-main-desktop.png)" }}
        className="flex-1 flex justify-center items-center relative"
      >
        <div className="relative w-[300px] h-[250px]">
          
          {/* Front Card */}
          <div
            className="absolute bottom-50 left-5 bg-cover p-4 w-110 h-60 rounded-lg shadow-lg flex flex-col justify-between z-20"
            style={{ backgroundImage: "url(/card/images/bg-card-front.png)" }}
          >
            <img
              src="/card/images/card-logo.svg"
              alt="Card Logo"
              className="p-2 w-22"
            />
            <div>
              <h2 className="text-lg tracking-widest">{cardNumber}</h2>
              <div className="flex justify-between text-sm">
                <span>{cardName}</span>
                <span>
                  {cardMonth}/{cardYear}
                </span>
              </div>
            </div>
          </div>
          {/* Back Card */}
          <div
            className="absolute top-36 left-30 bg-cover p-4 w-110 h-60 rounded-lg shadow-lg flex justify-end items-center text-lg z-10"
            style={{ backgroundImage: "url(/card/images/bg-card-back.png)" }}
          >
            <span>{cardCVC}</span>
          </div>
        </div>
      </div>

      {/* Right Section (Form) */}
      <div className="flex-2 flex justify-center items-center">
        {!isSubmitted ? (
          <form className="space-y-4 w-96" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-bold">Cardholder Name</label>
              <input
                type="text"
                placeholder="e.g. Jane Appleseed"
                className="w-full p-2 border rounded"
                onChange={(e) => setCardName(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-bold">Card Number</label>
              <input
                type="text"
                placeholder="e.g. 1234 5678 9123 0000"
                className="w-full p-2 border rounded"
                maxLength={19}
                onChange={(e) => setCardNumber(e.target.value)}
              />
            </div>
            <div className="flex space-x-4">
              <div>
                <label className="block text-sm font-bold">Exp. Date (MM/YY)</label>
                <div className="flex space-x-2">
                  <input
                    type="text"
                    placeholder="MM"
                    className="w-12 p-2 border rounded"
                    maxLength={2}
                    onChange={(e) => setCardMonth(e.target.value)}
                  />
                  <input
                    type="text"
                    placeholder="YY"
                    className="w-12 p-2 border rounded"
                    maxLength={2}
                    onChange={(e) => setCardYear(e.target.value)}
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold">CVC</label>
                <input
                  type="text"
                  placeholder="e.g. 123"
                  className="w-full p-2 border rounded"
                  maxLength={3}
                  onChange={(e) => setCardCVC(e.target.value)}
                />
              </div>
            </div>
            <button type="submit" className="w-full bg-black text-white py-2 rounded">
              Confirm
            </button>
          </form>
        ) : (
          <section className="text-center">
            <img
              src="/card/images/icon-complete.svg"
              alt="Checkmark"
              className="mx-auto mb-4"
            />
            <h2 className="text-xl font-bold uppercase">Thank You!</h2>
            <p className="text-gray-500">We've added your card details</p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="w-full bg-black text-white py-2 rounded mt-4"
            >
              Continue
            </button>
          </section>
        )}
      </div>
    </main>
  );
}

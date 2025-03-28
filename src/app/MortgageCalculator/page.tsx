import React from "react";

const Page = () => {
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

          <div className="mt-4">
            <label className="text-sm font-medium text-gray-700">
              Mortgage Amount
            </label>
            <div className="flex items-center border rounded-lg p-2 mt-1">
              <div className="text-gray-900 bg-[#e3f4fc] px-2">£</div>
              <input
                type="number"
                className="w-full outline-none pl-2 text-gray-900"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div>
              <label className="text-sm font-medium text-gray-700">
                Mortgage Term
              </label>
              <div className="flex items-center border rounded-lg p-2 mt-1">
                <input
                  type="number"
                  className="w-full outline-none text-gray-900"
                />
                <div className="text-gray-900 bg-[#e3f4fc] px-2">years</div>
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">
                Interest Rate
              </label>
              <div className="flex items-center border rounded-lg p-2 mt-1">
                <input
                  type="number"
                  className="w-full outline-none text-gray-900"
                />
                <div className="text-gray-900 bg-[#e3f4fc] px-2">%</div>
              </div>
            </div>
          </div>

          <div className="mt-4">
            <label className="text-sm font-medium text-gray-700">
              Mortgage Type
            </label>
            <div className="flex flex-col gap-2 mt-2">
              <label className="flex items-center gap-2 border rounded-lg p-2 cursor-pointer text-gray-900">
                <input type="radio" name="mortgageType" /> Repayment
              </label>
              <label className="flex items-center gap-2 border rounded-lg p-2 cursor-pointer text-gray-900">
                <input type="radio" name="mortgageType" /> Interest Only
              </label>
            </div>
          </div>

          <button className="w-full mt-6 bg-[#d9dd2e] text-black font-semibold py-2 rounded-lg flex items-center justify-center gap-2">
            <div className="w-8 h-8">
              <img src="assets/images/icon-calculator.svg" alt="Calculator" />
            </div>
            Calculate Repayments
          </button>
        </div>

        {/* Right Section */}
        <div className="bg-[#133040] text-white flex flex-col items-center justify-center p-6 rounded-[0px_0px_0px_75px] md:rounded-none">
          <img src="assets/images/illustration-empty.svg" alt="Illustration" />
          <h3 className="text-lg font-semibold text-white mt-4">
            Results shown here
          </h3>
          <p className="text-sm text-gray-200 text-center mt-2">
            Complete the form and click "calculate repayments" to see what your
            monthly repayments would be.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;

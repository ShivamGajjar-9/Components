"use client";

import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export default function Home() {
  const [pageviews, setPageviews] = useState(100);
  const [isYearly, setIsYearly] = useState(false);

  const calculatePrice = (views: number) => {
    const monthlyPrice = (views / 6.25).toFixed(2);
    console.log('Calculated price:', monthlyPrice);
    return isYearly ? ( monthlyPrice * 0.75).toFixed(2) : monthlyPrice;
  };

  const formatPageviews = (views: number) => {
    console.log('Formatted views:', views);
    return views >= 1000 ? `${views / 1000}M` : `${views}K`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-indigo-900 mb-3">
            Simple, traffic-based pricing
          </h1>
          <p className="text-gray-600">
            Sign-up for our 30-day trial. No credit card required.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="space-y-8">
            <div className="text-center">
              <p className="text-lg font-medium text-gray-600 mb-6">
                {formatPageviews(pageviews)} PAGEVIEWS
                <span className="ml-40 font-bolder text-5xl">${calculatePrice(pageviews)}</span>
                <span className="text-gray-500 text-lg font-normal font-family-heebo">/ month</span>
              </p>
              <div className="w-full max-w-md mx-auto mb-6">
                <Slider
                  value={[pageviews]}
                  onValueChange={(value) => setPageviews(value[0])}
                  max={200}
                  min={10}
                  step={10}
                  className="py-4"
                />
              </div>

            </div>

            <div className="flex items-center justify-center space-x-4">
              <span className="text-gray-600">Monthly Billing</span>
              <Switch
                checked={isYearly}
                onCheckedChange={setIsYearly}
              />
              <div className="flex items-center space-x-2">
                <span className="text-gray-600">Yearly Billing</span>
                <span className="text-sm font-medium text-orange-400 bg-orange-100 px-2 py-1 rounded-full">
                  25% discount
                </span>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  {[
                    "Unlimited websites",
                    "100% data ownership",
                    "Email reports"
                  ].map((feature) => (
                    <div key={feature} className="flex items-center space-x-2">
                      <Check className="h-5 w-5 text-green-500" />
                      <span className="text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-center md:justify-end">
                  <Button className="bg-indigo-900 hover:bg-indigo-800 text-white px-8 py-6 rounded-3xl mr-10 w-80 ml-8">
                    Start my trial
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

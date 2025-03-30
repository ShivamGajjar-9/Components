import React from "react";
import { Button } from "@/components/ui/button";
import { FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useController, useFormContext } from "react-hook-form";

interface MultipleButtonProps {
  options: { label: string; value: string | number }[];
  label?: string;
  name: string;
  control: any;
}
// Removed misplaced useController call

const MultipleButton: React.FC<MultipleButtonProps> = ({
  options,
  label,
  name,
  control,
}) => {
  const {
    field: { onChange, value },
  } = useController({
    name,
    control,
    defaultValue: "",
  });

  const [customValue, setCustomValue] = React.useState("");

  const handleSelect = (selectedValue: string | number) => {
    if (selectedValue === "custom") {
      // If switching to custom, keep the current custom value if it exists
      onChange(customValue || "");
    } else {
      // For preset values, update the form value and clear custom input
      onChange(selectedValue);
      setCustomValue("");
    }
  };

  const handleCustomInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    // Allow only numbers and empty string
    if (inputValue === "" || /^\d*\.?\d*$/.test(inputValue)) {
      setCustomValue(inputValue);
      onChange(inputValue); // Update form value directly
    }
  };

  // Determine if custom input should be shown
  const showCustomInput =
    value === "custom" ||
    (typeof value === "string" &&
      !options.some((opt) => opt.value.toString() === value));

  return (
    <div>
      <FormLabel className="text-[#00474b] font-bold pb-3">{label}</FormLabel>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full">
        {options.map((option) =>
          option.value === "custom" && showCustomInput ? (
            <Input
              key={option.value}
              type="text"
              value={customValue}
              onChange={handleCustomInput}
              placeholder="Custom"
              className={`
                w-full h-14 rounded-[5px] 
                font-bold 
                text-4xl 
                text-right 
                placeholder:text-center 
                placeholder:text-2xl  
                placeholder:mt-3 
                bg-[#f3f9fa] 
                text-[#00474b] 
                placeholder:text-[#547878] 
                focus:outline-none 
                ring-2 ring-[#26c2ae]
                transition-all
              `}
              inputMode="numeric"
            />
          ) : option.value !== "custom" ? (
            <Button
              key={option.value}
              className={`w-full h-14 rounded-[5px] font-bold text-2xl text-white transition-colors ${
                value === option.value.toString()
                  ? "bg-[#26c2ae] hover:bg-[#26c2ae]/90"
                  : "bg-[#00474b] hover:bg-[#00474b]/90"
              }`}
              type="button"
              onClick={() => handleSelect(option.value)}
            >
              {option.label}
            </Button>
          ) : null
        )}
      </div>
    </div>
  );
};

export default MultipleButton;

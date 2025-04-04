import React from "react";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";

type Props = {
  control: any;
  name: string;
  rules?: any;
  label: string;
  className?: string;
  type?: string;
  placeholder?: string;
};

const FormInput = ({
  control,
  name,
  rules,
  label,
  className,
  type = "text",
  placeholder,
  ...props
}: Props) => {
  return (
    <FormField
      control={control}
      name={name}
      rules={rules}
      render={({ field }) => (
        <FormItem className={cn("space-y-2", className)}>
          <FormLabel className="text-[#7e88c3] font-medium">{label}</FormLabel>
          <FormControl>
            <Input
              {...field}
              {...props}
              type={type}
              placeholder={placeholder}
              className={cn(
                "h-12 bg-[#1e2139] border-[#252945] text-white placeholder:text-[#888eb0]/50",
                "focus:border-[#7c5dfa] focus:ring-0 hover:border-[#7c5dfa]",
                "transition-colors"
              )}
            />
          </FormControl>
          <FormMessage className="text-red-500" />
        </FormItem>
      )}
    />
  );
};

export default FormInput;

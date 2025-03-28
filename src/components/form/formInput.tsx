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
  prefix?: string;
  suffix?: string;
};

const FormInput = ({
  control,
  name,
  rules,
  label,
  className,
  prefix,
  suffix,
  ...props
}: Props) => {
  return (
    <FormField
      control={control}
      name={name}
      rules={rules}
      render={({ field }) => (
        <FormItem className={cn("relative", className)}>
          <FormLabel>{label}</FormLabel>
          <div className="relative">
            {prefix && (
              <span className="absolute inset-y-0  flex items-center text-gray-600 bg-blue-100 rounded-1 overflow-hidden rounded-md p-2">
                {prefix}
              </span>
            )}
            <FormControl>
              <Input
                {...field}
                {...props}
                className={cn({
                  "pl-14": prefix,
                  "pr-14": suffix,
                })}
              />
            </FormControl>
            {suffix && (
              <span className="absolute inset-y-0 right-0 flex items-center text-gray-600 bg-blue-100 overflow-hidden rounded-md p-2">
                {suffix}
              </span>
            )}
          </div>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default FormInput;

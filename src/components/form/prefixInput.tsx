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
};

const FormInput = ({
  control,
  name,
  rules,
  label,
  className,
  prefix,
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
              <span className="absolute inset-y-0 left-3 flex items-center text-gray-600 bg-blue-100 px-2 rounded-md">
                {prefix}
              </span>
            )}
            <FormControl>
              <Input
                {...field}
                {...props}
                className={cn("pl-10", { "pl-14": prefix })} // Adjust padding if prefix exists
              />
            </FormControl>
          </div>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default FormInput;

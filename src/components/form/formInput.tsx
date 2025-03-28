import React from "react";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";

type Props = {};

const FormInput = ({ control, name, rules, label, className, ...props }: Props) => {
  return (
    <FormField
      control={control}
      name={name}
      rules={rules}
      render={({ field }) => (
        <FormItem className={cn("*:not-first:mt-2", className)}>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input  {...field} {...props} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default FormInput;

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
import Image from "next/image";

type Props = {
  control: any;
  name: string;
  rules?: any;
  label: string;
  className?: string;
  prefix?: string | React.ReactNode;
  iconPath?: string;
};

const prefixInput = ({
  control,
  name,
  rules,
  label,
  className,
  prefix,
  iconPath,
  ...props
}: Props) => {
  return (
    <FormField
      control={control}
      name={name}
      rules={rules}
      render={({ field }) => (
        <FormItem className={cn("w-full space-y-2", className)}>
          <FormLabel className="text-[#00474b] font-bold">{label}</FormLabel>
          <div className="relative w-full">
            {(prefix || iconPath) && (
              <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-[#00474b] font-bold text-2xl">
                {iconPath ? (
                  <Image
                    src={iconPath}
                    alt=""
                    width={13}
                    height={16}
                    className="inline-block"
                  />
                ) : (
                  prefix
                )}
              </span>
            )}
            <FormControl>
              <Input
                {...field}
                {...props}
                className={cn(
                  "h-14 bg-[#f3f9fa] border-none text-right text-[#00474b] text-2xl font-bold focus-visible:ring-[#26c1ad] rounded-md",
                  {
                    "pl-12": prefix || iconPath,
                    "pl-4": !prefix && !iconPath,
                  }
                )}
                placeholder="0"
              />
            </FormControl>
          </div>
          <FormMessage className="text-red-500" />
        </FormItem>
      )}
    />
  );
};

export default prefixInput;

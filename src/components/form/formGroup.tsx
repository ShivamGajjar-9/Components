import { cn } from "@/lib/utils";
import React from "react";

type Props = {};

const FormGroup = ({ legend, fieldArray, control, name, className, hideMessage }: Props) => {
  return (
    <fieldset className="col-span-full">
      <legend className="text-blue-500 font-bold">{legend}</legend>
      <div className={cn("grid gap-4", className)}>
        {fieldArray.map(({ component: Component, name: itemName, ...item }) => {
          return (
            <Component
              key={item.name}
              name={`${name}.${itemName}`}
              control={control}
              hideMessage={hideMessage}
              {...item}
            />
          );
        })}
      </div>
    </fieldset>
  );
};

export default FormGroup;

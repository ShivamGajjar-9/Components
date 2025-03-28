import React from "react";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "../ui/form";

import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";

type Props = {};

const FormCheckbox = ({
  control,
  name,
  rules,
  label,
  className,
  ...props
}: Props) => {
  return (
    <>
      <FormField
        control={control}
        name={name}
        rules={rules}
        render={({ field }) => (
          <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 shadow">
            <FormControl>
              <Checkbox
                checked={field.value}
                onCheckedChange={field.onChange}
              />
            </FormControl>
            <div className="space-y-1 leading-none">
              <FormLabel>Terms</FormLabel>
              <FormDescription>Do you accept this conditions</FormDescription>
            </div>
          </FormItem>
        )}
      />
    </>
  );
};

export default FormCheckbox;

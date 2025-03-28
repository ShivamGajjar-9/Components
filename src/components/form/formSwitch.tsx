import React from 'react'
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { Switch } from '../ui/switch'

type Props = {}

const FormSwitch = ({ control, name, rules, label }: Props) => {
  return (
    <div>
      {/* <h3 className="mb-4 text-lg font-medium">Email Notifications</h3> */}
      <div className="space-y-4"></div>
      <FormField
        control={control}
        name={name}
        rules={rules}
        render={({ field }) => (
          <FormItem className="flex flex-row items-center h-10 justify-between rounded-lg border shadow-sm">
            <div className="space-y-0.5 ">
              <FormLabel>{label}</FormLabel>
            </div>
            <FormControl>
              <Switch
                checked={field.value}
                onCheckedChange={field.onChange}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
          
        )}
      /> 
    </div>
  )
}

export default FormSwitch
import FormCheckbox from "@/components/form/formCheckbox";
import FormCombo from "@/components/form/formCombo";
import { DatePickerForm } from "@/components/form/formDatePicker";
import formFieldArray from "@/components/form/formFieldArray";
import FormInput from "@/components/form/formInput";
import { formOtp } from "@/components/form/formOtp";
import FormRadioGroup from "@/components/form/formRadioGroup";
import FormSelect from "@/components/form/formSelect";
import FormSwitch from "@/components/form/formSwitch";


const FormFields = [
  {
    component: FormInput,
    name: "name",
    label: "Name",
    placeholder: "Enter your name",
    rules: {
      required: {
        value: true,
        message: "Name is mendetory",
      },
    },
    className: "col-span-2 "
  },
  {
    component: FormInput,
    name: "email",
    label: "Email Address",
    placeholder: "Enter your Email Address",
    rules: {
      required: {
        value: true,
        message: "Email is mendetory",
      },
      pattern: {
        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        message: "Please enter valid email address",
      },
    },
  },
  {
    component: FormInput,
    name: "password",
    label: "Password",
    placeholder: "Enter strong password",
    type: "password",
    rules: {
      required: {
        value: true,
        message: "Password is mendetory",
      },
    },
  },
  {
    component: FormSelect,
    name: "Gender",
    label: "Gender",
    placeholder: "Please Select your Gender",
    options: [
      {
        value: "male",
        text: "Male"
      },
      {
        value: "female",
        text: "Female"
      }
    ],
    rules: {
      required: {
        value: true,
        message: "Gender is mendetory",
      },
    },
    className: "col-span-full"
  },
  {
    component: FormRadioGroup,
    name: "status",
    label: "Status",
    options: [
      {
        value: "married",
        text: "Married"
      },
      {
        value: "unmarried",
        text: "Unmarried"
      }
    ],
    rules: {
      required: {
        value: true,
        message: "Status is mendetory",
      },
    },
    className: "col-span-full"
  },
  {
    component: FormCheckbox,
    name: "terms",
    label: "Terms and Conditions",
    rules: {
      required: {
        value: true,
        message: "Terms and Conditions is mendetory",
        },

  }
  },
  {
    component: DatePickerForm,
    name: "Select A date",
    label: " PLeAsE EnTeR YOur Birth Date",
    rules: {
      required: {
        value: true,
        message: "Date is mendetory",
        },

  }
},  {
  component: FormCombo,
  name: "country",
  label: "Country",
  options: [
    {
      value: "india",
      text: "India",
    },
    {
      value: "usa",
      text: "USA",
    },
    {
      value: "uk",
      text: "UK",
    },
    {
      value: "australia",
      text: "Australia",
    },
    {
      value: "canada",
      text: "Canada",
    },
    {
      value: "south africa",
      text: "South Africa",
    },
    {
      value: "singapore",
      text: "Singapore",
    },
    {
      value: "malaysia",
      text: "Malaysia",
    },
    {
      value: "new zealand",
      text: "New Zealand",
    },
    {
      value: "russia",
      text: "Russia",
    },
  ],
  rules: {
    required: {
      value: true,
      message: "Country is required",
    },
  },
},
{
  component: FormSwitch,
  name: "email_notification",
  label: "Email Notification",
  rules: {
    required: {
      value: false,
    },
  },
},
{
  component : formOtp,
  name: "otp",
  label: "OTP",
  rules: {
    required: {
      value: true,
      message : "OTP is required",
      },
      pattern: {
        value: /^\d{6}$/,
        message: "ENTER YOUR 6 DIGIT OTP",
      },
}
},
{
  component: formFieldArray,
  name: "productItems",
  fieldArray: [
    {
      component: FormInput,
      name: "itemName",
      label: "ItemName",
      placeholder: "Enter Item Details",
      rules: {
        required: {
          value: true,
          message: "List Item",
        },
      },
      className: "col-span-2 "
    },
    {
      component: FormInput,
      name: "quantity",
      label: "Qty",
      placeholder: "Enter no of Items",
      rules: {
        required: {
          value: true,
          message: "Quantity is required!",
        },
      },
      className: "col-span-2 "
    },
    {
      component: FormInput,
      name: "price",
      label: "Price",
      placeholder: "Enter Item Price",
      rules: {
        required: {
          value: true,
          message: "Item price is mendetory",
        },
      },
      className: "col-span-2 "
    },
  ]
}
]

export default FormFields;
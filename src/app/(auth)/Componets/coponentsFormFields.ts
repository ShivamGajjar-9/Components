import FormCheckbox from "@/components/form/formCheckbox";
import { DatePickerForm } from "@/components/form/formDatePicker";
import FormInput from "@/components/form/formInput";
import FormRadioGroup from "@/components/form/formRadioGroup";
import FormSelect from "@/components/form/formSelect";

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
}
]

export default FormFields;
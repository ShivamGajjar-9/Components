import MultipleButton from "@/components/form/multiButtonSwitch";
import prefixInput from "@/components/form/prefixInput";


const FormFields = [
  {
    component: prefixInput,
    name: "bill",
    label: "Bill",
    prefix: "$",
    placeholder: "0",
    rules: {
      required: {
        value: true,
        message: "Bill amount is required",
      },
      pattern: {
        value: /^\d+(\.\d{1,2})?$/,
        message: "Invalid bill amount",
      },
    },
    className: "w-full",
  },
  {
    component: MultipleButton,
    
    name: "tipPercent",
    label: "Select Tip %",
    options: [
      { label: "5%", value: "5" },
      { label: "10%", value: "10" },
      { label: "15%", value: "15" },
      { label: "25%", value: "25" },
      { label: "50%", value: "50" },
      { 
        label: "Custom", 
        value: "custom",
        isInput: true, // This tells your MultipleButton to render an input
        inputProps: {
          placeholder: "0",
          type: "number",
          className: "w-full text-center"
        }
      }
    ],
    rules: {
      required: {
        value: true,
        message: "Please select a tip percentage",
      },
    },
    className: "w-full",
  },
  {
    component: prefixInput,
    name: "people",
    label: "Number of People",
    prefix: "icon", // Special keyword we'll handle in the component
    placeholder: "0",
    iconPath: "/card/images/icon-person.svg", // Add this new prop
    rules: {
      required: {
        value: true,
        message: "Can't be zero",
      },
      pattern: {
        value: /^[1-9]\d*$/,
        message: "Invalid number of people",
      },
    },
    className: "w-full",
  }
];

export default FormFields;
import FormInput from "@/components/form/formInput";

const FormFields = [
  {
    component: FormInput,
    name: "name",
    label: "Cardholder Name",
    placeholder: "e.g. Shivam Gajjar",
    rules: {
      required: {
        value: true,
        message: "Cardholder Name is required",
      },
    },
    className: "col-span-4",
  },
  {
    component: FormInput,
    name: "number",
    label: "Card Number",
    placeholder: "e.g. 1111 1111 1111 1111",
    rules: {
      required: {
        value: true,
        message: "Card Number is required",
      },
      pattern: {
        value: /^\d{4} \d{4} \d{4} \d{4}$/,
        message: "Card Number must be in '1111 1111 1111 1111' format",
      },
    },
    className: "col-span-4",
    onChange: (e) => {
      let value = e.target.value.replace(/\D/g, ""); // Remove non-digits
      value = value.slice(0, 16).replace(/(.{4})/g, "$1 ").trim(); // Add spaces every 4 digits
      e.target.value = value; // Update input value
    },
  },
  
  {
    component: FormInput,
    name: "expiryDate",
    label: "Expiry  (MM/YY)",
    placeholder: "e.g. 12/25",
    rules: {
      required: {
        value: true,
        message: "Expiry Date is required",
      },
      pattern: {
        value: /^(0[0|1]|1[0-2])\/([2-9][0-9])$/,
        message: "should be in MM/YY format",
      },
    },
    className: "col-span-2 ",
  },
  {
    component: FormInput,
    name: "cvc",
    label: "CVC",
    placeholder: "e.g. 123",
    rules: {
      required: {
        value: true,
        message: "CVC is required",
      },
      pattern: {
        value: /^[0-9]{3,4}$/,
        message: "CVC must be 3 or 4 digits",
      },
    },
    className: "col-span-2",
  },
];

export default FormFields;
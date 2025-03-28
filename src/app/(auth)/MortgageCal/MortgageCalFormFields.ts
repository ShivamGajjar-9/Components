import FormInput from "@/components/form/formInput";
import FormRadioGroup from "@/components/form/formRadioGroup";
import FormSelect from "@/components/form/formSelect";
import FormSwitch from "@/components/form/formSwitch";

const FormFields = [
  {
    component: FormInput,
    name: "mortgageAmount",
    label: "Mortgage Amount",
    placeholder: "Enter loan amount",
    type: "number",
    prefix: "£",
    rules: {
      required: {
        value: true,
        message: "Mortgage amount is required",
      },
    },
    className: "col-span-2",
  },
  {
    component: FormInput,
    name: "mortgageTerm",
    label: "Mortgage Term",
    placeholder: "Enter loan term",
    type: "number",
    suffix: "years",
    rules: {
      required: {
        value: true,
        message: "Mortgage term is required",
      },
    },
  },
  {
    component: FormInput,
    name: "interestRate",
    label: "Interest Rate",
    placeholder: "Enter interest rate",
    type: "number",
    suffix: "%",
    rules: {
      required: {
        value: true,
        message: "Interest rate is required",
      },
    },
  },
  {
    component: FormRadioGroup,
    name: "mortgageType",
    label: "Mortgage Type",
    options: [
      { value: "repayment", text: "Repayment" },
      { value: "interest-only", text: "Interest Only" },
    ],
    rules: {
      required: {
        value: true,
        message: "Please select a mortgage type",
      },
    },
    className: "col-span-full",
  },
  {
    component: FormSelect,
    name: "loanPurpose",
    label: "Loan Purpose",
    placeholder: "Select Loan Purpose",
    options: [
      { value: "homePurchase", text: "Home Purchase" },
      { value: "refinance", text: "Refinance" },
      { value: "equityRelease", text: "Equity Release" },
    ],
    rules: {
      required: {
        value: true,
        message: "Loan purpose is required",
      },
    },
    className: "col-span-full",
  },
  {
    component: FormSwitch,
    name: "fixedInterest",
    label: "Fixed Interest Rate?",
    rules: {
      required: {
        value: false,
      },
    },
  },
];

export default FormFields;

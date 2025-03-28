import FormInput from "@/components/form/formInput";


const loginFormFields = [
    {
      component: FormInput,
      name: "email",
      label: "Email Address",
      placeholder: "elon@musk.com",
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
  ];
  
  export default loginFormFields;
  
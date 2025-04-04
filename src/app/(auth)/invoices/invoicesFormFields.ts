import { DatePickerForm } from "@/components/form/formDatePicker";
import FormFieldArray from "@/components/form/formFieldArray";
import FormGroup from "@/components/form/formGroup";
import FormInput from "@/components/form/formInput";
import FormSelect from "@/components/form/formSelect";
import FormTextArea from "@/components/form/formTextArea";

const invoiceFormFields = [
  {
    component: FormGroup,
    name: "billFrom",
    legend: "Bill From",
    className: "text-white grid grid-cols-12 gap-6",
    hideMessage: true,
    key: "billFrom",
    fieldArray: [
      {
        component: FormInput,
        name: "streetAddress",
        key: "billFrom.streetAddress",
        label: "Street Address",
        placeholder: "42 Patel Street, Navrangpura",
        rules: {
          required: "Street address is required",
        },
        className: "col-span-12",
      },
      {
        component: FormInput,
        name: "city",
        key: "billFrom.city",
        label: "City",
        placeholder: "Ahmedabad",
        rules: {
          required: "City is required",
        },
        className: "col-span-4",
      },
      {
        component: FormInput,
        name: "postCode",
        key: "billFrom.postCode",
        label: "Post Code",
        placeholder: "380009",
        rules: {
          required: "Post code is required",
        },
        className: "col-span-4",
      },
      {
        component: FormInput,
        name: "country",
        key: "billFrom.country",
        label: "Country",
        placeholder: "India",
        rules: {
          required: "Country is required",
        },
        className: "col-span-4",
      },
    ],
  },
  {
    component: FormGroup,
    name: "billTo",
    legend: "Bill To",
    className: "col-span-12 grid grid-cols-12 gap-6",
    hideMessage: true,
    key: "billTo",
    fieldArray: [
      {
        component: FormInput,
        name: "clientName",
        key: "billTo.clientName",
        label: "Client's Name",
        placeholder: "Shivam Gajjar",
        rules: {
          required: "Client name is required",
        },
        className: "col-span-12",
      },
      {
        component: FormInput,
        name: "clientEmail",
        key: "billTo.clientEmail",
        label: "Client's Email",
        placeholder: "shivam.gajjar@gmail.com",
        type: "email",
        rules: {
          required: "Client email is required",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Invalid email address",
          },
        },
        className: "col-span-12",
      },
      {
        component: FormInput,
        name: "clientStreetAddress",
        key: "billTo.clientStreetAddress",
        label: "Street Address",
        placeholder: "15 Gandhi Road, Satellite",
        rules: {
          required: "Street address is required",
        },
        className: "col-span-12",
      },
      {
        component: FormInput,
        name: "clientCity",
        key: "billTo.clientCity",
        label: "City",
        placeholder: "Ahmedabad",
        rules: {
          required: "City is required",
        },
        className: "col-span-4",
      },
      {
        component: FormInput,
        name: "clientPostCode",
        key: "billTo.clientPostCode",
        label: "Post Code",
        placeholder: "380015",
        rules: {
          required: "Post code is required",
        },
        className: "col-span-4",
      },
      {
        component: FormInput,
        name: "clientCountry",
        key: "billTo.clientCountry",
        label: "Country",
        placeholder: "India",
        rules: {
          required: "Country is required",
        },
        className: "col-span-4",
      },
    ],
  },
  {
    component: FormGroup,
    name: "invoiceDetails",
    className: " grid  gap-6",
    hideMessage: true,
    key: "invoiceDetails",
    fieldArray: [
      {
        component: DatePickerForm,
        name: "invoiceDate",
        key: "invoiceDetails.invoiceDate",
        label: "Invoice Date",
        rules: {
          required: "Invoice date is required",
        },
        className: "col-span-6",
      },
      {
        component: FormSelect,
        name: "paymentTerms",
        key: "invoiceDetails.paymentTerms",
        label: "Payment Terms",
        placeholder: "Select payment terms",
        options: [
          { value: "next30", text: "Next 30 Days" },
          { value: "next14", text: "Next 14 Days" },
          { value: "next7", text: "Next 7 Days" },
          { value: "next1", text: "Next 1 Day" },
        ],
        rules: {
          required: "Payment terms are required",
        },
        className: "col-span-6",
      },
      {
        component: FormInput,
        name: "projectDescription",
        key: "invoiceDetails.projectDescription",
        label: "Project Description",
        placeholder: "Website Development for Gajjar Enterprises",
        rules: {
          required: "Project description is required",
        },
        className: "col-span-8",
      },
    ],
  },
  {
    component: FormGroup,
    name: "itemList",
    legend: "Item List",
    className: "text-white grid  gap-6",
    hideMessage: true,
    key: "itemList",
    fieldArray: [
      {
        component: FormFieldArray,
        name: "items",
        key: "itemList.items",
        fieldArray: [
          {
            component: FormInput,
            name: "itemName",
            key: "itemList.items.itemName",
            label: "Item Name",
            placeholder: "E-commerce Website Development",
            className: "col-span-4",
          },
          {
            component: FormInput,
            name: "quantity",
            key: "itemList.items.quantity",
            label: "Qty.",
            type: "number",
            placeholder: "1",
            className: "col-span-2",
          },
          {
            component: FormInput,
            name: "price",
            key: "itemList.items.price",
            label: "Price",
            type: "number",
            placeholder: "156.00",
            className: "col-span-3",
          },
          {
            component: FormInput,
            name: "total",
            key: "itemList.items.total",
            label: "Total",
            readOnly: true,
            className: "col-span-3",
          },
        ],
      },
    ],
  },
];

export default invoiceFormFields;

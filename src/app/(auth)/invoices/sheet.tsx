"use client";

import DynamicForm from "@/components/form/dynamicForm";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { PlusIcon } from "lucide-react";
import invoiceFormFields from "./invoicesFormFields";
import { useForm } from "react-hook-form";

const SHEET_SIDES = ["left"] as const;

type SheetSide = (typeof SHEET_SIDES)[number];

interface Invoice {
  invoice: string;
  dueDate: string;
  creditorName: string;
  totalAmount: string;
  paymentStatus: string;
}

interface SheetSideProps {
  form?: any; 
  onSubmit?: (data: any) => void;
  editingInvoice?: Invoice | null;
}

export function SheetSide({
  form: propForm,
  onSubmit: propOnSubmit,
  editingInvoice
}: SheetSideProps) {
  const localForm = useForm();
  const form = propForm || localForm;

  const handleSubmit = (data: any) => {
    console.log("Form submitted with data:", data);
    if (propOnSubmit) {
      propOnSubmit(data);
    }
  };

  return (
    <div className="grid grid-cols-2 gap-2">
      {SHEET_SIDES.map((side) => (
        <Sheet key={side}>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              className="aspect-square px-3 py-6 bg-[#7c5dfa] rounded-3xl hover:opacity-90 hover:bg-[#cbc0f7]"
            >
              <div className="rounded-full flex justify-center items-center p-2 bg-white">
                <PlusIcon
                  className="opacity-100 sm:-ms-1"
                  size={16}
                  aria-hidden="true"
                />
              </div>
              <span className="max-sm:sr-only">New Invoice</span>
            </Button>
          </SheetTrigger>
          <SheetContent
            side={side}
            className="w-full sm:w-[640px] lg:w-[940px] xl:w-[1024px] h-screen bg-[#141625] border-r border-gray-800 p-0"
          >
            <div className="h-full flex flex-col">
              <div className="px-6 py-6">
                <SheetHeader>
                  <SheetTitle className="text-white text-2xl font-bold">
                    {editingInvoice ? `Edit Invoice #${editingInvoice.invoice}` : 'Add New Invoice'}
                  </SheetTitle>
                </SheetHeader>
              </div>
              
              <div className="flex-1 overflow-y-auto px-6">
                <DynamicForm
                  form={form}
                  onSubmit={handleSubmit}
                  formFields={invoiceFormFields}
                  id="invoice-create"
                  className="grid grid-cols-12 gap-6 pb-6"
                />
              </div>

              <div className="sticky bottom-0 border-t border-gray-800 px-6 py-4 mt-auto bg-[#141625]">
                <div className="flex justify-end gap-2">
                  <Button 
                    type="button"
                    variant="outline"
                    onClick={() => form.reset()}
                    className="bg-[#252945] hover:bg-[#1e2139] text-white border-none"
                  >
                    Cancel
                  </Button>
                  <Button 
                    type="submit" 
                    form="invoice-create"
                    className="bg-[#7c5dfa] hover:bg-[#6c46fa] text-white"
                  >
                    {editingInvoice ? 'Save Changes' : 'Create Invoice'}
                  </Button>
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      ))}
    </div>
  );
}

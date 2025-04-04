"use client";
import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SheetSide } from "@/app/(auth)/invoices/sheet";
import invoiceFormFields from "./invoicesFormFields";
import { useForm } from "react-hook-form";
import InvoTable from "./invoTable";
import invoicesData from "../../../../db.json";

interface FormValues {
  [key: string]: any;
}

interface Invoice {
  invoice: string;
  dueDate: string;
  creditorName: string;
  totalAmount: string;
  paymentStatus: string;
}

const Invoices = () => {
  const [invoices, setInvoices] = useState<Invoice[]>(invoicesData.invoices);
  const [filter, setFilter] = useState<string | undefined>();
  const [editingInvoice, setEditingInvoice] = useState<Invoice | null>(null);

  const form = useForm({
    defaultValues: invoiceFormFields.reduce(
      (p, c) => ({ ...p, [c.name]: "" }),
      {}
    ),
    mode: "all",
  });

  const onSubmit = (values: FormValues) => {
    if (editingInvoice) {
      // Update existing invoice
      setInvoices(prev => prev.map(inv => 
        inv.invoice === editingInvoice.invoice 
          ? {
              ...inv,
              dueDate: values.invoiceDetails?.invoiceDate || inv.dueDate,
              creditorName: values.billTo?.clientName || inv.creditorName,
              totalAmount: values.itemList?.items?.reduce((sum: number, item: any) => 
                sum + (Number(item.price) * Number(item.quantity)), 0).toFixed(2) || inv.totalAmount,
            }
          : inv
      ));
      setEditingInvoice(null);
    } else {
      // Create new invoice
      const newInvoice: Invoice = {
        invoice: `RT${String(Math.floor(Math.random() * 9000) + 1000)}`,
        dueDate: values.invoiceDetails?.invoiceDate || new Date().toISOString(),
        creditorName: values.billTo?.clientName || '',
        totalAmount: values.itemList?.items?.reduce((sum: number, item: any) => 
          sum + (Number(item.price) * Number(item.quantity)), 0).toFixed(2) || '0',
        paymentStatus: 'draft'
      };

      setInvoices(prev => [newInvoice, ...prev]);
    }
    
    form.reset();
  };

  const handleFilterChange = (value: string) => {
    setFilter(value === 'all' ? undefined : value);
  };

  const handleEdit = (invoice: Invoice) => {
    setEditingInvoice(invoice);
    // Pre-fill form with invoice data
    form.reset({
      billTo: {
        clientName: invoice.creditorName,
      },
      invoiceDetails: {
        invoiceDate: invoice.dueDate,
      },
      // Add other fields as needed
    });
  };

  const handleDelete = (invoice: Invoice) => {
    setInvoices(prev => prev.filter(inv => inv.invoice !== invoice.invoice));
  };

  return (
    <section className="flex-1 flex flex-col min-h-screen bg-pink-400 transition-all duration-300 ease-in-out">
      <div className="max-w-7xl w-full mx-auto px-6 py-8">
        <header className="flex flex-row justify-between items-center mb-8">
          <div className="flex flex-col">
            <h1 className="text-3xl font-bold text-white">Invoices</h1>
            <p className="text-[#DFE3FA]">There are {invoices.length} total invoices</p>
          </div>
          <div className="flex flex-row items-center gap-5">
            <Select onValueChange={handleFilterChange} defaultValue="all">
              <SelectTrigger className="w-[180px] bg-[#1E2139] border-0 font-bold text-white">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent className="bg-[#1E2139] border-[#252945] text-white">
                <SelectGroup>
                  <SelectLabel className="text-[#DFE3FA]">Filter By Status</SelectLabel>
                  <SelectItem value="all" className="hover:bg-[#252945]">All</SelectItem>
                  <SelectItem value="pending" className="hover:bg-[#252945]">Pending</SelectItem>
                  <SelectItem value="paid" className="hover:bg-[#252945]">Paid</SelectItem>
                  <SelectItem value="draft" className="hover:bg-[#252945]">Draft</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <SheetSide 
              form={form} 
              onSubmit={onSubmit} 
              editingInvoice={editingInvoice}
            />
          </div>
        </header>
        <InvoTable 
          json={invoices} 
          filter={filter} 
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </div>
    </section>
  );
};

export default Invoices;

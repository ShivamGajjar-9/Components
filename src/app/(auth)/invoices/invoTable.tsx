import React, { useState } from "react";
import { ChevronRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface Invoice {
  invoice: string;
  dueDate: string;
  creditorName: string;
  totalAmount: string;
  paymentStatus: string;
}

interface InvoTableProps {
  filter?: string;
  json: Invoice[];
  onEdit?: (invoice: Invoice) => void;
  onDelete?: (invoice: Invoice) => void;
}

const InvoTable = ({ filter, json, onEdit, onDelete }: InvoTableProps) => {
  const [selectedInvoice, setSelectedInvoice] = useState<Invoice | null>(null);

  const filteredInvoices = filter
    ? json.filter((invoice) => invoice.paymentStatus.toLowerCase() === filter.toLowerCase())
    : json;

  const handleInvoiceClick = (invoice: Invoice) => {
    setSelectedInvoice(invoice);
  };

  return (
    <div className="space-y-4 w-full">
      {filteredInvoices.map((invoice) => (
        <Dialog key={invoice.invoice}>
          <DialogTrigger asChild>
            <button
              onClick={() => handleInvoiceClick(invoice)}
              className="w-full bg-[#1E2139] hover:bg-[#252945] rounded-lg transition-colors"
            >
              {/* Mobile Layout */}
              <div className="md:hidden p-6 space-y-6">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-1">
                    <span className="text-[#7E88C3]">#</span>
                    <span className="text-white">{invoice.invoice}</span>
                  </div>
                  <span className="text-white">{invoice.creditorName}</span>
                </div>

                <div className="flex justify-between items-center">
                  <div className="text-[#DFE3FA]">
                    Due {new Date(invoice.dueDate).toLocaleDateString('en-GB', {
                      day: 'numeric',
                      month: 'short',
                      year: 'numeric'
                    })}
                  </div>
                  <span className="text-xl font-bold text-white">£{invoice.totalAmount}</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className={`flex items-center gap-2 px-4 py-2 rounded-md
                    ${invoice.paymentStatus.toLowerCase() === 'paid' ? 'text-[#33D69F] bg-[#33D69F]/10' : ''}
                    ${invoice.paymentStatus.toLowerCase() === 'pending' ? 'text-[#FF8F00] bg-[#FF8F00]/10' : ''}
                    ${invoice.paymentStatus.toLowerCase() === 'draft' ? 'text-[#DFE3FA] bg-[#DFE3FA]/10' : ''}
                  `}>
                    <div className={`w-2 h-2 rounded-full
                      ${invoice.paymentStatus.toLowerCase() === 'paid' ? 'bg-[#33D69F]' : ''}
                      ${invoice.paymentStatus.toLowerCase() === 'pending' ? 'bg-[#FF8F00]' : ''}
                      ${invoice.paymentStatus.toLowerCase() === 'draft' ? 'bg-[#DFE3FA]' : ''}
                    `} />
                    {invoice.paymentStatus.charAt(0).toUpperCase() + invoice.paymentStatus.slice(1)}
                  </div>
                  <ChevronRight className="w-4 h-4 text-[#7C5DFA]" />
                </div>
              </div>

              {/* Desktop Layout */}
              <div className="hidden md:grid grid-cols-5 items-center gap-6 py-4 px-6">
                <div className="text-white min-w-[100px]">
                  <span className="text-[#7E88C3]">#</span>
                  <span>{invoice.invoice}</span>
                </div>
                
                <div className="text-[#DFE3FA] whitespace-nowrap">
                  Due {new Date(invoice.dueDate).toLocaleDateString('en-GB', {
                    day: 'numeric',
                    month: 'short',
                    year: 'numeric'
                  })}
                </div>
                
                <div className="text-[#DFE3FA]">
                  {invoice.creditorName}
                </div>
                
                <div className="text-xl font-bold text-white justify-self-end">
                  £{invoice.totalAmount}
                </div>
                
                <div className="flex items-center justify-end gap-6">
                  <div className={`flex items-center gap-2 px-4 py-2 rounded-md
                    ${invoice.paymentStatus.toLowerCase() === 'paid' ? 'text-[#33D69F] bg-[#33D69F]/10' : ''}
                    ${invoice.paymentStatus.toLowerCase() === 'pending' ? 'text-[#FF8F00] bg-[#FF8F00]/10' : ''}
                    ${invoice.paymentStatus.toLowerCase() === 'draft' ? 'text-[#DFE3FA] bg-[#DFE3FA]/10' : ''}
                  `}>
                    <div className={`w-2 h-2 rounded-full
                      ${invoice.paymentStatus.toLowerCase() === 'paid' ? 'bg-[#33D69F]' : ''}
                      ${invoice.paymentStatus.toLowerCase() === 'pending' ? 'bg-[#FF8F00]' : ''}
                      ${invoice.paymentStatus.toLowerCase() === 'draft' ? 'bg-[#DFE3FA]' : ''}
                    `} />
                    {invoice.paymentStatus.charAt(0).toUpperCase() + invoice.paymentStatus.slice(1)}
                  </div>
                  <ChevronRight className="w-4 h-4 text-[#7C5DFA]" />
                </div>
              </div>
            </button>
          </DialogTrigger>
          <DialogContent className="bg-[#1E2139] text-white border-[#252945]">
            <DialogHeader>
              <DialogTitle className="text-xl font-bold">Invoice #{invoice.invoice}</DialogTitle>
              <DialogDescription className="text-[#DFE3FA]">
                Choose an action for this invoice
              </DialogDescription>
            </DialogHeader>
            <div className="flex justify-end gap-4 mt-6">
              <Button
                onClick={() => onEdit?.(invoice)}
                className="bg-[#252945] hover:bg-[#1E2139] text-white"
              >
                Edit
              </Button>
              <Button
                onClick={() => onDelete?.(invoice)}
                variant="destructive"
                className="bg-[#EC5757] hover:bg-[#FF9797] text-white"
              >
                Delete
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      ))}
    </div>
  );
};

export default InvoTable;

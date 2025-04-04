import { AppSidebar } from "@/components/form/appSidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export default function InvoiceLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {" "}
      <SidebarProvider>
        <AppSidebar />
        <main className="flex w-full">
          <SidebarTrigger />
          {children}
        </main>
      </SidebarProvider>
    </>
  );
}

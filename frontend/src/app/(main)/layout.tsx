import { AppSidebar } from "@/components/constants/AppSidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
      <AppSidebar variant="inset" />
      <SidebarInset>{children}</SidebarInset>
    </SidebarProvider>
  );
}

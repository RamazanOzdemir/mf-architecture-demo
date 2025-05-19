import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/containers/app-sidebar";
import { Outlet } from "react-router";

export default function Layout() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full h-full">
        <SidebarTrigger />
        <Outlet />
      </main>
    </SidebarProvider>
  );
}

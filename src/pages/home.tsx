import { AppSidebar } from "@/components/app-sidebar";
import {} from "@/components/ui/breadcrumb";
import Map from "../components/maps/MapComponent";

import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

export default function Home() {
  return (
    <>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <Map />
        </SidebarInset>
      </SidebarProvider>
    </>
  );
}

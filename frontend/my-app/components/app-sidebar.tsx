import Link from "next/link";
import { AirVent, ChartColumn, CircleUser, Settings } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

// Menu items.
const items = [
  {
    title: "Projeto",
    url: "/",
    icon: AirVent,
  },
  {
    title: "Monitoramento",
    url: "/dashboard",
    icon: ChartColumn,
  },
  {
    title: "Usuários",
    url: "/users",
    icon: CircleUser,
  },
  {
    title: "Configurações",
    url: "/settings",
    icon: Settings,
  },
];

export function AppSidebar() {
  return (
    <Sidebar className="fixed top-0 left-0 h-full w-64 z-50 shadow-lg">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="justify-center mb-5">Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url} className="flex items-center space-x-2 p-2">
                      <item.icon className="w-6 h-6" />
                      <span className="text-gray-950">{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}

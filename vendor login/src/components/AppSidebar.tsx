
import { Calendar, Users, Building2, Truck, Settings, BarChart3 } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from "@/components/ui/sidebar";

const items = [
  { title: "Dashboard", url: "/", icon: BarChart3, color: "text-emerald-600" },
  { title: "Companies", url: "/companies", icon: Building2, color: "text-blue-600" },
  { title: "Ops View", url: "/ops-view", icon: Calendar, color: "text-purple-600" },
  { title: "Vendors", url: "/vendors", icon: Truck, color: "text-amber-600" },
  { title: "Admin", url: "/admin", icon: Settings, color: "text-rose-600" },
];

export function AppSidebar() {
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path: string) => currentPath === path;
  const getNavCls = ({ isActive }: { isActive: boolean }, itemColor: string) =>
    isActive 
      ? "bg-gradient-to-r from-slate-100 to-slate-200 text-slate-800 font-semibold shadow-sm border-l-4 border-l-slate-600" 
      : `${itemColor} hover:bg-gradient-to-r hover:from-slate-50 hover:to-slate-100 hover:text-slate-700 transition-all duration-200`;

  return (
    <Sidebar
      className="w-60 bg-gradient-to-b from-slate-50 via-white to-slate-50 border-r border-slate-200 shadow-sm"
      collapsible="icon"
    >
      <SidebarTrigger className="m-2 self-end text-slate-500 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors" />

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-slate-600 font-semibold text-xs uppercase tracking-wider px-3 mb-2">
            Main Navigation
          </SidebarGroupLabel>

          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink 
                      to={item.url} 
                      end 
                      className={({ isActive }) => `
                        flex items-center px-3 py-3 rounded-lg transition-all duration-200 
                        ${getNavCls({ isActive }, item.color)}
                      `}
                    >
                      <item.icon className="h-5 w-5 flex-shrink-0" />
                      <span className="ml-3 font-medium">{item.title}</span>
                    </NavLink>
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

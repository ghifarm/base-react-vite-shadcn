import { Calendar, Home, Inbox, Search, Settings } from 'lucide-react';

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarMenuSub,
  SidebarMenuSubItem,
} from '@/components/ui/sidebar';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import pertareLogo from '@/assets/image/logo.png';
import logoIcon from '@/assets/image/logo-only.svg';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useMemo } from 'react';

const items = [
  { title: 'Home', url: '/', icon: Home },
  { title: 'Data SPBU', url: '/spbu', icon: Inbox },
  { title: 'Calendar', url: '#', icon: Calendar },
  { title: 'Search', url: '#', icon: Search },
  { title: 'Settings', url: '#', icon: Settings },
];

export function AppSidebar() {
  const path = useLocation().pathname;
  const isActive = (pathname, url) => {
    if (url === '/') return pathname === '/';
    return pathname === url || pathname.startsWith(`${url}/`);
  };

  return (
    <Sidebar collapsible="icon" className="!rounded-2xl border-none p-4">
      <SidebarHeader className="relative flex min-h-[88px] items-center justify-center transition-[min-height] duration-300 group-data-[state=collapsed]:min-h-[64px]">
        {/* Expanded logo */}
        <img
          src={pertareLogo}
          alt="Pertare Logo"
          className="absolute w-40 scale-100 opacity-100 transition-all duration-200 ease-out group-data-[state=collapsed]:scale-95 group-data-[state=collapsed]:opacity-0"
        />

        {/* Collapsed icon */}
        <img
          src={logoIcon}
          alt="Pertare Icon"
          className="absolute w-10 scale-95 opacity-0 transition-all duration-200 ease-out group-data-[state=collapsed]:scale-100 group-data-[state=collapsed]:opacity-100"
        />
      </SidebarHeader>
      <SidebarContent className="rounded-2xl">
        <SidebarGroup>
          {/* This label auto-hides when collapsed */}
          <SidebarGroupLabel className="whitespace-nowrap transition-all duration-200 ease-out group-data-[collapsible=icon]:w-0 group-data-[collapsible=icon]:translate-x-2 group-data-[collapsible=icon]:overflow-hidden group-data-[collapsible=icon]:opacity-0">
            SPBU
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    size={'lg'}
                    asChild
                    tooltip={item.title}
                    isActive={isActive(path, item.url)}
                  >
                    <Link to={item.url} className="">
                      <item.icon className="!size-6" />
                      <span className="whitespace-nowrap transition-all duration-200 ease-out group-data-[collapsible=icon]:w-0 group-data-[collapsible=icon]:translate-x-2 group-data-[collapsible=icon]:overflow-hidden group-data-[collapsible=icon]:opacity-0">
                        {item.title}
                      </span>
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

{
  /* <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    size={"lg"}
                    asChild
                    tooltip={item.title}
                    isActive={path === item.url}
                    // className="h-10 py-6 text-gray-500"
                  >
                    <Link to={item.url} className="">
                      <item.icon className="!size-6" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem> */
}

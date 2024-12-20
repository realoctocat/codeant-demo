"use client";

import * as React from "react";
import {
  BookAIcon,
  Cloud,
  Code2,
  Home,
  LogOut,
  Phone,
  Settings,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";
import { TeamSwitcher } from "@/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import Image from "next/image";

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Anish's team",
    },
    {
      name: "Code-ant team",
    },
    {
      name: "Best team",
    },
  ],
  navMain: [
    {
      title: "Repositories",
      url: "#",
      icon: Home,
    },
    {
      title: "AI Code Review",
      url: "#",
      icon: Code2,
    },
    {
      title: "Cloud Security",
      url: "#",
      icon: Cloud,
    },
    {
      title: "How to use",
      url: "#",
      icon: BookAIcon,
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarContent>
          <div className="flex items-center gap-4 p-2">
            <Image
              src={"/logo.svg"}
              alt="C"
              width={40}
              height={40}
              className="size-8 rounded-full dark:invert"
            />
            <div>
              <div className="font-semibold text-lg md:text-2xl">
                CodeAnt AI
              </div>
            </div>
          </div>
        </SidebarContent>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter className="mb-2">
        <SidebarContent>
          <SidebarMenuItem className="flex items-center gap-2 px-2">
            <Phone size={18} />
            Support
          </SidebarMenuItem>
          <SidebarMenuItem className="flex items-center gap-2 p-2">
            <LogOut size={18} />
            Logout
          </SidebarMenuItem>
        </SidebarContent>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}

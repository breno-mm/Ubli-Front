import * as React from "react";
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";
import { TeamSwitcher } from "@/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";

// This is sample data.
const data = {
  user: {
    name: "Breno",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Ubli",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Ubli",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Ubli",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Lugares",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "Acessiveis",
          url: "#",
        },
        {
          title: "Parcialmente acessivel",
          url: "#",
        },
        {
          title: "Sem acessibilidade",
          url: "#",
        },
      ],
    },
    {
      title: "Sem ideia do que seja aqui",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "Menu 1",
          url: "#",
        },
        {
          title: "Menu 2",
          url: "#",
        },
        {
          title: "Menu 3",
          url: "#",
        },
      ],
    },
    {
      title: "Documentação",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "Introduction",
          url: "#",
        },
        {
          title: "Get Started",
          url: "#",
        },
        {
          title: "Tutorials",
          url: "#",
        },
        {
          title: "Changelog",
          url: "#",
        },
      ],
    },
    {
      title: "Configurações",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "General",
          url: "#",
        },
        {
          title: "Team",
          url: "#",
        },
        {
          title: "Billing",
          url: "#",
        },
        {
          title: "Limits",
          url: "#",
        },
      ],
    },
  ],
  projects: [
    {
      name: "Design Engineering",
      url: "#",
      icon: Frame,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Travel",
      url: "#",
      icon: Map,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}

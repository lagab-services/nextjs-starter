"use client"
import React, {useState} from 'react';
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarProvider,
    SidebarTrigger
} from '@/components/ui/sidebar';
import {Bell, Globe, Home, Link, Lock, Menu, MessageCircle, Paintbrush, Settings} from 'lucide-react';
import {useIsMobile} from '@/hooks/use-mobile';
import {cn} from '@/lib/utils';
import {usePathname} from "next/navigation";
import {NavItem} from "@/types/nav";

interface SettingsLayoutProps {
    children: React.ReactNode
}

interface DataNav {
    nav: NavItem[];
}

const data: DataNav = {
    nav: [
        {title: "Notifications", href: "/settings/notifications", icon: Bell},
        {title: "Navigation", href: "/settings/navigation", icon: Menu},
        {title: "Home", href: "/settings", icon: Home},
        {title: "Appearance", href: "/settings/appearance", icon: Paintbrush},
        {title: "Messages & media", href: "/settings/messages-media", icon: MessageCircle},
        {title: "Language & region", href: "/settings/lanq", icon: Globe},
        {title: "Connected accounts", href: "/settings/connected-accounts", icon: Link},
        {title: "Privacy & visibility", href: "/settings/privacy", icon: Lock},
        {title: "Advanced", href: "/settings/advanced", icon: Settings},
    ],
}

const SettingsLayout = ({children}: SettingsLayoutProps) => {
    const [sidebarOpen, _sidebarOpen] = useState(false)
    const isMobile = useIsMobile()
    const pathname = usePathname()
    return (
        <div className="w-full mx-auto p-6 space-y-5">
            <SidebarProvider className={cn("items-start", isMobile ? "flex-col" : "")} open={sidebarOpen} onOpenChange={_sidebarOpen}>
                <SidebarTrigger className=" md:hidden mx-4" onClick={(event) => {
                    _sidebarOpen(!sidebarOpen)
                }}><Menu/></SidebarTrigger>
                <Sidebar variant="sidebar" collapsible={isMobile ? "offcanvas" : "none"} className="hidden md:block bg-inherit">
                    <SidebarContent>
                        <SidebarGroup>
                            <SidebarGroupContent>
                                <SidebarMenu>
                                    {data.nav.map((item) => (
                                        <SidebarMenuItem key={item.title}>
                                            <SidebarMenuButton
                                                asChild
                                                isActive={item.href === pathname}
                                            >
                                                <a href={item.href}>
                                                    <item.icon/>
                                                    <span>{item.title}</span>
                                                </a>
                                            </SidebarMenuButton>
                                        </SidebarMenuItem>
                                    ))}
                                </SidebarMenu>
                            </SidebarGroupContent>
                        </SidebarGroup>
                    </SidebarContent>
                </Sidebar>

                <main className="flex flex-1 flex-col p-4 pt-0 gap-4 overflow-hidden">
                    {children}
                </main>
            </SidebarProvider>
        </div>
    );
};

export default SettingsLayout;
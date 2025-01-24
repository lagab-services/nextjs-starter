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
import {Bell, Check, Globe, Home, Keyboard, Link, Lock, Menu, MessageCircle, Paintbrush, Settings, Video} from 'lucide-react';
import {useIsMobile} from '@/hooks/use-mobile';
import {cn} from '@/lib/utils';

interface SettingsLayoutProps {
    children: React.ReactNode
}

const data = {
    nav: [
        {name: "Notifications", icon: Bell},
        {name: "Navigation", icon: Menu},
        {name: "Home", icon: Home},
        {name: "Appearance", icon: Paintbrush},
        {name: "Messages & media", icon: MessageCircle},
        {name: "Language & region", icon: Globe},
        {name: "Accessibility", icon: Keyboard},
        {name: "Mark as read", icon: Check},
        {name: "Audio & video", icon: Video},
        {name: "Connected accounts", icon: Link},
        {name: "Privacy & visibility", icon: Lock},
        {name: "Advanced", icon: Settings},
    ],
}

const SettingsLayout = ({children}: SettingsLayoutProps) => {
    const [sidebarOpen, _sidebarOpen] = useState(false)
    const isMobile = useIsMobile()
    return (
        <div className="container mx-auto p-6 space-y-5">
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
                                        <SidebarMenuItem key={item.name}>
                                            <SidebarMenuButton
                                                asChild
                                                isActive={item.name === "Messages & media"}
                                            >
                                                <a href="#">
                                                    <item.icon/>
                                                    <span>{item.name}</span>
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
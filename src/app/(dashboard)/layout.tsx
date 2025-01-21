"use client"
import React from 'react';
import {AppSidebar} from '@/components/app-sidebar';
import {SidebarInset, SidebarProvider, SidebarTrigger} from '@/components/ui/sidebar';
import useLocalStorage from '@/hooks/use-local-storage';
import {Separator} from "@/components/ui/separator";
import {BreadcrumbProvider, Breadcrumbs} from "@/components/breadcrumbs";

interface DashboardLayoutProps {
    children: React.ReactNode
}

const DashboardLayout = ({children}: DashboardLayoutProps) => {
    const [_leftOpen, _setLeftOpen] = useLocalStorage({key: 'collapsed-sidebar-left', defaultValue: false});

    return (
        <SidebarProvider open={_leftOpen} onOpenChange={_setLeftOpen}>
            <AppSidebar/>
            <SidebarInset>
                <BreadcrumbProvider>
                    <header className="flex h-16 shrink-0 items-center gap-2">
                        <div className="flex items-center gap-2 px-4">
                            <SidebarTrigger className="-ml-1"/>
                            <Separator orientation="vertical" className="mr-2 h-4"/>
                            <Breadcrumbs/>
                        </div>
                    </header>
                    {children}
                </BreadcrumbProvider>
            </SidebarInset>
        </SidebarProvider>
    );
};

export default DashboardLayout;
"use client"
import React from 'react';
import {AppSidebar} from '@/components/app-sidebar';
import {SidebarInset, SidebarProvider} from '@/components/ui/sidebar';
import useLocalStorage from '@/hooks/use-local-storage';

interface DashboardLayoutProps {
    children: React.ReactNode
}

const DashboardLayout = ({children}: DashboardLayoutProps) => {
    const [_leftOpen, _setLeftOpen] = useLocalStorage({key: 'collapsed-sidebar-left', defaultValue: false});

    return (
        <SidebarProvider open={_leftOpen} onOpenChange={_setLeftOpen}>
            <AppSidebar/>
            <SidebarInset>
                {children}
            </SidebarInset>
        </SidebarProvider>
    );
};

export default DashboardLayout;
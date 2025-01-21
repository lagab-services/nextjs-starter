'use client';
import {Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator} from '@/components/ui/breadcrumb';
import {useBreadcrumbs} from '@/hooks/use-breadcrumbs';
import {Slash} from 'lucide-react';
import React, {createContext, Fragment, ReactNode, useContext, useState} from 'react';

type BreadcrumbsProps = {
    lastLabel?: string; // Optional prop to override the last breadcrumb title
};
type BreadcrumbContextType = {
    contentTitle: string;
    setContentTitle: (title: string) => void;
};

const BreadcrumbContext = createContext<BreadcrumbContextType | undefined>(undefined);

export function BreadcrumbProvider({children}: { children: ReactNode }) {
    const [contentTitle, setContentTitle] = useState('');

    return (
        <BreadcrumbContext.Provider value={{contentTitle, setContentTitle}}>
            {children}
        </BreadcrumbContext.Provider>
    );
}

export function useBreadcrumb() {
    const context = useContext(BreadcrumbContext);
    if (!context) {
        throw new Error('useContentTitle must be used within a BreadcrumbProvider');
    }
    return context;
}

export function Breadcrumbs({lastLabel}: BreadcrumbsProps) {
    const {contentTitle} = useBreadcrumb();
    const items = useBreadcrumbs(lastLabel != undefined ? lastLabel : contentTitle);
    if (items.length === 0) return null;
    return (
        <Breadcrumb>
            <BreadcrumbList>
                {/* Static breadcrumb*/}
                <BreadcrumbItem className="hidden md:block">
                    <BreadcrumbLink href="#">
                        Home
                    </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block"/>
                {/* Dynamic breadcrumbs */}
                {items.map((item, index) => (
                    <Fragment key={item.title}>

                        {index < items.length - 1 ? (
                            <>
                                <BreadcrumbItem className="hidden md:block">
                                    <BreadcrumbLink href={item.link}>{item.title}</BreadcrumbLink>
                                </BreadcrumbItem>

                                <BreadcrumbSeparator className="hidden md:block">
                                    <Slash/>
                                </BreadcrumbSeparator>
                            </>
                        ) : (
                            <BreadcrumbPage>{item.title}</BreadcrumbPage>
                        )}
                    </Fragment>
                ))}
            </BreadcrumbList>
        </Breadcrumb>
    );
}
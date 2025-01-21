'use client';

import {usePathname} from 'next/navigation';
import {useMemo} from 'react';

type BreadcrumbItem = {
    title: string;
    link: string;
};

// This allows to add custom title as well
const routeMapping: Record<string, BreadcrumbItem[]> = {
    '/dashboard': [{title: 'Dashboard', link: '/dashboard'}],
    '/dashboard/employee': [
        {title: 'Dashboard', link: '/dashboard'},
        {title: 'Employee', link: '/dashboard/employee'}
    ],
    '/dashboard/product': [
        {title: 'Dashboard', link: '/dashboard'},
        {title: 'Product', link: '/dashboard/product'}
    ]
    // Add more custom mappings as needed
};

export function useBreadcrumbs(contentTitle?: string) {
    const pathname = usePathname();

    const breadcrumbs = useMemo(() => {
        // Check if we have a custom mapping for this exact path
        if (routeMapping[pathname]) {
            return routeMapping[pathname];
        }

        // If no exact match, fall back to generating breadcrumbs from the path
        const segments = pathname.split('/').filter(Boolean);
        const items = segments.map((segment, index) => {
            const path = `/${segments.slice(0, index + 1).join('/')}`;
            return {
                title: segment.charAt(0).toUpperCase() + segment.slice(1),
                link: path
            };
        });
        // Replace the last breadcrumb's title with `contentTitle` if provided
        if (contentTitle && items.length > 0) {
            items[items.length - 1].title = contentTitle;
        }
        return items;
    }, [pathname]);

    return breadcrumbs;
}
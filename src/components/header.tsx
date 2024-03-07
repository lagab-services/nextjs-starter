import React from "react";
import {siteConfig} from "@/app/config/site";

interface HeaderProps {
    children?: React.ReactNode
}

export const Header = ({children}: HeaderProps) => {
    return (
        <header>
            <nav className="bg-background border-gray-200 dark:bg-gray-900 dark:border-gray-700">
                <div className="container flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo"/>
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">{siteConfig.name}</span>
                    </a>
                    {children}
                </div>

            </nav>
        </header>
    )
}

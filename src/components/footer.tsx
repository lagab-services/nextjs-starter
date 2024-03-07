import {ModeToggle} from "@/components/mode-toggle";
import {siteConfig} from "@/app/config/site";

interface FooterProps {
    children?: React.ReactNode
}

export const Footer = ({children}: FooterProps) => {
    return (
        <footer className="bg-white dark:bg-gray-900 w-full">
            {children}
            <div className="px-4 py-3 bg-gray-100 dark:bg-gray-700 md:flex md:items-center md:justify-between">
                <span className="text-sm text-gray-500 dark:text-gray-300 sm:text-center">
                    © 2023 <a href="/">{siteConfig.name}™</a>. All Rights Reserved.
                </span>
                <div className="flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
                    <ModeToggle/>
                </div>
            </div>
        </footer>
    )
}

import {MainNavItem} from "@/app/types";
import {Sheet, SheetContent, SheetHeader, SheetTrigger} from "@/components/ui/sheet";
import {Menu} from "lucide-react";
import Link from "next/link";
import {cn} from "@/lib/utils";
import React from "react";
import {useSelectedLayoutSegment} from "next/navigation";

interface MobileNavProps {
    items: MainNavItem[]
    children?: React.ReactNode
}

export const MobileNav = ({items, children}: MobileNavProps) => {
    const segment = useSelectedLayoutSegment();
    return (
        <Sheet>
            <SheetTrigger asChild>
                <button data-collapse-toggle="navbar-multi-level" type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="navbar-multi-level" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <Menu size={24}/>
                </button>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>

                </SheetHeader>
                <div className="grid grid-flow-row auto-rows-max text-sm">
                    {items?.map((item, index) => (
                        <Link
                            key={index}
                            href={item.disabled ? "#" : item.href}
                            className={cn(
                                "flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm",
                                item.href.startsWith(`/${segment}`)
                                    ? "text-foreground"
                                    : "text-foreground/60",
                                item.disabled && "cursor-not-allowed opacity-80"
                            )}
                        >
                            {item.title}
                        </Link>
                    ))}
                </div>
            </SheetContent>
        </Sheet>
    )
}
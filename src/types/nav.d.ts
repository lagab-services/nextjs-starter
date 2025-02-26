import {LucideIcon} from "lucide-react";
import {JSX} from "react";

export interface NavItem {
    title: string;
    href: string;
    isActive?: boolean;
    emoji?: string;
    icon?: JSX.Element | LucideIcon; // Optionnel : Icône pour chaque lien
    children?: NavItem[];

}
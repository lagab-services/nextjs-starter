import {cva, VariantProps} from "class-variance-authority";
import {cn} from "@/lib/utils";

const sectionVariants = cva(
    "py-8 md:py-12 lg:py-24",
    {
        variants: {
            size: {
                default: "container",
                lg: "w-full ",
            },
        },
        defaultVariants: {
            size: "default",
        },
    }
)

export interface SectionProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof sectionVariants> {
    id?: string,
}

export const Section = ({id, children, size, className}: SectionProps) => {
    return (
        <section id={id} className={cn(sectionVariants({size, className}))}>
            {children}
        </section>
    )
}
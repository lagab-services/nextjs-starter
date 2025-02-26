import {cn} from "@/lib/utils";

export type TimelinePropsItem = {
    title: string;
    description?: string;
    bullet?: React.ReactNode;
    bulletSize?: number;
};

export interface TimelineProps extends React.HTMLAttributes<HTMLDivElement> {
    items: TimelinePropsItem[]
    activeItem: number
    bulletSize?: number
    lineSize?: number
}

const Timeline: React.FC<TimelineProps> = ({className, items, activeItem, bulletSize = 16, lineSize = 2}) => {
    return (
        <ul className={cn(
            "relative pl-4 border-muted",
            className
        )}>
            {items.map((item, index) => (
                <TimelineItem
                    key={index}
                    title={item.title}
                    description={item.description}
                    bullet={item.bullet}
                    isLast={index === items.length - 1}
                    isActive={activeItem === -1 ? false : activeItem >= index + 1}
                    isActiveBullet={activeItem === -1 ? false : activeItem >= index}
                    bulletSize={bulletSize}
                    lineSize={lineSize}
                />
            ))}
        </ul>
    );
};

export type TimelineItemProps = {
    title: string;
    description?: string;
    bullet?: React.ReactNode;
    isLast?: boolean;
    isActive: boolean;
    isActiveBullet: boolean;
    bulletSize: number;
    lineSize: number;
};

const TimelineItem: React.FC<TimelineItemProps> = ({
                                                       title,
                                                       description,
                                                       bullet,
                                                       isLast,
                                                       isActive,
                                                       isActiveBullet,
                                                       bulletSize,
                                                       lineSize,
                                                   }) => {
    return (
        <li
            className={cn(
                "relative border-l pb-8 pl-8",
                isLast && "border-l-transparent pb-0",
                isActive && !isLast && "border-l-primary"
            )}
            style={{borderLeftWidth: `${lineSize}px`}}
        >
            <TimelineItemBullet lineSize={lineSize} bulletSize={bulletSize} isActive={isActiveBullet}>
                {bullet}
            </TimelineItemBullet>
            <TimelineItemTitle>{title}</TimelineItemTitle>
            {description && <TimelineItemDescription>{description}</TimelineItemDescription>}
        </li>
    );
};

export type TimelineItemBulletProps = {
    children?: React.ReactNode;
    isActive?: boolean;
    bulletSize: number;
    lineSize: number;
};

const TimelineItemBullet: React.FC<TimelineItemBulletProps> = ({children, isActive, bulletSize, lineSize}) => {
    return (
        <div
            className={cn(
                "absolute top-0 flex items-center justify-center rounded-full border bg-background",
                isActive && "border-primary"
            )}
            style={{
                width: `${bulletSize}px`,
                height: `${bulletSize}px`,
                left: `${-bulletSize / 2 - lineSize / 2}px`,
                borderWidth: `${lineSize}px`,
            }}
            aria-hidden="true"
        >
            {children}
        </div>
    );
};

const TimelineItemTitle: React.FC<{ children: React.ReactNode }> = ({children}) => {
    return <div className="mb-1 text-base font-semibold leading-none">{children}</div>;
};

const TimelineItemDescription: React.FC<{ children: React.ReactNode }> = ({children}) => {
    return <p className="text-sm text-muted-foreground">{children}</p>;
};

export {Timeline};

import React from 'react';

export interface DashBoardHeaderProps {
    title: string;
    description?: string
}

const DashBoardHeader = ({title, description}: DashBoardHeaderProps) => {
    return (
        <header className="md:overflow-hidden">
            <h2 className='text-2xl font-bold tracking-tight'>{title}</h2>
            {description &&
                <p className='text-muted-foreground'>{description}</p>}
        </header>
    );
};

export default DashBoardHeader;
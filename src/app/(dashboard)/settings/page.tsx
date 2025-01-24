import React from 'react';
import DashBoardHeader from '@/app/(dashboard)/_components/header';

const SettingPage = () => {
    return (
        <>
            <DashBoardHeader title="Settings" description="Update your project name, description, avatar, and topics"/>
            <div className="flex flex-1 flex-col gap-4 overflow-y-auto">
                {Array.from({length: 10}).map((_, i) => (
                    <div
                        key={i}
                        className="aspect-video rounded-xl bg-muted/50"
                    />
                ))}
            </div>
        </>
    );
};

export default SettingPage;
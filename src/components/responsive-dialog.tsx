import React from 'react';
import {useIsMobile} from "@/hooks/use-mobile";
import {Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle} from "@/components/ui/dialog";
import {Button} from "@/components/ui/button";
import {X} from "lucide-react";
import {Drawer, DrawerContent, DrawerHeader, DrawerTitle} from "@/components/ui/drawer";

interface ResponsiveDialogProps {
    title?: string;
    children: (close: () => void) => React.ReactNode;
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

const ResponsiveDialog = ({title, children, open, onOpenChange}: ResponsiveDialogProps) => {
    const isMobile = useIsMobile();

    const close = () => onOpenChange(false);
    if (isMobile) {
        return (
            <Drawer open={open} onOpenChange={onOpenChange}>
                <DrawerContent className="p-4">
                    <DrawerHeader className="flex justify-between items-center">
                        <DrawerTitle>{title}</DrawerTitle>
                        <Button variant="ghost" size="icon" className="hidden" onClick={close}>
                            <X className="w-5 h-5"/>
                        </Button>
                    </DrawerHeader>
                    <div className="p-4">{children(close)}</div>
                </DrawerContent>
            </Drawer>
        );
    }
    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent>
                <DialogHeader className="flex justify-between items-center">
                    <DialogTitle>{title}</DialogTitle>
                </DialogHeader>
                <DialogDescription></DialogDescription>
                {children(close)}
            </DialogContent>
        </Dialog>
    );
};

export default ResponsiveDialog;

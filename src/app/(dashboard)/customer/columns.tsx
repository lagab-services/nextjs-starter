import {ColumnDef} from '@tanstack/react-table'
import {DataTableColumnHeader} from "@/components/table/data-table-column-header";
import {Avatar, AvatarFallback} from '@/components/ui/avatar';
import React from 'react';
import {User} from '@/app/(dashboard)/customer/_lib/validations';
import {Badge} from '@/components/ui/badge';


export const getColumns = (): ColumnDef<User>[] => {
    const getInitials = (firstName: string, lastName: string): string => {
        if (!firstName || !lastName) {
            throw new Error("Le nom et le prénom ne doivent pas être vides.");
        }

        const initalFirstName = firstName.charAt(0).toUpperCase();
        const initialLastName = lastName.charAt(0).toUpperCase();

        return `${initalFirstName}${initialLastName}`;
    };
    return [
        {
            accessorKey: 'name',
            header: ({column}) => (
                <DataTableColumnHeader column={column} title='Nom / Raison sociale'/>
            ),
            cell: ({row}) => <div className='flex items-center space-x-3'>
                <Avatar className='h-7 w-7 inline-block'>
                    <AvatarFallback className="text-xs">{getInitials(row.original.firstname, row.original.lastname)}</AvatarFallback>
                </Avatar>
                <div>
                    <p className="text-sm font-medium leading-none">{row.original.firstname} {row.original.lastname}</p>
                    <p className="text-sm text-muted-foreground">{row.getValue('email')}</p>
                </div>

            </div>,
            enableSorting: false,
            enableHiding: false,
        },
        {
            accessorKey: 'siret',
            header: ({column}) => (
                <DataTableColumnHeader column={column} title='Siret'/>
            ),
            enableSorting: false,
            enableHiding: false,
        },
        {
            accessorKey: 'createdDate',
            header: ({column}) => (
                <DataTableColumnHeader column={column} title="Date d'ajout"/>
            ),
            enableSorting: false,
            enableHiding: false,
        },
        {
            accessorKey: 'email',
            header: ({column}) => (
                <DataTableColumnHeader column={column} title='Email'/>
            ),
            enableSorting: false,
            enableHiding: false,
        },
        {
            accessorKey: 'username',
            header: ({column}) => (
                <DataTableColumnHeader column={column} title='Statut'/>
            ),
            cell: ({row}) => (
                <div className='flex items-center space-x-3'><Badge variant="success">A jour</Badge></div>
            ),
            enableSorting: true,
            enableHiding: false,
        }

    ]
}
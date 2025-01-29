"use client"
import React, {useState} from 'react';
import {fetchUsers} from '@/app/(dashboard)/customer/_lib/queries';
import {useDataTable} from '@/hooks/use-data-table';
import {DataTableFilterField} from '@/types/table';
import {User} from '@/app/(dashboard)/customer/_lib/validations';
import {ColumnDef} from '@tanstack/table-core';
import DataTable from '@/components/table/data-table';
import DataTableToolBar from '@/components/table/data-table-toolbar';
import {getColumns} from '@/app/(dashboard)/customer/columns';
import {Button} from '@/components/ui/button';
import {Plus} from 'lucide-react';
import ResponsiveDialog from "@/components/responsive-dialog";

interface CustomerListProps {
    usersPromise: ReturnType<typeof fetchUsers>
}

const CustomerList = ({usersPromise}: CustomerListProps) => {
    const {data, pageCount} = React.use(usersPromise)
    const columns = React.useMemo<ColumnDef<User>[]>(() => getColumns(), [])


    const filterFields: DataTableFilterField<User>[] = [
        {
            label: "Email",
            value: "email",
            placeholder: "Filter email...",
        }
    ]

    const {table} = useDataTable({
        data,
        columns,
        pageCount,
        filterFields,
        enableAdvancedFilter: false,
        initialState: {
            // sorting: [{id: "createdAt", desc: true}],
            // columnPinning: {right: ["actions"]},
        },
        // For remembering the previous row selection on page change
        getRowId: (originalRow, index) => `${originalRow.id}`,
    });

    const [open, setOpen] = useState(false);

    return (
        <DataTable table={table}>
            <div className="flex justify-end">
                <Button size="sm" variant="secondary" onClick={() => setOpen(true)}><Plus/> Add new customer</Button>
                <ResponsiveDialog title="Ajouter un utilisateur" open={open} onOpenChange={setOpen}>
                    {(close) => (
                        <>
                        </>
                    )}
                </ResponsiveDialog>
            </div>
            <DataTableToolBar table={table} filterFields={filterFields}/>
        </DataTable>

    );
};

export default CustomerList;
import React from 'react';
import CustomerList from '@/app/(dashboard)/customer/customer-list';
import {SearchParams} from '@/types/table';
import {searchParamsSchema} from '@/app/(dashboard)/customer/_lib/validations';
import {fetchUsers} from '@/app/(dashboard)/customer/_lib/queries';

export interface CustomerPageProps {
    searchParams: SearchParams;
}

const CustomerPage = async ({searchParams}: CustomerPageProps) => {
    const currentSearchParams = await searchParams;
    const search = searchParamsSchema.parse(currentSearchParams)
    const usersPromise = fetchUsers(search);

    return (
        <div className="container mx-auto p-6 space-y-5">
            <div className="md:overflow-hidden">
                <h2 className='text-2xl font-bold tracking-tight'>Customers</h2>
                <p className='text-muted-foreground'>
                    Create and manage customers, their information
                </p>
            </div>
            <CustomerList usersPromise={usersPromise}/>
        </div>
    );
};

export default CustomerPage;

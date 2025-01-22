import React from 'react';
import CustomerForm from "@/app/(dashboard)/customer/_components/customer_form";
import CustomerList from '@/app/(dashboard)/customer/customer-list';
import {SearchParams} from '@/types/table';
import {searchParamsSchema} from '@/app/(dashboard)/customer/_lib/validations';
import {fetchUsers} from '@/app/(dashboard)/customer/_lib/queries';

export interface CustomerPageProps {
    searchParams: SearchParams
}

const CustomerPage = ({searchParams}: CustomerPageProps) => {

    const searchParams2 = {page: 1, per_page: 10};

    const search = searchParamsSchema.parse(searchParams2)
    const usersPromise = fetchUsers(search);

    return (
        <div className="container mx-auto py-10 p-6 space-y-5p-6 space-y-5">
            <CustomerList usersPromise={usersPromise}/>
            <CustomerForm/>
        </div>
    );
};

export default CustomerPage;

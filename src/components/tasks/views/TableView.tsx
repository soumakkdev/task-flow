import React from 'react'
import DataTable from '../../widgets/DataTable'
import { ColumnDef } from '@tanstack/react-table'

export default function TableView() {
	type Payment = {
		id: string
		amount: number
		status: 'pending' | 'processing' | 'success' | 'failed'
		email: string
	}

	const payments: Payment[] = [
		{
			id: '728ed52f',
			amount: 100,
			status: 'pending',
			email: 'm@example.com',
		},
		{
			id: '489e1d42',
			amount: 125,
			status: 'processing',
			email: 'example@gmail.com',
		},
	]

	const columns: ColumnDef<Payment>[] = [
		{
			accessorKey: 'status',
			header: 'Status',
		},
		{
			accessorKey: 'email',
			header: 'Email',
		},
		{
			accessorKey: 'amount',
			header: 'Amount',
		},
	]

	return <DataTable columns={columns} data={payments} />
}

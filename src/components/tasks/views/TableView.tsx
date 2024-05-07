import { Badge } from '@/components/ui/badge'
import { TasksResponse } from '@/lib/pb-types'
import { formatDate } from '@/lib/utils'
import { ColumnDef } from '@tanstack/react-table'
import DataTable from '../../widgets/DataTable'

export default function TableView({ tasks }: { tasks: TasksResponse[] }) {
	const columns: ColumnDef<TasksResponse>[] = [
		{
			accessorKey: 'title',
			header: 'Title',
		},
		{
			accessorKey: 'priority',
			header: 'Priority',
		},
		{
			accessorKey: 'expand.status.name',
			header: 'Status',
			cell: ({ getValue }) => {
				const status = getValue() as string
				if (!status) return null
				return <Badge>{status}</Badge>
			},
		},
		{
			accessorKey: 'deadline',
			header: 'Deadline',
			cell: ({ getValue }) => {
				const deadline = getValue() as string
				if (!deadline) return null
				return <p>{formatDate(deadline)}</p>
			},
		},
		{
			accessorKey: 'updated',
			header: 'Last updated',
			cell: ({ getValue }) => {
				const updated = getValue() as string
				if (!updated) return null
				return <p>{formatDate(updated)}</p>
			},
		},
	]

	return <DataTable columns={columns} data={tasks} />
}

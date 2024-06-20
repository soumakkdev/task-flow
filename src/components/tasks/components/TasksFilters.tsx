import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Dropdown from '@/components/widgets/Dropdown'
import { IStatus } from '@/types/tasks'
import { CircleCheck, Flag } from 'lucide-react'
import { PriorityOptions } from '../Tasks.utils'

export default function TasksFilters({ statusList }: { statusList: IStatus[] }) {
	const statusOptions = statusList?.map((status) => ({
		label: status.name,
		value: status.id.toString(),
	}))
	return (
		<div className="flex items-center gap-3">
			<Input placeholder="Search tasks" />
			<Dropdown options={statusOptions}>
				<Button variant="outline" size="sm" className="gap-1">
					<CircleCheck className="h-4 w-4" />
					Status
				</Button>
			</Dropdown>

			<Dropdown options={PriorityOptions}>
				<Button variant="outline" size="sm" className="gap-1">
					<Flag className="h-4 w-4" />
					Priority
				</Button>
			</Dropdown>
		</div>
	)
}

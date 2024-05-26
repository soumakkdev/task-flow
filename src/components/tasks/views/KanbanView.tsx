import { Badge } from '@/components/ui/badge'
import React from 'react'

export default function KanbanView({ tasks, statusList }: { tasks: any[]; statusList: any[] }) {
	return (
		<div className="flex gap-4 flex-1">
			{statusList?.map((status) => {
				const statusTasks = tasks?.filter((task) => task.status === status.id)
				return (
					<div
						key={status.id}
						className="bg-muted rounded-lg border w-60 p-3"
						style={{
							backgroundColor: status.color ? `${status.color}19` : '#f1f5f9',
						}}
					>
						<Badge
							style={{
								color: `${status.color ?? '#0f172a'} `,
								backgroundColor: status.color ? `${status.color}19` : '#f1f5f9',
							}}
						>
							{status.name}
						</Badge>

						<div className="flex flex-col my-4">
							{statusTasks?.map((task) => (
								<div key={task.id} className="bg-white text-sm p-4 rounded-md shadow-sm">
									{task.title}
									{task.priority}
								</div>
							))}
						</div>
					</div>
				)
			})}
		</div>
	)
}

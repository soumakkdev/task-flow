import { Badge } from '@/components/ui/badge'
import { IStatus, ITask } from '@/types/tasks'
import React from 'react'

export default function KanbanView({ tasks, statusList }: { tasks: ITask[]; statusList: IStatus[] }) {
	return (
		<div className="flex gap-4 flex-1 px-4 pb-4">
			{statusList?.map((status) => {
				const statusTasks = tasks?.filter((task) => task.status_id === status.id)
				return (
					<div
						key={status.id}
						className="bg-muted rounded-lg border w-64 p-3"
						style={
							{
								// backgroundColor: status.color ? `${status.color}19` : '#f1f5f9',
							}
						}
					>
						<Badge
							style={{
								color: `${status.color ?? '#0f172a'} `,
								backgroundColor: status.color ? `${status.color}19` : '#f1f5f9',
							}}
						>
							{status.name}
						</Badge>

						<div className="flex flex-col my-3 gap-2">
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

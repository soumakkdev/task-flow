'use client'
import { getTasks } from '@/actions/tasksActions'
import { useQuery } from '@tanstack/react-query'
import TasksTable from './TasksTable'
import { Button } from '../ui/button'
import { Plus } from 'lucide-react'

export default function Tasks() {
	const { data, isLoading } = useQuery({
		queryKey: ['tasks'],
		queryFn: getTasks,
	})

	if (isLoading) return 'Loading'
	console.log(data)

	return (
		<div className="flex-1 p-4">
			<header className="flex items-center justify-between">
				<h1 className="text-2xl font-bold">Tasks</h1>
				<Button>
					<Plus className="h-5 w-5 mr-1" />
					Add Task
				</Button>
			</header>
			<TasksTable />
		</div>
	)
}

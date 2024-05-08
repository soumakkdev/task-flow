'use client'
import { getStatusList, getTasks } from '@/actions/tasksActions'
import { useQuery } from '@tanstack/react-query'
import TableView from './views/TableView'
import { Button } from '../ui/button'
import { Calendar, Plus, SquareKanban, Table } from 'lucide-react'
import { Input } from '../ui/input'
import { ToggleGroup, ToggleGroupItem } from '../ui/toggle-group'
import { useAtom } from 'jotai'
import { TasksViews, currentViewAtom } from './Tasks.utils'
import KanbanView from './views/KanbanView'
import CalendarView from './views/calendar/CalendarView'

export default function Tasks() {
	const [currentView, setCurrentView] = useAtom(currentViewAtom)
	const { data: tasksList, isLoading } = useQuery({
		queryKey: ['tasks'],
		queryFn: getTasks,
	})
	const { data: statusList, isLoading: isStatusLoading } = useQuery({
		queryKey: ['status'],
		queryFn: getStatusList,
	})

	if (isLoading || isStatusLoading) return 'Loading...'

	return (
		<div className="flex-1 p-4 flex flex-col">
			<header className="flex items-center justify-between">
				<h1 className="text-2xl font-bold">Tasks</h1>
				<Button>
					<Plus className="h-5 w-5 mr-1" />
					Add Task
				</Button>
			</header>

			<div className="flex my-3 items-center justify-between">
				<div className="flex items-center gap-3">
					<Input placeholder="Search tasks" />
					<Button variant="secondary">Status</Button>
					<Button variant="secondary">Priority</Button>
				</div>

				<ToggleGroup type="single" value={currentView} onValueChange={(value: TasksViews) => setCurrentView(value)}>
					<ToggleGroupItem value={TasksViews.Table} className="rounded-xl">
						<Table className="h-5 w-5" />
					</ToggleGroupItem>
					<ToggleGroupItem value={TasksViews.Kanban} className="rounded-xl">
						<SquareKanban className="h-5 w-5" />
					</ToggleGroupItem>
					<ToggleGroupItem value={TasksViews.Calendar} className="rounded-xl">
						<Calendar className="h-5 w-5" />
					</ToggleGroupItem>
				</ToggleGroup>
			</div>

			{currentView === TasksViews.Table ? (
				<TableView tasks={tasksList?.items} />
			) : currentView === TasksViews.Kanban ? (
				<KanbanView tasks={tasksList?.items} statusList={statusList?.items} />
			) : currentView === TasksViews.Calendar ? (
				<CalendarView />
			) : null}
		</div>
	)
}

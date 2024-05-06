import { getTasks } from '@/actions/tasksActions'
import SideNav from '@/components/layout/SideNav'
import Tasks from '@/components/tasks/Tasks'
import PrefetchQuery from '@/lib/query/PrefetchQuery'

export default async function RootPage() {
	return (
		<PrefetchQuery queryFn={getTasks} queryKey={['tasks']}>
			<div className="flex h-full">
				<SideNav />
				<Tasks />
			</div>
		</PrefetchQuery>
	)
}

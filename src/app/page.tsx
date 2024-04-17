import { getTasks } from '@/actions/tasksActions'
import ViewTasks from '@/components/tasks/ViewTasks'
import PrefetchQuery from '@/lib/query/PrefetchQuery'

export default async function RootPage() {
	return (
		<PrefetchQuery queryFn={getTasks} queryKey={['tasks']}>
			<ViewTasks />
		</PrefetchQuery>
	)
}

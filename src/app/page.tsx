import SideNav from '@/components/layout/SideNav'
import Tasks from '@/components/tasks/Tasks'

export default async function RootPage() {
	return (
		<div className="flex h-full">
			<SideNav />
			<Tasks />
		</div>
	)
}

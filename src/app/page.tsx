import SideNav from '@/components/layout/SideNav'
import Tasks from '@/components/tasks/Tasks'
import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'

export default async function Index() {
	const supabase = createClient()

	const {
		data: { user },
	} = await supabase.auth.getUser()

	if (!user) {
		return redirect('/login')
	}

	return (
		<div className="flex h-full">
			<SideNav />
			<Tasks />
		</div>
	)
}

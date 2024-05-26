import SideNav from '@/components/layout/SideNav'
import Tasks from '@/components/tasks/Tasks'
import React from 'react'

export default function HomePage() {
	return (
		<div className="flex h-full">
			<SideNav />
			<Tasks />
		</div>
	)
}

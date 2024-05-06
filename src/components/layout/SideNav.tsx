import { Database, LineChart } from 'lucide-react'
import React from 'react'

export default function SideNav() {
	return (
		<div className="border-r w-16">
			<div className="flex flex-col items-center py-4 gap-3">
				<Database />
				<LineChart />
			</div>
		</div>
	)
}

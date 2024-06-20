'use client'
import { Database, LineChart, LogOut, Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import React from 'react'
import { IconButton } from '../ui/icon-button'
import { createClient } from '@/lib/supabase/client'

export default function SideNav() {
	const { theme, setTheme } = useTheme()
	const supabase = createClient()

	async function handleLogout() {
		await supabase.auth.signOut()
		window.location.reload()
	}

	return (
		<div className="border-r w-14">
			<div className="flex flex-col items-center py-4 gap-3">
				<IconButton>
					<Database className="h-5 w-5" />
				</IconButton>
				<IconButton>
					<LineChart className="h-5 w-5" />
				</IconButton>

				<IconButton onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
					{theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
				</IconButton>

				<IconButton onClick={handleLogout}>
					<LogOut className="h-5 w-5" />
				</IconButton>
			</div>
		</div>
	)
}

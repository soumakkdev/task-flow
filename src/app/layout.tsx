import { ReactNode } from 'react'
import './globals.css'
import { Inter } from 'next/font/google'
import { AuthProvider } from '@/lib/AuthContext'
import { cn } from '@/lib/utils'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
	title: 'Task App',
	description: '',
}

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="en" className="h-full w-full">
			<body className={cn('h-full w-full', inter.className)}>
				<AuthProvider>{children}</AuthProvider>
			</body>
		</html>
	)
}

import { GeistSans } from 'geist/font/sans'
import './globals.css'
import QueryProvider from '@/lib/QueryProvider'

export const metadata = {
	title: 'Next.js and Supabase Starter Kit',
	description: 'The fastest way to build apps with Next.js and Supabase',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" className={GeistSans.className}>
			<body className="bg-background text-foreground">
				<QueryProvider>{children}</QueryProvider>
			</body>
		</html>
	)
}

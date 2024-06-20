import { GeistSans } from 'geist/font/sans'
import './globals.css'
import QueryProvider from '@/lib/QueryProvider'
import { ThemeProvider } from 'next-themes'

export const metadata = {
	title: 'Next.js and Supabase Starter Kit',
	description: 'The fastest way to build apps with Next.js and Supabase',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={GeistSans.className}>
				<ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
					<QueryProvider>{children}</QueryProvider>
				</ThemeProvider>
			</body>
		</html>
	)
}

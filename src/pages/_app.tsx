import { AuthProvider } from '@/lib/AuthContext'
import QueryProvider from '@/lib/QueryProvider'
import type { AppProps } from 'next/app'
import '../styles/globals.css'

export default function MyApp({ Component, pageProps }: AppProps) {
	return (
		<QueryProvider>
			<AuthProvider>
				<Component {...pageProps} />
			</AuthProvider>
		</QueryProvider>
	)
}

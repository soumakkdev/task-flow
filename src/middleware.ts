import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import pb from './lib/pb'

export async function middleware(request: NextRequest) {
	const pbAuthCookie = request.cookies.get('pb_auth')
	let isLoggedIn
	if (!pbAuthCookie) isLoggedIn = false
	// load auth store from cookie
	await pb.authStore.loadFromCookie(pbAuthCookie?.value ?? '')
	isLoggedIn = pb.authStore.isValid ?? false

	if (!isLoggedIn) {
		return NextResponse.redirect(new URL('/login', request.url))
	}

	return NextResponse.next()
}

export const config = {
	matcher: '/',
}

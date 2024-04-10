'use client'
import { login } from '@/app/actions'
import { IAuthContext, ILoginWithPasswordParams } from '@/types/auth'
import { ReactNode, createContext, useContext } from 'react'

export const AuthContext = createContext<IAuthContext>({} as IAuthContext)

export const AuthProvider = ({ children }: { children: ReactNode }) => {
	async function loginWithPassword(params: ILoginWithPasswordParams) {
		return await login(params)
		// const response = await fetch('/api/auth/login', {
		// 	method: 'POST',
		// 	headers: { 'Content-Type': 'application/json' },
		// 	body: JSON.stringify(params),
		// })
		// if (!response.ok) {
		// 	throw new Error('Incorrect email or password')
		// }
		// const data = await response.json()
		// return data
	}

	return <AuthContext.Provider value={{ loginWithPassword }}>{children}</AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext)

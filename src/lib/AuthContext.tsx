import { ReactNode, createContext, useContext } from 'react'
import pb from './pb'
import { IAuthContext, ILoginWithPasswordParams } from '@/types/auth'

export const AuthContext = createContext<IAuthContext>({} as IAuthContext)

export const AuthProvider = ({ children }: { children: ReactNode }) => {
	async function loginWithPassword(params: ILoginWithPasswordParams) {
		const authData = await pb.collection('users').authWithPassword(params.email, params.password)
		return authData
	}

	return <AuthContext.Provider value={{ loginWithPassword }}>{children}</AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext)

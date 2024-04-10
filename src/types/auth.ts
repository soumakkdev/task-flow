import { RecordAuthResponse, RecordModel } from 'pocketbase'

export interface ILoginWithPasswordParams {
	email: string
	password: string
}

export interface IAuthContext {
	loginWithPassword: (params: ILoginWithPasswordParams) => void
}
